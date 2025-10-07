<?php

declare(strict_types=1);

use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Route;
use App\Models\Click;
use App\Models\Url;


Route::get('/', fn (): Response => Inertia::render('home'));

Route::get('/dashboard', function (): Response {
    $totalClicks = Click::query()->count();

    $urls = Url::query()
        ->withCount('clicks')
        ->orderByDesc('clicks_count')
        ->get(['id', 'code', 'destination', 'title', 'created_at']);

    return Inertia::render('dashboard', [
        'totalClicks' => $totalClicks,
        'urls' => $urls,
    ]);
});