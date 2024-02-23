<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Todo\TodoController;


//Auth Route
Route::post('/auth/register', [AuthController::class, "register"]);
Route::post('/auth/login', [AuthController::class, "login"]);

Route::middleware('auth:sanctum')->group(function () {
    Route::resource('/todo', TodoController::class);
});
