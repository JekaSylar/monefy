<?php

namespace App\Http\Controllers\api\v1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class CurrencyController extends Controller
{
    public function Privatbank()
    {
        return file_get_contents('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5');
    }
}