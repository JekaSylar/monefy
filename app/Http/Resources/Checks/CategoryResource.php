<?php

namespace App\Http\Resources\Checks;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Models\Record;
use App\Http\Resources\Checks\RecordCatResource;

class CategoryResource extends JsonResource
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
        ];
    }
}