<?php

namespace App\Http\Controllers;

use App\Models\Bookmark;
// We import the class that handles HTTP requests for Laravel
use Illuminate\Http\Request;
// Pour pouvoir utiliser les constantes avec les codes HTTP, on a besoin de Response
use Symfony\Component\HttpFoundation\Response;

class BookmarkController extends CoreController
{
  public function addBookmark( Request $request)
  {
      // We create a new Bookmark instance
      $newBookmark = new Bookmark();

      //We enter the values of the data of this new Bookmark with the data supplied in the request
      $newBookmark->id_user = $request->input('userId');
      $newBookmark->id_spot = $request->input('spotId');

      //We save the changes in the database
      $isBookmarked = $newBookmark->save();

      //We verify if the data adding has succeeded
      if($isBookmarked)
      {
        //We send back the data (in JSON) of the user we just created, with a code 201 "created" for RESTful compliance.
      return response()->json($newBookmark, Response::HTTP_CREATED);

      }else{
        // we send response with error 500 code if the insertion failed. No need to convert in Json
      return response( "", Response::HTTP_INTERNAL_SERVER_ERROR );
      }

  }
}
