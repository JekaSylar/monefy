<?php

namespace App\Http\Controllers\API\v1\User;

use App\Service\UserService;
use App\Http\Controllers\Controller;

class BaseController extends Controller
{
    protected $service;

    public function __construct(UserService $service)
    {
        $this->service = $service;
    }
}