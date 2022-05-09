<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\SpotController;
use App\Http\Controllers\CommentController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/



Route::get('/', function () {
    return view('welcome');
});

//=========================================
// Endpoints de l'entité user
//=========================================

Route::get(
    '/api/user',
    [
        UserController::class, 'list'
    ]

);

Route::get(
    '/api/user/{id}',
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

//=========================================
// Endpoints de l'entité spot
//=========================================

Route::get(
    '/api/spots',
    [
        SpotController::class, 'list'
    ]
);

Route::get(
    '/api/spots/{id}',
    [
        SpotController::class, 'item'
    ]
);

Route::post(
    'api/spots/create',
    [
        SpotController::class, 'addSpot'
    ]
    );

//=========================================
// Endpoints de l'entité comment
//=========================================

Route::post(
    'api/comments/add',
    [
        CommentController::class, 'addComment'
    ]
    );
