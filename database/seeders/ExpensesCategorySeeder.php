<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ExpensesCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('expenses_categories')->insert([
            'name' => 'Продукты',
            'user_id' => '1',
        ]);
        DB::table('expenses_categories')->insert([
            'name' => 'Интернет',
            'user_id' => '1',
        ]);

        DB::table('expenses_categories')->insert([
            'name' => 'Телефон',
            'user_id' => '1',
        ]);
    }
}