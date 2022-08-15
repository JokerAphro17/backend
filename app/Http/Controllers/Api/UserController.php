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
            //'role' => 'required|in:superadmin,admin',
            //'uuid_admin' => 'required|exists:users,uuid', 
        ]);
        if ($validator->fails()) {
            return $this->sendError('Validation Error.', $validator->errors(),400);
        }
        try {
           
            $input = $request->all();
            $input['uuid'] = Str::uuid();
            $input['email_verified_at'] = now();
            $input['role'] = 'admin';
            
            $password = Str::random(8);
            $input['password'] = Hash::make($password);
            $user = User::create($input);
            Mail::to($user->email)->send(new UserCreated($user, $password));
            return $this->sendResponse($user, 'Utilisateur créé avec success.',200 );
        } catch (\Exception $e) {
            return $this->sendError('Application crash.', $e->getMessage() ,500 );
        }
        

    }

    /**
     * Display the specified resource.
     *
     * @param  User $user
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
        try {
            return $this->sendResponse($user, 'Utilisateur envoyé avec success.');
        } catch (\Exception $e) {
            return $this->sendError('Application crash.', $e->getMessage());
        }
        
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  User $user
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User $user)
    {
        $validator = Validator::make($request->all(), [
            'lastname' => 'required',
            'firstname' => 'required',
            'email' => 'required|email',
            'role' => 'required|in:admin,superadmin',        ]);
        if ($validator->fails()) {
            return $this->sendError('Validation Error.', $validator->errors());
        }
        try {
            $input = $request->all();
            $admin = $request->user();
            if ($admin->role =='user' && $user->role == 'superadmin') {
                return $this->sendError('Vous n\'avez pas les droits pour modifier un utilisateur.');
            }
            $user->update($input);
            return $this->sendResponse($user, 'Utilisateur modifié avec success.');
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
    public function destroy( )
    {
        //
    }
    public function userListePaginate($page)
    {   
        try{
            $user = User::paginate(5, ['*'], 'page', $page);
            return $this->sendResponse($user, 'Utilisateurs envoyé avec success.');
        }
        catch(\Exception $e){
            return $this->sendError('Application crash.', $e->getMessage());
        }
    }

<<<<<<< HEAD

   
=======
    
>>>>>>> 83a9ad797b3fa00bcf3f232d88cf0457a1ae59ae
}
