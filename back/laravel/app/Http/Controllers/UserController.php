<?php

namespace App\Http\Controllers;

use App\Models\User;
// On utilise également la classe s'occupant des requêtes HTTP pour Lumen
use Illuminate\Http\Request;
// Pour pouvoir utiliser les constantes avec les codes HTTP, on a besoin de Response
use Symfony\Component\HttpFoundation\Response;
//use Illuminate\Support\Facades\Hash;

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

        //We enter the values of the data of this new user with the data supplied in the request
        $newUser->firstname = $request->input('firstname');
        $newUser->lastname = $request->input('lastname');
        $newUser->pseudo = $request->input('pseudo');
        $newUser->email = $request->input('email');
        $newUser->city = $request->input('city');
        $newUser->country = $request->input('country');
        $newUser->description = $request->input('description');
        $newUser->password = $request->input('password');
        // $newUser->password = $request->input(Hash::make('password'));

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

    public function editUser(Request $request, $id)
    {
        // We retrieve the user to update by his ID
        $userToUpdate = User::find($id);

        //We verify if the user exists. If he doesn't, find returns null
        if ( $userToUpdate !==null )
        {
            // we initialize a variable to check if we have at least 1 data
            $oneDataAtLeast = false;

            if( $request->filled('firstname') )
        {
            $userToUpdate->firstname = $request->input('firstname');
            $oneDataAtLeast = true;
        }
            if( $request->filled('lastname') )
        {
            $userToUpdate->lastname = $request->input('lastname');
            $oneDataAtLeast = true;
        }
            if( $request->filled('pseudo') )
        {
            $userToUpdate->pseudo = $request->input('pseudo');
            $oneDataAtLeast = true;
        }
            if( $request->filled('email') )
        {
            $userToUpdate->email = $request->input('email');
            $oneDataAtLeast = true;
        }
            if( $request->filled('city') )
        {
            $userToUpdate->city = $request->input('city');
            $oneDataAtLeast = true;
        }
            if( $request->filled('country') )
        {
            $userToUpdate->country = $request->input('country');
            $oneDataAtLeast = true;
        }
            if( $request->filled('description') )
        {
            $userToUpdate->description = $request->input('description');
            $oneDataAtLeast = true;
        }
            if( $request->filled('password') )
        {
            $userToUpdate->password = $request->input('password');
            $oneDataAtLeast = true;
        }
        }
        if ( !$oneDataAtLeast )
        {
            return response( "", Response::HTTP_BAD_REQUEST );
        }

        if( $userToUpdate->save() )
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

    /**
     * Method to delete a user by this id
     *
     * @param number $id
     * @return void
     */
    public function deleteUser($id)
    {
        $userToDelete = User:: findOrFail($id);

        $isDeteletd = $userToDelete->delete();

        if(!$isDeteletd)
        {
            return response( "", Response::HTTP_INTERNAL_SERVER_ERROR );
        }
    }
}
