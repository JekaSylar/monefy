<?php

namespace App\Http\Controllers\API\v1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use App\Models\IncomeСategory;
use App\Http\Resources\Incomes\IncomeСategoryRecordResource;
use App\Http\Resources\Incomes\IncomeСategoryResource;
use App\Http\Requests\IncomeСategory\StoreIncomeСategoryRequest;
use App\Http\Requests\IncomeСategory\UpdateIncomeСategoryRequest;
use App\Service\IncomeСategoryService;


class IncomeСategoryController extends Controller
{

    private $service;

    public function __construct()
    {
        $this->service = new IncomeСategoryService();
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $id = Auth::id();

        return IncomeСategoryResource::collection(IncomeСategory::where('user_id', $id)->orderBy('name', 'desc')->get());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreIncomeСategoryRequest $request)
    {


        $category  = $this->service->store($request);


        return new IncomeСategoryResource($category);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {

        $query = IncomeСategory::where('user_id', auth()->user()->id)->where('id', $id)->with('records')->orderBy('name', 'desc')->first();

        return  new IncomeСategoryRecordResource($query);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateIncomeСategoryRequest $request, IncomeСategory $income)
    {
        $newCategory = $this->service->update($income, $request);

        return $newCategory;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(IncomeСategory $income)
    {
        $income->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }
}