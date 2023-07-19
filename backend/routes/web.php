<?php

use App\Http\Controllers\myController;
use App\Http\Controllers\postController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('' , [myController::class, 'acceuil'])->name('acceuil') ;
Route::get('/voir' , [myController::class, 'voir'])->name('voir') ;
Route::get('/ajouter' , [myController::class, 'ajouter'])->name('ajouter') ;
Route::post('/add' , [myController::class, 'store'])->name('store') ;
Route::get('/modify/{id}' , [myController::class, 'modifier'])->name('modify' , 'id')->whereNumber('id') ;
Route::post('/edit/{id}' , [myController::class, 'edit'])->name('edit' , 'id')->whereNumber('id') ;
Route::get('/delete/{id}' , [myController::class, 'supprimer'])->name('delete' , 'id')->whereNumber('id') ;
Route::post('/pic/{id}' , [myController::class, 'picEdit'])->name('photo' ,'id')->whereNumber('id');