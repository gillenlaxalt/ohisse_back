<?php

namespace App\Http\Controllers;

use App\Models\User;

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
}
