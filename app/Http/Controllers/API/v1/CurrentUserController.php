<?php

namespace App\Http\Controllers\API\v1;

use App\Http\Controllers\Controller;
use App\Http\Resources\CurrentUserResource;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Http\Requests\CurrentUser\CurrentUserUpdateRequest;
use App\Service\CurrentUserService;

class CurrentUserController extends Controller
{
    private $service;

    public function __construct()
    {
        $this->service = new CurrentUserService();
    }

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