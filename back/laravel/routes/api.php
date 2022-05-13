<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\SpotController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\BookmarkController;

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

Route::group([

    'middleware' => 'api',
    'prefix' => 'auth'

], function () {


    Route::post('login',
    [
        AuthController::class, 'login'
    ]);
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');



});

Route::group(['middleware' => ['jwt.verify']], function(){

    Route::get(
        '/user/{id}',
        [
            UserController::class, 'item'
        ]

    );

    Route::post(
        '/api/register',
        [
            UserController::class, 'addUser'
        ]
    );

    Route::patch(
        '/api/user/edit/{id}',
        [
            UserController::class, 'editUser'
        ]
    );
});
