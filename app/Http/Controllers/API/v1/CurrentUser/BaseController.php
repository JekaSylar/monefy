<?php

namespace App\Http\Controllers\API\v1\CurrentUser;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Service\CurrentUserService;

class BaseController extends Controller
{
    protected $service;

    public function __construct(CurrentUserService $service)
    {
        $this->service = $service;
    }
}