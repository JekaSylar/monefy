<?php

namespace App\Http\Requests\User;

use Illuminate\Foundation\Http\FormRequest;

class UserStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'login' => 'required|unique:users|max:255',
            'name' => 'required|max:255',
            'email' => 'required|unique:users|email',
            'password' => 'required|between:6, 255',
            'is_admin' => 'boolean|required'
        ];
    }
}