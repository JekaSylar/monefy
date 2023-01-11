<?php

namespace App\Http\Resources\Records;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\Expenses\ExpensesCategoryResource;
use App\Http\Resources\Incomes\IncomeСategoryResource;


class RecordCurrentResource extends JsonResource
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [

            'summa' => $this->summa,
        ];
    }
}