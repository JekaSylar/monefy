<?php

namespace App\Http\Controllers\API\v1;

use App\Http\Controllers\Controller;
use App\Service\ExpensesCategoryService;
use App\Models\ExpensesCategory;
use App\Http\Resources\Expenses\ExpensesCategoryResource;
use App\Http\Resources\Expenses\ExpenseСategoryRecordResource;
use App\Http\Requests\ExpensesCategory\UpdateExpensesCategoryRequest;
use App\Http\Requests\ExpensesCategory\StoreExpensesCategoryRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Response;

class ExpensesCategoryController extends Controller
{
    private $service;

    public function __construct()
    {
        $this->service = new ExpensesCategoryService();
    }

    public function index()
    {
        $id = Auth::id();

        return ExpensesCategoryResource::collection(ExpensesCategory::where('user_id', $id)->orderBy('name', 'desc')->get());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreExpensesCategoryRequest $request)
    {


        $category  = $this->service->store($request);


        return new ExpensesCategoryResource($category);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $query = ExpensesCategory::where('user_id', auth()->user()->id)->where('id', $id)->with('records')->orderBy('name', 'desc')->first();

        return  new ExpenseСategoryRecordResource($query);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateExpensesCategoryRequest $request, ExpensesCategory $expense)
    {
        return $this->service->update($expense, $request);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(ExpensesCategory $expense)
    {
        $expense->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }
}