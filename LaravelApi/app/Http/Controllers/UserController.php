<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;


class UserController extends Controller
{
    private $status_code = 200;


    public function register(Request $request){
       $validator = validator::make($request->all(),[
            'name'=>'required',
            'email'=>'required|unique:users|email',
            'phone'=>'required',
            'regdno'=>'required',
            'password'=>'required',
            
        ]);

        if($validator->fails()) {
            return response()->json(["status" => "failed", "message" => "validation_error", "errors" => $validator->errors()]);
        }

        $user = User::create([
            'name'=>$request->name,
            'email'=>$request->email,
            'phone'=>$request->phone,
            'regdno'=>$request->regdno,
            'password'=>Hash::make($request->password),
            
        ]);
        if(!is_null($user)) {
            $token = $user->createToken($request->email)->plainTextToken;
            return response()->json(["status" => $this->status_code, "success" => true, "message" => "Registration completed successfully", "data" => $user]);
        }

        else {
            return response()->json(["status" => "failed", "success" => false, "message" => "failed to register"]);
        }
    }

    public function login(Request $request){
        $validator = validator::make($request->all(),[
            'email'=>'required|email',
            'password'=>'required',
        ]);
                if($validator->fails()) {
            return response()->json(["status" => "failed", "validation_error" => $validator->errors()]);
        }
        $user = User::where('email', $request->email)->first();
        if($user && Hash::check($request->password, $user->password)){
            $token = $user->createToken($request->email)->plainTextToken;
            return response()->json(["status" => $this->status_code, "success" => true, "message" => "You have logged in successfully", "data" => $user,"token"=>$token]);
        } else {
            return response()->json(["status" => "failed", "success" => false, "message" => "Unable to login. Incorrect Details."]);
        }
         
    }

    public function logout(){
        auth()->user()->tokens()->delete();
        return response([
            'message' => 'Logout Success',
            'status'=>'success'
        ], 200);
    }
    
    public function logged_user(){
        $loggeduser = auth()->user();
        return response([
            'user'=>$loggeduser,
            'message' => 'Logged User Data',
            'status'=>'success'
        ], 200);
    }

    public function userDetail($email) {
        $user = array();
        if($email!="") {
            $user = User::where("email", $email)->first();
            return $user;
        }
    }
}

