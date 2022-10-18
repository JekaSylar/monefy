<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\ExpensesCategoryResource;
use App\Http\Resources\IncomeСategoryResource;
use App\Http\Resources\UserResource;

class RecordResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'description' => $this->description,
            'summa' => $this->summa,
            'type' => $this->type,
            'date' => $this->date,
            'incomeСategory' => new IncomeСategoryResource($this->incomeСategory),
            'expenseCategory' => new ExpensesCategoryResource($this->expenseCategory),
        ];
    }
}