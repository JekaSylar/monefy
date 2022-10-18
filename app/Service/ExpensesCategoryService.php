<?php

namespace App\Service;

use App\Models\ExpensesCategory;
use Illuminate\Support\Facades\Auth;
use App\Service\traits\TCurrentUser;

class ExpensesCategoryService
{
    use TCurrentUser;

    public function store($request)
    {

        $category = ExpensesCategory::create([
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
    }
}