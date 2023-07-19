<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Liste extends Model
{
    use HasFactory , SoftDeletes;
    protected $fillable = ['nom' , 'prenom' , 'phone' , 'mail' , 'cin' , 'bordereau' , 'montant'  ] ;
    public function image(){
        return $this->hasOne(Image::class) ;
    }
}
