<?php


namespace App\Http\Controllers\API;


use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    public $successStatus = 200;

    /**
     * login api
     *
     * @return \Illuminate\Http\Response
     */
    public function login(){
        if(Auth::attempt(['email' => request('email'), 'password' => request('password')])){
            $user = Auth::user();
            $token =  $user->createToken('GerenciadorContas')->accessToken;
            return response(
                [
                    'message' => "Login realizado com sucesso",
                    'token' => $token,
                    'user' => $user
                ], $this->successStatus);
        }
        else{
            return response(
                [
                    'error' => "Não foi possivel fazer o login, email ou senha não confere.",
                ], 401);
        }
    }
    /**
     * Register api
     *
     * @return \Illuminate\Http\Response
     */
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required',
            'c_password' => 'required|same:password',
        ]);
        if ($validator->fails()) {
            return response(
                [
                    'error'=>$validator->errors()
                ], 401);
        }

        if(User::where('email', $request->get('email'))->get()->count()){
            return response(
                [
                    'error'=>'Já existe um usuário com o email informado.'
                ], 401);
        }


        $input = $request->all();
        $input['password'] = bcrypt($input['password']);
        $user = User::create($input);
        $token =  $user->createToken('GerenciadorContas')-> accessToken;
        $user = $user->name;
        return response(
            [
                'message' => "Login realizado com sucesso",
                'token' => $token,
                'user' => $user
            ], $this->successStatus);
    }
    /**
     * details api
     *
     * @return \Illuminate\Http\Response
     */
    public function details()
    {
        $user = Auth::user();
        return response(
            [
                'message' => "User retornado com sucesso",
                'user' => $user
            ], 200);

    }
}
