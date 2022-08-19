<?php

namespace App\Http\Controllers\API\v1\CurrentUser;

use App\Http\Controllers\API\v1\CurrentUser\BaseController;
use App\Http\Resources\CurrentUserResource;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Http\Requests\CurrentUser\CurrentUserUpdateRequest;

class CurrentUserController extends BaseController
{
    public function index()
    {

        $id = Auth::id();

        return new CurrentUserResource(User::findOrFail($id));
    }

    public function update(CurrentUserUpdateRequest $request, User $user)
    {
        $this->service->update($user, $request);

        return $user;
    }
}