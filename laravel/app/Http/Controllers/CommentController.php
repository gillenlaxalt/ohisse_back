<?php

namespace App\Http\Controllers;

use App\Models\Comment;
// We import the class that handles HTTP requests for Laravel
use Illuminate\Http\Request;
// Pour pouvoir utiliser les constantes avec les codes HTTP, on a besoin de Response
use Symfony\Component\HttpFoundation\Response;

class CommentController extends CoreController
{
  public function addComment( Request $request )
  {
    // We create a new Comment instance
    $newComment = new Comment();

    //We enter the values of the data of this new Comment with the data supplied in the request
    $newComment->content = $request->input('content');
    $newComment->id_user = $request->input('userId');
    $newComment->id_spot = $request->input('spotId');

    //We save the changes in the database
    $isInserted = $newComment->save();

    //We verify if the data adding has succeeded
    if($isInserted)
    {
      //We send back the data (in JSON) of the user we just created, with a code 201 "created" for RESTful compliance.
      return response()->json($newComment, Response::HTTP_CREATED);
    }
    else{
      // we send response with error 500 code if the insertion failed. No need to convert in Json
      return response( "", Response::HTTP_INTERNAL_SERVER_ERROR );
    }
  }
}



