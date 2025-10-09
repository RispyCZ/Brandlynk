<?php

declare(strict_types=1);

use App\Models\Click;
use App\Models\Url;

test('to array', function () {
    $click = Click::factory()->create()->refresh();

    expect(array_keys($click->toArray()))->toBe([
        'id',  'url_id', 'referer', 'country', 'device', 'clicked_at', 'created_at', 'updated_at',
    ]);
});

test('get url', function () {
    $click = Click::factory()->create()->refresh();

    expect($click->url)->toBeInstanceOf(Url::class);
});
