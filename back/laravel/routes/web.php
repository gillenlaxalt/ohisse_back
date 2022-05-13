<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\SpotController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\BookmarkController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great
|
*/

//====================================================================//
// !Endpoint to API to front-end
//====================================================================//


// Route::get('/', function () {
//     return view('welcome');
// });

//=========================================
// Endpoints de l'entité user
//=========================================



// Route::get(
//     '/api/user',
//     [
//         UserController::class, 'list'
//     ]

// );




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
Route::group(['middleware' => ['jwt.verify']], function(){

    Route::post(
        'api/spots/create',
        [
            SpotController::class, 'addSpot'
        ]
    );
});

//=========================================
// Endpoints de l'entité comment
//=========================================

Route::get(
    'api/comment/{id}',
    [
        CommentController::class, 'findCommentBySpot'
    ]
);

Route::group(['middleware' => ['jwt.verify']], function(){

    Route::post(
        'api/comments/add',
        [
            CommentController::class, 'addComment'
        ]
    );

    Route::delete(
        'api/comments/delete/{id}',
        [
            CommentController::class, 'deleteComment'
        ]
    );
});


//=========================================
// Endpoints de l'entité bookmark
//=========================================

Route::group(['middleware' => ['jwt.verify']], function(){

    Route::get(
        '/api/user/bookmarks/{id}',
        [
            BookmarkController::class, 'findBookmarksByUser'
        ]
    );

    Route::post(
        '/api/user/bookmarks/add',
        [
            BookmarkController::class, 'addBookmark'
        ]
    );

    Route::delete(
        '/api/user/bookmarks/delete/{id}',
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

Route::group(['middleware' => ['jwt.verify']], function(){

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

Route::group(['middleware' => ['jwt.verify']], function(){

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

Route::group(['middleware' => ['jwt.verify']], function(){

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

