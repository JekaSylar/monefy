<?php

namespace App\Http\Resources\Checks;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\Checks\CategoryResource;
use App\Models\Record;
use App\Http\Resources\Checks\SummaResource;
use App\Models\IncomeСategory;


class CheckResource extends JsonResource
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
            'user_id' => $this->user_id,
            'incomeCategory' => new CategoryResource($this->incomeСategory),
            'expenseCategory' => new CategoryResource($this->expenseCategory),


        ];
    }
}