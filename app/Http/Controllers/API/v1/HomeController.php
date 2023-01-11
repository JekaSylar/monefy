<?php

namespace App\Http\Controllers\API\v1;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Models\Record;
use App\Http\Resources\Checks\CheckResource;

class HomeController extends Controller
{


    public function index()
    {
        $userId = Auth::id();

        $year = date('Y');

        $month = date('m');

        $query = Record::where('user_id', $userId)->whereMonth('date', $month)->whereYear('date', $year)->with(['incomeСategory', 'expenseCategory'])->orderBy('date', 'desc')->get();

        //$query = Record::where('user_id', $userId)->whereMonth('date', $month)->whereYear('date', $year)->with(['incomeСategory', 'expenseCategory'])->orderBy('date', 'desc')->get();


        return CheckResource::collection($query);
    }
}