<?php

namespace App\Http\Controllers;

use App\Models\User;
// On utilise également la classe s'occupant des requêtes HTTP pour Lumen
use Illuminate\Http\Request;
// Pour pouvoir utiliser les constantes avec les codes HTTP, on a besoin de Response
use Symfony\Component\HttpFoundation\Response;

class UserController extends CoreController
{
    public function list()
    {
        $allUsers = User::all();

        return response()->json($allUsers);
    }

    public function item($id)
    {
        $UserById = User::findOrFail($id);

        return response()->json($UserById);
    }

    public function addUser( Request $request )
    {
        // We create a new User instance
        $newUser = new User();

        //We enter the values of this new user with the data supplied in the request
        $newUser->firstname = $request->input('firstname');
        $newUser->lastname = $request->input('lastname');
        $newUser->pseudo = $request->input('pseudo');
        $newUser->mail = $request->input('mail');
        $newUser->city = $request->input('city');
        $newUser->country = $request->input('country');
        $newUser->description = $request->input('description');
        $newUser->password = $request->input('password');

        //We save the changes in the database
        $isInserted = $newUser->save();

        //We verify if the data adding has succeeded
        if ($isInserted) {
            //We send back the data (in JSON) of the user we just created, with a code 201 "created" for RESTful compliance.
            return response()->json($newUser, Response::HTTP_CREATED);
        }
        else
        {
            // we send response with error 500 code if the insertion failed. No need to convert in Json
            return response( "", Response::HTTP_INTERNAL_SERVER_ERROR );
        }
    }
}
