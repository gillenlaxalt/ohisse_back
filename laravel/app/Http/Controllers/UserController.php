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
}
