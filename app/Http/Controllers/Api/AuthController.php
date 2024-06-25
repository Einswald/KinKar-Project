<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{

    public function register(RegisterRequest $request)
    {
        $data = $request->validated();

        $data['password'] = bcrypt($data['password']); // Overriding data password and inject into password keys.

        /** @var \App\Models\User $user */
        $user = User::create($data);

        $token = $user->createToken('main')->plainTextToken;

        return response([
            'token'=> $token,
            'user'=> $user,
        ]);
    }

    public function login(LoginRequest $request)
    {
        $credentials = $request->validated();
        if (Auth::attempt($credentials)) {
            return response([
                'message' => 'Email address or password is incorrect'
            ], 422);
        }
        /** @var User $user */
        $user = Auth::user();
        $token = $user->createToken('main')->plainTextToken;
        return response([
            'token'=> $token,
            'user'=> $user,
        ]);
    }

    public function logout(Request $request)
    {
        /** @var User $user */
        $request->user()->currentAccessToken()->delete();
        return response([
            'message'=> 'Successfuly logout',
        ], 204);
    }
}
