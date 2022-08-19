<?php

namespace App\Service;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class CurrentUserService
{

    public function update($user, $request)
    {
        if ($request->password != null) {
            $request->update([

                'name' => $request->name,
                'password' => Hash::make($request->password),
            ]);
        } else {
            $user->update([

                'name' => $request->name,
            ]);
        }
    }
}