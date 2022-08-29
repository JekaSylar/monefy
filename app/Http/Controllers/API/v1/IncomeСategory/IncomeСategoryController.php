<?php

namespace App\Http\Controllers\API\v1\IncomeСategory;

use App\Http\Controllers\API\v1\IncomeСategory\BaseController;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use App\Models\IncomeСategory;
use App\Http\Resources\IncomeСategoryResource;
use App\Http\Requests\IncomeСategory\IncomeСategoryStoreRequest;
use App\Http\Requests\IncomeСategory\IncomeСategoryUpdateRequest;


class IncomeСategoryController extends BaseController
{
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
    public function store(IncomeСategoryStoreRequest $request)
    {
        $id = Auth::id();
        $category = $this->service->store($request, $id);

        return $category;
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
    public function update(IncomeСategoryUpdateRequest $request, IncomeСategory $income)
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