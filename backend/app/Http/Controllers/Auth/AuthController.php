<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        Hash::make($request->password);
        //$request->password = $hashPass;
        $user = User::create($request->all());
        return $user;
    }

    public function login(Request $request)
    {
        //Compare email from request
        $user = User::where("email", $request->email)->first();

        if (!$user) {
            return response(["messgae" => "Unauthorized"], 400);
        }

        //Verify Password
        $password_compared = Hash::check($request->password, $user->password);

        if (!$password_compared) {
            return response(["message" => "Wrong Password!"]);
        }

        $token = $user->createToken("authToken")->plainTextToken;

        return response([
            "user" => $user,
            "token" => $token
        ]);
    }
}
