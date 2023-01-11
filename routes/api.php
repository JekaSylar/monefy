<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\v1\UserController;
use App\Http\Controllers\API\v1\CurrentUserController;
use App\Http\Controllers\API\v1\IncomeСategoryController;
use App\Http\Controllers\API\v1\ExpensesCategoryController;
use App\Http\Controllers\API\v1\RecordController;
use App\Http\Controllers\API\v1\HomeController;
use App\Http\Controllers\api\v1\CheckController;
use App\Http\Controllers\api\v1\CurrencyController;



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
        'expenses' => ExpensesCategoryController::class,
        'records' => RecordController::class
    ]);
    //Поиск по записям
    Route::post('records/filter', [RecordController::class, 'filter']);

    //Курс валют
    Route::get('currency', [CurrencyController::class, 'Privatbank']);

    //Главная страница
    Route::get('index', [HomeController::class, 'index']);



    //Счет страница
    Route::get('checks/check', [CheckController::class, 'check']);
    Route::get('checks/years/{year}', [CheckController::class, 'filterYears']);
    Route::get('checks/month/{month}/{year}', [CheckController::class, 'filterMonth']);
    Route::get('checks/date/{dateStart}/{dateEnd}', [CheckController::class, 'filterPeriod']);
});