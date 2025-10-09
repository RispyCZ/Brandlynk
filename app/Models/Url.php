<?php

declare(strict_types=1);

namespace App\Models;

use Carbon\CarbonInterface;
use Database\Factories\UrlFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * @property-read int $id
 * @property string $code
 * @property string $destination
 * @property string|null $title
 * @property-read CarbonInterface $created_at
 * @property-read CarbonInterface $updated_at
 */
final class Url extends Model
{
    /** @use HasFactory<UrlFactory> */
    use HasFactory;

    protected $fillable = [
        'code',
        'destination',
        'title',
    ];

    /**
     * @return HasMany<Click, $this>
     */
    public function clicks(): HasMany
    {
        return $this->hasMany(Click::class);
    }
}
