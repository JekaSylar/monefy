<?php

namespace App\Service;

use Illuminate\Support\Facades\Hash;
use App\Models\User;

class UserService
{

    public function update($user, $request)
    {
        if ($request->password != null) {
            $user->update([

                'name' => $request->name,
                'password' => Hash::make($request->password),
                'is_admin' => $request->is_admin,
                'bill' => $request->bill,
            ]);
        } else {
            $user->update([

                'name' => $request->name,
                'is_admin' => $request->is_admin,
                'bill' => $request->bill,
            ]);
        }
    }

    public function store($request)
    {
        $user = User::create([
            'name' => $request->name,
            'login' => $request->login,
            'password' => Hash::make($request->password),
            'is_admin' => $request->is_admin
        ]);

        return $user;
    }
}