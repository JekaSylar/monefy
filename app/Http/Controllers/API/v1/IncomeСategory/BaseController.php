<?php

namespace App\Http\Controllers\API\v1\IncomeСategory;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Service\IncomeСategoryService;


class BaseController extends Controller
{
    protected $service;

    public function __construct(IncomeСategoryService $service)
    {
        $this->service = $service;
    }
}