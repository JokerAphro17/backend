<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use App\Mail\VerifyMail;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Models\PasswordReset;
use App\Mail\ResetPasswordMail;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\Api\BaseController;



class AuthController extends BaseController
{
    public function signin(Request $request)
    {
        $vaildator = validator($request->all(), [
            'email' => 'required|email',
            'password' => 'required',
        ]);
        if ($vaildator->fails()) {
            return $this->sendError('Erreur de validations des champs.', $vaildator->errors(),400);
        }
        
        try{
          $loginData = $request->only('email', 'password');
            if(!auth()->attempt($loginData)){
                return $this->sendError('Email ou mot de passe incorrect.', [],400);
            }
            $user = Auth::user();
            if(!$user->email_verified_at){
                return $this->sendError('Votre compte n\'est pas verifié.', [], 403);
            }
            $token = $user->createToken('API TOKEN')->accessToken;
            $user->last_login = now();
            $user->save();
            $userProfile = [
                'uuid' => $user->uuid,
                'lastname' => $user->lastname,
                'firstname' => $user->firstname,
                'email' => $user->email,
                'telephone' => $user->telephone,
                'role' => $user->role,
                'avatar' => $user->avatar,
                'token' => $token,
            ];
             return $this->sendResponse($userProfile, 'Utilisateur authentifié avec succès.');
        } catch (\Trowable $th) {
            return $this->sendError('Erreur lors de la connexion.', $th->getMessage(), 500);
        }
    }
    public function signup(Request $request)
    {
        $vaildator = validator($request->all(), [
            'lastname' => 'required',
            'firstname' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required|confirmed',
            'password_confirmation' => 'required:same:password',
        ]);
        if ($vaildator->fails()) {
            return $this->sendError('Erreur de validations des champs.', $vaildator->errors());
        }
        try{
           $input=$request->all();
           $input['password']=Hash::make($input['password']);
           $input['uuid']=Str::uuid();
           $input['code_verified']=mt_rand(100000, 999999);
           $user=User::create($input);
           Mail::to($user->email)->send(new VerifyMail($user));
            return $this->sendResponse($user, 'Un email de vérification vous a été envoyé.');
        } catch (\Exception $th) {
            return $this->sendError('Erreur lors de la création du compte.', $th->getMessage(), 500);
        }
    }
    public function verifyEmail(Request $request)
    {
        $vaildator = validator($request->all(), [
            'email' => 'required|email',
            'code' => 'required',
        ]);
        if ($vaildator->fails()) {
            return $this->sendError('Erreur de validations des champs.', $vaildator->errors());
        }
        try{
           $user=User::where('code_verified', $request->code)->where('email', $request->email)->first();
           if($user){
               $user->code_verified=null;
               $user->email_verified_at=now();
               $user->save();
               return $this->sendResponse($user, 'Votre compte a été activé avec succès.');
           }else{
               return $this->sendError('Code de vérification incorrect.', [], 401);
           }
        } catch (\Trowable $th) {
            return $this->sendError('Erreur lors de la vérification du compte.', $th->getMessage(), 500);
        }
    }
    public function resendVerifyEmail(Request $request)
    {
        $vaildator = validator($request->all(), [
            'email' => 'required|email',
        ]);

        if ($vaildator->fails()) {
            return $this->sendError('Erreur de validations des champs.', $vaildator->errors());
        }

        try{
           $user=User::where('email', $request->email)->first();
           if($user){
               $user->code_verified=mt_rand(100000, 999999);
               $user->save();
               Mail::to($user->email)->send(new VerifyMail($user));

               return $this->sendResponse($user, 'Un email de vérification vous a été envoyé.');
           }else{
               return $this->sendInfo('Email inconnu.');
           }
        } catch (\Trowable $th) {
            return $this->sendError('Erreur lors de la réenvois du code de vérification.', $th->getMessage(), 500);
        }
    }
    public function resetPassword(Request $request){
        $vaildator = Validator::make($request->all(), [
            'email' => 'required|email',
        ]);
        if ($vaildator->fails()) {
            return $this->sendError('Erreur de validations des champs.', $vaildator->errors());
        }
        try{
           $user=User::where('email', $request->email)->first();
           if(!$user){
               return $this->sendError('Email inconnu.');
           }
            $input=$request->all();
            $input['token']=Str::random(5);
            PasswordReset::create($input);
            Mail::to($user->email)->send(new ResetPasswordMail($input['token']));
            return $this->sendResponse($user, 'Un email de réinitialisation de mot de passe vous a été envoyé.');
        } catch (\Trowable $th) {
            return $this->sendError('Erreur lors de la réinitialisation du mot de passe.', $th->getMessage(), 500);
        }
    }

    public function resetPasswordConfirm(Request $request){
        $vaildator = Validator::make($request->all(), [
            'token' => 'required',
            'email' => 'required|email',
            'password' => 'required',
            'password_confirmation' => 'required:same:password',
        ]);
        if ($vaildator->fails()) {
            return $this->sendError('Erreur de validations des champs.', $vaildator->errors());
        }
        try{
           $passwordReset=PasswordReset::where('token', $request->token)->where('email', $request->email)->first();

           if(!$passwordReset){
               return $this->sendError('Token inconnu.');
           }
            $user=User::where('email', $request->email)->first();
            $user->password=Hash::make($request->password);
            $user->save();
            $passwordReset->delete();
           return $this->sendInfo('Mot de passe réinitialisé avec succès.');
        } catch (\Trowable $th) {
            return $this->sendError('Erreur lors de la réinitialisation du mot de passe.', $th->getMessage(), 500);
        }
    }


    public function logout(Request $request)
    {
        try{
            $request->user()->token()->revoke();
            return $this->sendResponse([], 'Vous êtes déconnecté.');
        } catch (\Trowable $th) {
            return $this->sendError('Erreur lors de la déconnexion.', $th->getMessage(), 500);
    }
    }
    public function me()
    {
        return $this->sendResponse(auth()->user(), 'Utilisateur connecté.');
    }
    public function changePhoto(Request $request){
        $vaildator = Validator::make($request->all(), [
            'photo' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);
        if ($vaildator->fails()) {
            return $this->sendError('Erreur de validations des champs.', $vaildator->errors());
        }
        try{
           $input = $request->all();
            $user = auth()->user();
            if($request->hasFile('photo')){
                $photo = $input['photo']->store('public/photos');
                $user ->avatar = $photo;   
                return $this->sendResponse($user, 'Photo de profil modifiée avec succès.');
            }
            
        } catch (\Trowable $th) {
            return $this->sendError('Erreur lors de la modification de la photo de profil.', $th->getMessage(), 500);
        }
    }
    
}



               

