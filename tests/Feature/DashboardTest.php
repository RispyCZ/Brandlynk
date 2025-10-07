<?php

declare(strict_types=1);

use App\Models\Click;
use App\Models\Url;
use Inertia\Testing\AssertableInertia as Assert;

it('shows dashboard with totals and urls', function (): void {
    // Arrange
    Url::factory()->count(2)->create();
    $urlWithClicks = Url::factory()->create();
    Click::factory()->count(3)->create(['url_id' => $urlWithClicks->id]);

    // Act
    $response = $this->get('/dashboard');

    // Assert
    $response->assertSuccessful();

    $response->assertInertia(fn (Assert $page) => $page
        ->component('dashboard')
        ->has('totalClicks', fn ($total) => $total === 3)
        ->has('urls', fn (Assert $urls) => $urls
            ->where('0.id', $urlWithClicks->id)
            ->where('0.clicks_count', 3)
            ->etc()
        )
    );
});
