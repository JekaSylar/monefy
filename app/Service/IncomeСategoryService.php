<?php

namespace App\Service;

use App\Models\IncomeСategory;

class IncomeСategoryService
{
    public function store($request, $user_id)
    {
        $category = IncomeСategory::create([
            'name' => $request->name,
            'user_id' => $user_id,
        ]);

        return $category;
    }

    public function update($category, $request)
    {

        $category->update([

            'name' => $request->name,
        ]);
    }
}