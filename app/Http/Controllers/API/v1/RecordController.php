<?php

namespace App\Http\Controllers\API\v1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\Record\StoreRecordRequest;
use App\Http\Requests\Record\UpdateRecordRequest;
use App\Service\RecordService;
use App\Http\Resources\Records\RecordResource;
use App\Models\Record;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Response;

class RecordController extends Controller
{
    private $service;

    public function __construct()
    {
        $this->service = new RecordService();
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $id = Auth::id();

        return RecordResource::collection(Record::where('user_id', $id)->orderBy('date', 'desc')->paginate(20));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreRecordRequest $request)
    {
        $record = $this->service->store($request);

        return $record;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {

        $query = Record::where('id', $id)->first();

        return new RecordResource($query);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateRecordRequest $request, Record $record)
    {
        $updateRecord = $this->service->update($record, $request);

        return $updateRecord;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Record $record)
    {

        $this->service->delete($record);

        return response(null, Response::HTTP_NO_CONTENT);
    }

    public function filter(Request $request)
    {
        $id = Auth::id();

        return RecordResource::collection(Record::filter($request->all())->where('user_id', $id)->paginateFilter(10));
    }
}