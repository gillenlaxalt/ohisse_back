<?php

namespace App\Http\Controllers;

use App\Models\Spot;

class SpotController extends CoreController {

    public function list()
    {
        $allSpots = Spot::all();

        return response()->json($allSpots);
    }

    public function item($id)
    {
      $spotById = Spot::findOrFail($id);
      return response()->json($spotById);
    }
}
