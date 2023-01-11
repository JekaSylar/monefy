<?php

namespace App\Http\Controllers\api\v1;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Models\Record;
use Illuminate\Http\Request;
use App\Http\Resources\Checks\CheckResource;
use App\Models\User;
use Illuminate\Database\Eloquent\Builder;

class CheckController extends Controller
{


    public function check()
    {
        $userId = Auth::id();

        $query = Record::where('user_id', $userId)->with(['incomeСategory', 'expenseCategory'])->orderBy('date', 'desc')->get();

        return CheckResource::collection($query);
    }

    public function filterYears($year)
    {
        $userId = Auth::id();

        $query = Record::where('user_id', $userId)->whereYear('date', $year)->with(['incomeСategory', 'expenseCategory'])->get();

        return CheckResource::collection($query);
    }

    public function filterMonth($month, $year)
    {
        $userId = Auth::id();


        $query = Record::where('user_id', $userId)->whereMonth('date', $month)->whereYear('date', $year)->with(['incomeСategory', 'expenseCategory'])->get();

        return CheckResource::collection($query);
    }

    public function filterPeriod($dateStart, $dateEnd)
    {
        $userId = Auth::id();

        $query = Record::where('user_id', $userId)->whereBetween('date', [$dateStart, $dateEnd])->with(['incomeСategory', 'expenseCategory'])->get();

        return CheckResource::collection($query);
    }
}