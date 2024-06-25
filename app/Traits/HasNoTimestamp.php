<?php

namespace App\Traits;

/**
 * Trait to extend timestamp disable for some model database
 */
trait HasNoTimestamp
{
    public $timestamps = false;
}
