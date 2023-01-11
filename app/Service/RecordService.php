<?php

namespace App\Service;

use App\Models\Record;
use App\Models\User;
use App\Service\traits\TCurrentUser;

class RecordService
{
    use TCurrentUser;


    private function updateSumma($summa, $type, $delete = false)
    {
        $user = User::where('id', $this->CurrentUserID())->first();

        if ($type == 'income') {

            if ($delete == true) {
                $new_summa = $user->bill - $summa;
            } else {
                $new_summa = $user->bill + $summa;
            }

            $user->update([
                'bill' => $new_summa
            ]);
        }

        if ($type == 'expense') {
            if ($delete == true) {
                $new_summa = $user->bill + $summa;
            } else {
                $new_summa = $user->bill - $summa;
            }

            $user->update([
                'bill' => $new_summa
            ]);
        }
    }

    public function update($record, $request)
    {
        $updateRecord = $record->update(
            [
                'description' => $request->description,
                'summa' => $request->summa,
                'type' => $request->type,
                'date' => $request->date,
                'income_сategory_id' => $request->income_сategory_id,
                'expenses_category_id' => $request->expenses_category_id

            ]

        );

        $this->updateSumma($request->summa, $request->type, true); //Сначала удаляем сумму

        $this->updateSumma($request->summa, $request->type); //Добавляем заново

        return $updateRecord;
    }


    public function store($request)
    {

        $record = Record::create([
            'description' => $request->description,
            'summa' => $request->summa,
            'type' => $request->type,
            'date' => $request->date,
            'user_id' => $this->CurrentUserID(),
            'income_сategory_id' => $request->incomeCategory,
            'expenses_category_id' => $request->expenseCategory,
        ]);

        $this->updateSumma($request->summa, $request->type);

        return  $record;
    }

    public function delete($record)
    {
        $this->updateSumma($record->summa, $record->type, true);

        $record->delete();
    }

    public function currentMonth($type)
    {
        $year = date('Y');

        $month = date('m');

        $сurrent_date = Record::where('user_id', $this->CurrentUserID())->where('type', $type)->whereYear('date', $year)->whereMonth('date', $month)->get();

        return $сurrent_date;
    }

    public function currentPostMonth($type)
    {
        $year = date('Y');

        $month = date('m');

        $current_post = Record::where('user_id', $this->CurrentUserID())->where('type', $type)->whereYear('date', $year)->whereMonth('date', $month)->orderBy('id', 'desc')->get();

        return $current_post;
    }
}