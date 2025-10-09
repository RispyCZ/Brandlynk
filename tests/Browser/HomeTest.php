<?php

declare(strict_types=1);

it('has home page', function (): void {
    $page = visit('/');

    $page->assertSee('Branded short links with privacy‑first analytics.');
});
