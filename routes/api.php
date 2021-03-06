<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\v1\AuthController;
use App\Http\Controllers\API\v1\CategoryIncomeController;
use App\Http\Controllers\API\v1\UserController;



/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|

*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});




Route::prefix('v1')->middleware('auth')->group(function () {
    Route::apiResources([
        'categoryincomes' => CategoryIncomeController::class,
        'users' => UserController::class,
    ]);
});

Route::group(['prefix' => 'v1'], function () {

    Route::post('login', [AuthController::class, 'login'])->name('login');
});