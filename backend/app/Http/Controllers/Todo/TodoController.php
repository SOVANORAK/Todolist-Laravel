<?php

namespace App\Http\Controllers\Todo;

use App\Http\Controllers\Controller;
use App\Models\Todo\Todo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TodoController extends Controller
{
    // -- List ALL TODOS FROM AUTH USER -- \\
    public function index()
    {
        $current_user_id = Auth::user()->id;
        $todos = Todo::where('user_id', $current_user_id)->get();
        return $todos;
    }

    // -- STORE TODOS -- \\
    public function store(Request $request)
    {
        $request->merge(["user_id" => Auth::user()->id]);
        return Todo::create($request->all());
    }

    // ----- UPDATE TODO ----- \\
    public function update(Request $request, $id)
    {
        //where id in database is same to id request
        return Todo::where('id', $id)->update($request->all());
    }


    // ----- List one todo ----- \\
    public function show($id)
    {
        return Todo::where('id', $id)->first();
    }


    // ----- Delete one todo ----- \\
    public function destroy($id)
    {
        return Todo::where('id', $id)->delete();
    }
}
