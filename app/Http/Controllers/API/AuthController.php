<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $validate = Validator::make($request->all(), [
            'login' => 'required|unique:users|max:255',
            'name' => 'required|max:255',
            'email' => 'required|unique:users|email',
            'password' => 'required|between:6, 255|confirmed',
            'is_admin' => 'boolean|required'
        ]);

        if ($validate->fails()) {
            return  response()->json(['errors' => $validate->errors()->all()], 422);
        }

        $user = User::create([
            'name' => $request->name,
            'login' => $request->login,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'is_admin' => $request->is_admin
        ]);

        if (!$user) {
            return response()->json(['success' => false, 'message' => 'Пользователь не создан'], 500);
        }

        return response()->json(['success' => true, 'message' => 'Пользователь создан'], 200);
    }

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