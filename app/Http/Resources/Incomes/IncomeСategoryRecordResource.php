<?php

namespace App\Http\Resources\Incomes;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\Records\RecordCategoryResource;


class IncomeСategoryRecordResource extends JsonResource
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
            'records' => RecordCategoryResource::collection($this->records)
        ];
    }
}