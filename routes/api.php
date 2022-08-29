<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\v1\User\UserController;
use App\Http\Controllers\API\v1\CurrentUser\CurrentUserController;
use App\Http\Controllers\API\v1\IncomeСategory\IncomeСategoryController;



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

/*Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

*/


Route::prefix('v1')->middleware('auth:sanctum')->group(function () {
    Route::middleware('admin')->group(function () {
        Route::apiResources([
            'users' => UserController::class,
        ]);
    });

    Route::get('/user', [CurrentUserController::class, 'index']);
    Route::put('/user/{user}', [CurrentUserController::class, 'update']);

    //Категории доходов IncomeСategoryController
    Route::apiResources([
        'incomes' => IncomeСategoryController::class,
    ]);
});