<?php

namespace App\Http\Controllers\API\v1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{

    public function login(Request $request)
    {


        $validate = Validator::make($request->all(), [
            'login' => 'required',
            'password' => 'required',
        ]);

        if ($validate->fails()) {
            return  response()->json(['errors' => $validate->errors()->all()], 422);
        }

        if (!auth()->attempt($request->all())) {
            return response()->json(['errors' => 'Не верный логин и пароль'], 401);
        }

        $accessToken = auth()->user()->createToken('authToken')->accessToken;

        return response(['user' => auth()->user(), 'access_token' => $accessToken], 200);
    }
}