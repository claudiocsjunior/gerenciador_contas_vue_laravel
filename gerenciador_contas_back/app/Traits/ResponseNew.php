<?php


namespace App\Traits;


trait ResponseNew
{
    protected  function response($json, $status){
        return response()->json($json, $status)->header('Access-Control-Allow-Origin', '*');
    }
}
