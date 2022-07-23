<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use App\Http\Controllers\API\BaseController;

class AuthController extends BaseController
{
    public function signin(Request $request)
    {
        $vaildator = validator($request->all(), [
            'email' => 'required|email',
            'password' => 'required',
            'password_confirmation' => 'required|same:password',
        ]);
        if ($vaildator->fails()) {
            return $this->sendError('Erreur de validations des champs.', $vaildator->errors());
        }

        try{
           $user = User::where('email', $request->email)->first();
           if($user){
               if(Hash::check($request->password, $user->password)){
                if(!$user->email_verified_at){
                    return $this->sendError('Votre compte n\'est pas encore activé veuillez vérifier votre boîte mail.');
                }
                   $user->last_login = now();
                   $user->save();
                   $token = Str::random(60);
                   $userProfile = [
                       'uuid' => $user->uuid,
                        'lastname' => $user->lastname,
                        'firstname' => $user->firstname,
                        'telephone' => $user->telephone,
                        'email' => $user->email,
                        'token' => $token,
                   ];
                   return $this->sendResponse($userProfile, 'Utilisateur connecté avec succès.');
               }else{
                   return $this->sendError('Email ou mot de passe incorrect.');
               }
            }
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
           $input['uuid']=Str::random(60);
           $input['code_verified']=mt_rand(100000, 999999);
           $user=User::create($input);
           Mail::to($user->email)->send(new VerifyEmail($user, $user->code_verified));
            return $this->sendResponse($user, 'Un email de vérification vous a été envoyé.');
        } catch (\Trowable $th) {
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
               return $this->sendInfo('Code de vérification incorrect.');
           }
        } catch (\Trowable $th) {
            return $this->sendError('Erreur lors de la vérification du compte.', $th->getMessage(), 500);
        }
    }
    public function resendEmail(Request $request)
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
               Mail::to($user->email)->send(new VerifyEmail($user, $user->code_verified));
               return $this->sendResponse($user, 'Un email de vérification vous a été envoyé.');
           }else{
               return $this->sendInfo('Email inconnu.');
           }
        } catch (\Trowable $th) {
            return $this->sendError('Erreur lors de la réenvois du code de vérification.', $th->getMessage(), 500);
        }
    }
}

