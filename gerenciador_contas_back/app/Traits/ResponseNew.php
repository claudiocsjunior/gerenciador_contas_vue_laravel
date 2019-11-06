<?php


namespace App\Traits;


trait ResponseNew
{
    protected  function response($json, $status){
        return response()->json($json, $status)->withHeaders([
            'Access-Control-Allow-Origin' => '*',
            'Access-Control-Allow-Methods' => 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers' => 'Access-Control-Allow-Headers: Content-Type, Accept, Authorization, X-Requested-With, Application',
            'Access-Control-Allow-Credentials' => 'true',
        ]);
    }
}
