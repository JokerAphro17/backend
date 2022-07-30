<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use App\Mail\UserCreated;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\Api\BaseController;

class UserController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $users = User::all();
            return $this->sendResponse($users, 'Utilisateurs envoyé avec success.');
        } catch (\Exception $e) {
            return $this->sendError('Application crash.', $e->getMessage());
        }
        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'lastname' => 'required',
            'firstname' => 'required',
            'email' => 'required|email|unique:users',
            'role' => 'required|in:superadmin,admin',
            'uuid_admin' => 'required|exists:users,uuid',
        ]);
        if ($validator->fails()) {
            return $this->sendError('Validation Error.', $validator->errors());
        }
        try {
            $admin = User::where('uuid', $request->uuid_admin)->first();
            if ($admin->role != 'superadmin') {
                return $this->sendError('Vous n\'avez pas les droits pour créer un un utilisateur.');
            }
            $input = $request->all();
            $input['uuid'] = Str::uuid();
            $input['email_verified_at'] = now();
            $password = Str::random(8);
            $input['password'] = Hash::make($password);
            $user = User::create($input);
            Mail::to($user->email)->send(new UserCreated($user, $password));
            return $this->sendResponse($user, 'Utilisateur créé avec success.');
        } catch (\Exception $e) {
            return $this->sendError('Application crash.', $e->getMessage());
        }
        

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($uuid)
    {
        try {
            $user = User::where('uuid', $uuid)->first();
            return $this->sendResponse($user, 'Utilisateur envoyé avec success.');
        } catch (\Exception $e) {
            return $this->sendError('Application crash.', $e->getMessage());
        }
        
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'uuid' => 'required|exists:users,uuid',
            'lastname' => 'required',
            'firstname' => 'required',
            'email' => 'required|email',
            'role' => 'required|in:admin,superadmin',
            'uuid_admin' => 'required|exists:users,uuid',
        ]);
        if ($validator->fails()) {
            return $this->sendError('Validation Error.', $validator->errors());
        }
        try {
            $input = $request->all();
            $user = User::where('uuid', $request->uuid)->first();
            $admin = User::where('uuid', $request->uuid_admin)->first();
            if ($admin->role != 'superadmin' && $user->role == 'superadmin') {
                return $this->sendError('Vous n\'avez pas les droits pour modifier un utilisateur.');
            }
            if(!$user->last_online || $input['email'] == $user->email) {
                $user->update($input);
                return $this->sendResponse($user, 'Utilisateur modifié avec success.');
            }
            unset($input['email']);
            $user->update($input);
            return $this->sendResponse($user, 'Utilisateur modifié avec success mais pas son email.');

        } catch (\Exception $e) {
            return $this->sendError('Application crash.', $e->getMessage());
        }
        

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}