<?php

namespace App\Http\Controllers;

use App\Models\Spot;
use Illuminate\Http\Request;
// Pour pouvoir utiliser les constantes avec les codes HTTP, on a besoin de Response
use Symfony\Component\HttpFoundation\Response;

class SpotController extends CoreController {

    public function list()
    {
        $allSpots = Spot::all();

        return response()->json($allSpots);
    }

    public function item($id)
    {
      $spotById = Spot::findOrFail($id);
      return response()->json($spotById);
    }

    public function addSpot(Request $request)
    {
      // We create a new Spot instance
      $newSpot = new Spot();

      //We enter the values of the data of this new spot with the data supplied in the request
      $newSpot->name = $request->input('name');
      $newSpot->number = $request->input('number');
      $newSpot->street = $request->input('street');
      $newSpot->zipcode = $request->input('zipcode');
      $newSpot->city = $request->input('city');
      $newSpot->country = $request->input('country');
      $newSpot->longitude = $request->input('longitude');
      $newSpot->latitude = $request->input('latitude');
      $newSpot->discipline = $request->input('discipline');
      $newSpot->type = $request->input('type');
      $newSpot->rock_type = $request->input('rock_type');
      $newSpot->picture = $request->input('picture');
      $newSpot->various = $request->input('various');
      $newSpot->reputation = $request->input('reputation');
      $newSpot->min_difficulty = $request->input('min_difficulty');
      $newSpot->max_difficulty = $request->input('max_difficulty');

      //We save the changes in the database
      $isInserted = $newSpot->save();

      //We verify if the data adding has succeeded
      if($isInserted)
      {
        //We send back the data (in JSON) of the user we just created, with a code 201 "created" for RESTful compliance.
        return response()->json($newSpot, Response::HTTP_CREATED);
      }
      else{
        // we send response with error 500 code if the insertion failed. No need to convert in Json
        return response( "", Response::HTTP_INTERNAL_SERVER_ERROR );
      }
    }
}
