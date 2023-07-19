<?php

use App\Http\Controllers\ApiController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('/users' , [ApiController::class , 'getAllUsers']);
Route::get('/dasi' , [ApiController::class , 'getDASI']);
Route::get('/aes' , [ApiController::class , 'getAES']);
Route::get('/rpm' , [ApiController::class , 'getRPM']);
Route::get('/connections' , [ApiController::class, 'connections']);
Route::post('/add/liste' , [ApiController::class, 'store']);
Route::post('/add/user' , [ApiController::class, 'setNewUser']);
