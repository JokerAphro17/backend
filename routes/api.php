<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::post('/signin', [AuthController::class, 'signin']);
Route::post('/signup', [AuthController::class, 'signup']);
Route::post('email/verify', [AuthController::class, 'verifyEmail']);
Route::post('email/resend', [AuthController::class, 'resendVerifyEmail']);
Route::post('password/reset', [AuthController::class, 'resetPassword']);
Route::post('password/change', [AuthController::class, 'changePassword']);

Route::resource('user', UserController::class);
