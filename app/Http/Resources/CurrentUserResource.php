<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\Incomes\IncomeСategoryResource;
use App\Http\Resources\Expenses\ExpensesCategoryResource;

class CurrentUserResource extends JsonResource
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
            'name' => $this->name,
            'email' => $this->email,
            'is_admin' => $this->is_admin,
            'bill' => $this->bill,
            'incomesCategories' =>  IncomeСategoryResource::collection($this->IncomesСategories),
            'expensesCategories' =>  ExpensesCategoryResource::collection($this->ExpensesCategories),
        ];
    }
}