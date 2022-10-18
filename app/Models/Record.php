<?php

namespace App\Models;

use EloquentFilter\Filterable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Record extends Model
{
    use HasFactory, Filterable;


    protected $table = 'records';

    protected $fillable = ['description', 'summa', 'type', 'date', 'user_id', 'income_сategory_id', 'expenses_category_id'];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

    public function incomeСategory()
    {
        return $this->belongsTo(IncomeСategory::class, 'income_сategory_id', 'id');
    }

    public function expenseCategory()
    {
        return $this->belongsTo(ExpensesCategory::class, 'expenses_category_id', 'id');
    }
}