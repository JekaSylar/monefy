<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Record>
 */
class RecordFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {

        return [
            'description' => $this->faker->sentence(2, true),
            'summa' => $this->faker->numberBetween(10, 120),
            'type' => $this->faker->randomElement(['income', 'expense']),
            'date' => $this->faker->date('Y-m-d'),
            'user_id' => $this->faker->numberBetween(1, 5),
            'income_сategory_id' => $this->faker->randomElement([1, 2, 3, NULL]),
            'expenses_category_id' => $this->faker->randomElement([1, 2, 3, NULL]),
        ];
    }
}