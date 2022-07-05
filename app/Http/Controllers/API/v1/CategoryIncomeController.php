<?php

namespace App\Http\Controllers\API\v1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use App\Models\CategoryIncome;

class CategoryIncomeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // $user = auth()->user();

        // dd($user);


        $income = CategoryIncome::all();


        return response()->json(['success' => true, 'income' => $income], 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validate = Validator::make($request->all(), [
            'name' => 'required|max:255',
            'user_id' => 'required',
        ]);

        if ($validate->fails()) {
            return  response()->json(['errors' => $validate->errors()->all()], 422);
        }

        $income = CategoryIncome::create([
            'name' => $request->name,
            'user_id' => $request->user_id
        ]);

        if (!$income) {
            return response()->json(['success' => false, 'message' => 'Категория не создана'], 500);
        }

        return response()->json(['success' => true, 'message' => 'Категория создана'], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //$income = CategoryIncome::f
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}