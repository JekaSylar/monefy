<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CategoryIncome extends Model
{
    use HasFactory;

    protected $table = 'category_incomes';

    protected $fillable = ['name', 'user_id'];
}