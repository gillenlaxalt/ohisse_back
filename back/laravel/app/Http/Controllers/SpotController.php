<?php

namespace App\Http\Controllers;

use App\Models\Spot;
use Illuminate\Http\Request;
// Pour pouvoir utiliser les constantes avec les codes HTTP, on a besoin de Response
use Symfony\Component\HttpFoundation\Response;

class SpotController extends CoreController
{

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
        if ($isInserted) {
            //We send back the data (in JSON) of the user we just created, with a code 201 "created" for RESTful compliance.
            return response()->json($newSpot, Response::HTTP_CREATED);
        } else {
            // we send response with error 500 code if the insertion failed. No need to convert in Json
            return response("", Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function editSpot(Request $request, $id)
    {
        $editToSpot = Spot::findOrFail($id);
        //We verify if the user exists. If he doesn't, find returns null
        if ($editToSpot !== null) {
            // we initialize a variable to check if we have at least 1 data
            $oneDataAtLeast = false;

            if ($request->filled('name')) {
                $editToSpot->name = $request->input('name');
                $oneDataAtLeast = true;
            }
            if($request->filled('number')) {
                $editToSpot->number = $request->input('number');
                $oneDataAtLeast=true;
            }
            if($request->filled('street')) {
                $editToSpot->zipcode = $request->input('zipcode');
                $oneDataAtLeast=true;
            }
            if($request->filled('city')) {
                $editToSpot->city = $request->input('city');
                $oneDataAtLeast=true;
            }
            if($request->filled('country')) {
                $editToSpot->country = $request->input('country');
                $oneDataAtLeast=true;
            }
            if($request->filled('longitude')) {
                $editToSpot->longitude = $request->input('longitude');
                $oneDataAtLeast=true;
            }
            if($request->filled('latitude')) {
                $editToSpot->latitude = $request->input('latitude');
                $oneDataAtLeast=true;
            }
            if($request->filled('discipline')) {
                $editToSpot->discipline = $request->input('discipline');
                $oneDataAtLeast=true;
            }
            if($request->filled('type')) {
                $editToSpot->type = $request->input('type');
                $oneDataAtLeast=true;
            }
            if($request->filled('rock_type')) {
                $editToSpot->rock_type = $request->input('rock_type');
                $oneDataAtLeast=true;
            }
            if($request->filled('picture')) {
                $editToSpot->picture = $request->input('picture');
                $oneDataAtLeast=true;
            }
            if($request->filled('various')) {
                $editToSpot->various = $request->input('various');
                $oneDataAtLeast=true;
            }
            if($request->filled('reputation')) {
                $editToSpot->reputation = $request->input('reputation');
                $oneDataAtLeast=true;
            }
            if($request->filled('min_difficulty')) {
                $editToSpot->reputation = $request->input('min_difficulty');
                $oneDataAtLeast=true;
            }
            if($request->filled('max_difficulty')) {
                $editToSpot->max_difficulty = $request->input('max_difficulty');
                $oneDataAtLeast=true;
            }
        }
        if ( !$oneDataAtLeast )
        {
            return response( "", Response::HTTP_BAD_REQUEST );
        }

        if( $editToSpot->save() )
        {
          // so return a code HTTP 204 "No Content"
          // https://restfulapi.net/http-methods/#put
          // without body (not JSON or HTML)
          return response( "", Response::HTTP_NO_CONTENT );
        }
        else
        {
          // so return a code HTTP 500 "Internal Server Error"
          // https://restfulapi.net/http-status-codes/
          // without body (not JSON or HTML)
          return response( "", Response::HTTP_INTERNAL_SERVER_ERROR );
        }
    }
}
