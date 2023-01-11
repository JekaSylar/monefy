<?php

namespace App\Http\Resources\Records;

use Illuminate\Http\Resources\Json\JsonResource;

class RecordCategoryResource extends JsonResource
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
            'date' => $this->date,
        ];
    }
}