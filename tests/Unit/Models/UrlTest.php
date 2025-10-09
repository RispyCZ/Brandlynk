<?php

declare(strict_types=1);

use App\Models\Url;
use Illuminate\Database\Eloquent\Collection;

test('to array', function () {
    $url = Url::factory()->create()->refresh();

    expect(array_keys($url->toArray()))->toBe([
        'id', 'code', 'destination',  'title', 'created_at', 'updated_at',
    ]);
});

test('get url', function () {
    $url = Url::factory()->create()->refresh();

    expect($url->clicks)->toBeInstanceOf(Collection::class);
});
