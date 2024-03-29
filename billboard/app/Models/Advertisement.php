<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Advertisement extends Model
{
    use HasFactory, SoftDeletes;

    protected $guarded = false;

    protected function createdAt(): Attribute
    {
        return Attribute::make(
          get: fn ($date) => Carbon::parse($date)->diffForHumans()
        );
    }

    protected function updatedAt(): Attribute
    {
        return Attribute::make(
          get: fn ($date) => Carbon::parse($date)->diffForHumans()
        );
    }
}
