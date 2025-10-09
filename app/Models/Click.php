<?php

declare(strict_types=1);

namespace App\Models;

use Carbon\CarbonInterface;
use Database\Factories\ClickFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * @property-read int $id
 * @property int $url_id
 * @property string|null $referer
 * @property string|null $country
 * @property string|null $device
 * @property CarbonInterface $clicked_at
 * @property-read CarbonInterface $created_at
 * @property-read CarbonInterface $updated_at
 */
final class Click extends Model
{
    /** @use HasFactory<ClickFactory> */
    use HasFactory;

    public $fillable = [
        'url_id', 'referer', 'country', 'device', 'clicked_at',
    ];

    /**
     * @return BelongsTo<Url, $this>
     */
    public function url(): BelongsTo
    {
        return $this->belongsTo(Url::class);
    }

    public function casts(): array
    {
        return [
            'clicked_at' => 'datetime',
        ];
    }
}
