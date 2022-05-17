<?php

namespace App\Http\Controllers;

use App\Models\User;

use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;


class AuthController extends CoreController
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    /* public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login']]);
    }
    */
    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login()
    {
        $credentials = request(['email', 'password']);

        if (!$token = auth()->attempt($credentials)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        $user=Auth::user();
        // var_dump($user);


        $userId = Auth::user()->id;
        $userFirstname = Auth::user()->firstname;
        $userLastname = Auth::user()->lastname;
        $userPseudo = Auth::user()->pseudo;
        $userCity = Auth::user()->city;
        $userCountry = Auth::user()->country;
        $userDescription = Auth::user()->description;
        $userRole = Auth::user()->role;

        $userData = [
            "id" => $userId,
            "firstname" => $userFirstname,
            "lastname" => $userLastname,
            "pseudo" => $userPseudo,
            "city" => $userCity,
            "country" => $userCountry,
            "description" => $userDescription,
            "role" => $userRole
        ];

        $Token= $this->respondWithToken($token);

        return response()->json(['user' => $userData, 'token' => $Token]);

       

    }

    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    // public function me()
    // {
    //     return response()->json(auth()->user());
    // }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    // public function refresh()
    // {
    //     return $this->respondWithToken(auth()->refresh());
    // }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60
        ]);
    }
}
