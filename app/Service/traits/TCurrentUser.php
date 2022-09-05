<?php

namespace App\Service\traits;

use Illuminate\Support\Facades\Auth;


trait TCurrentUser
{

    public function CurrentUserID()
    {
        return Auth::id();
    }
}