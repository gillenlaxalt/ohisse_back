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



Route::post(
    'login',
    [
        AuthController::class, 'login'
    ]
);
Route::post(
    'logout',
    [
        AuthController::class, 'logout'
    ]
);





//====================================================================//
// !Endpoint to API to front-end
//====================================================================//


//=========================================
// Endpoints de l'entité user
//=========================================

Route::post(
    '/register',
    [
        UserController::class, 'addUser'
    ]
);


Route::group(['middleware' => ['jwt.verify']], function () {

    Route::get(
        '/user/{id}',
        [
            UserController::class, 'item'
        ]

    );

    Route::patch(
        '/user/edit/{id}',
        [
            UserController::class, 'editUser'
        ]
    );
});

//=========================================
// Endpoints de l'entité spot
//=========================================

Route::get(
    '/spots',
    [
        SpotController::class, 'list'
    ]
);

Route::get(
    '/spots/{id}',
    [
        SpotController::class, 'item'
    ]
);
Route::group(['middleware' => ['jwt.verify']], function () {

    Route::post(
        '/spots/create',
        [
            SpotController::class, 'addSpot'
        ]
    );
});

//=========================================
// Endpoints de l'entité comment
//=========================================

Route::get(
    '/comment/{id}',
    [
        CommentController::class, 'findCommentBySpot'
    ]
);

Route::group(['middleware' => ['jwt.verify']], function () {

    Route::post(
        '/comments/add',
        [
            CommentController::class, 'addComment'
        ]
    );

    Route::delete(
        '/comments/delete/{id}',
        [
            CommentController::class, 'deleteComment'
        ]
    );
});


//=========================================
// Endpoints de l'entité bookmark
//=========================================

Route::group(['middleware' => ['jwt.verify']], function () {

    Route::get(
        '/user/bookmarks/{id}',
        [
            BookmarkController::class, 'findBookmarksByUser'
        ]
    );

    Route::post(
        '/user/bookmarks/add',
        [
            BookmarkController::class, 'addBookmark'
        ]
    );

    Route::delete(
        '/user/bookmarks/delete/{id}',
        [
            BookmarkController::class, 'deleteBookmark'
        ]
    );
});


//====================================================================//
// !Endpoint for back-office
//====================================================================//

//=========================================
// Endpoints de l'entité user
//=========================================

Route::group(['middleware' => ['jwt.verify']], function () {

    Route::get(
        '/admin/users',
        [
            UserController::class, 'list'
        ]
    );

    Route::get(
        '/admin/user/{id}',
        [
            UserController::class, 'item'
        ]
    );

    Route::patch(
        '/admin/user/edit/{id}',
        [
            UserController::class, 'editUser'
        ]
    );

    Route::delete(
        '/admin/user/delete/{id}',
        [
            UserController::class, 'deleteUser'
        ]
    );
});


//=========================================
// Endpoints de l'entité spots
//=========================================

Route::group(['middleware' => ['jwt.verify']], function () {

    Route::get(
        '/admin/spots',
        [
            SpotController::class, 'list'
        ]
    );

    Route::post(
        '/admin/spots/create',
        [
            SpotController::class, 'addSpot'
        ]
    );

    Route::patch(
        '/admin/spots/edit/{id}',
        [
            SpotController::class, 'editSpot'
        ]
    );

    Route::delete(
        '/admin/spots/delete/{id}',
        [
            SpotController::class, 'deleteSpot'
        ]
    );
});


//=========================================
// Endpoints de l'entité comments
//=========================================

Route::group(['middleware' => ['jwt.verify']], function () {

    Route::get(
        '/admin/comments',
        [
            CommentController::class, 'list'
        ]
    );

    Route::delete(
        '/admin/comments/delete/{id}',
        [
            CommentController::class, 'deleteComment'
        ]
    );
});
