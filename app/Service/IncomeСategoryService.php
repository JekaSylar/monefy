<?php

namespace App\Service;

use App\Models\IncomeСategory;
use Illuminate\Support\Facades\Auth;
use App\Service\traits\TCurrentUser;

class IncomeСategoryService
{
    use TCurrentUser;

    public function store($request)
    {

        $category = IncomeСategory::create([
            'name' => $request->name,
            'user_id' => $this->CurrentUserID(),
        ]);

        return $category;
    }

    public function update($category, $request)
    {

        $newCategory = $category->update([

            'name' => $request->name,
        ]);

        return $newCategory;
    }
}