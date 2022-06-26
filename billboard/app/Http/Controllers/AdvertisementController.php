<?php

namespace App\Http\Controllers;

use App\Http\Requests\Advertisement\StoreAdvertisementRequest;
use App\Http\Requests\Advertisement\UpdateAdvertisementRequest;
use App\Http\Resources\AdvertisementResource;
use App\Models\Advertisement;
use Illuminate\Http\Request;

class AdvertisementController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     */
    public function index()
    {
        return AdvertisementResource::collection(Advertisement::all());
    }

    /**
     * Store a newly created resource in storage.
     *
     */
    public function store(StoreAdvertisementRequest $request)
    {
        $data = $request->validated();
        $advertisement = Advertisement::create($data);
        return new AdvertisementResource($advertisement);
    }

    /**
     * Display the specified resource.
     *
     */
    public function show(Advertisement $advertisement)
    {
        return new AdvertisementResource($advertisement);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     */
    public function update(UpdateAdvertisementRequest $request, Advertisement $advertisement)
    {
        $data = $request->validated();
        $advertisement->update($data);
        return new AdvertisementResource($advertisement);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @return \Illuminate\Http\Response
     */
    public function destroy(Advertisement $advertisement)
    {
        $advertisement->delete();
        return response([]);
    }
}
