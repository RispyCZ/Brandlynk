<?php

declare(strict_types=1);

namespace Database\Factories;

use App\Models\Click;
use App\Models\Url;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Click>
 */
final class ClickFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'url_id' => Url::factory(),
            'referer' => fake()->optional()->url(),
            'country' => fake()->optional()->countryCode(),
            'device' => fake()->optional()->randomElement(['desktop', 'mobile', 'tablet']),
            'clicked_at' => now(),
        ];
    }
}
