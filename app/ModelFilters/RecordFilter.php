<?php

namespace App\ModelFilters;

use EloquentFilter\ModelFilter;

class RecordFilter extends ModelFilter
{
    /**
     * Related Models that have ModelFilters as well as the method on the ModelFilter
     * As [relationMethod => [input_key1, input_key2]].
     *
     * @var array
     */
    public $relations = [];



    public function description($description)
    {
        return $this->where('description', 'LIKE', "%$description%");
    }

    public function type($type)
    {
        return $this->where('type', $type);
    }

    public function summa($summa)
    {
        return $this->where('summa', $summa);
    }

    public function date($date)
    {
        return $this->where('date', $date);
    }

    public function incomeСategory($id)
    {
        return $this->related('incomeСategory', 'id',  $id);
    }

    public function expenseCategory($id)
    {
        return $this->related('expenseCategory', 'id',  $id);
    }
}