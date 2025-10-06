<?php

declare(strict_types=1);

use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Route;


Route::get('/', fn (): Response => Inertia::render('home'));