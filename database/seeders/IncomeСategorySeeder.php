<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class IncomeСategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('income_сategories')->insert([
            'name' => 'Зарплата',
            'user_id' => '1',
        ]);
        DB::table('income_сategories')->insert([
            'name' => 'Фриланс',
            'user_id' => '1',
        ]);

        DB::table('income_сategories')->insert([
            'name' => 'Пенсия',
            'user_id' => '1',
        ]);
    }
}