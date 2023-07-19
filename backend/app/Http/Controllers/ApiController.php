<?php

namespace App\Http\Controllers;

use App\Models\Liste;
use App\Models\Utilisateur;
use Illuminate\Http\Request;

class ApiController extends Controller
{
    public function getAllUsers(){
        $users = Liste::all();
        return response()->json($users);    
    }
    public function getDASI(){
        $dasi = Liste::where('mention' , 'DASI')->get() ;
        return response()->json($dasi);    
    }
    public function getAES(){
        $dasi = Liste::where('mention' , 'AES')->get() ;
        return response()->json($dasi);    
    }
    public function getRPM(){
        $dasi = Liste::where('mention' , 'RPM')->get() ;
        return response()->json($dasi);    
    }
    public function store(Request $request){
        Liste::create([
            'nom' => $request->nom , 
            'prenom' => $request->prenom ,
            'phone' => $request->phone , 
            'mail' => $request->mail , 
            'mention' => $request->mention ,
            'niveau' => $request->niveau ,
            'cin' => $request->cin , 
            'bordereau' => $request->bordereau  , 
            'montant' => $request->montant
        ]);
    }
    public function connections(){
        $users = Utilisateur::all();
        return response()->json($users);    
    }
    public function setNewUser(Request $request){
        Utilisateur::create([
            'mail' => $request->mail,
            'password' => $request->password
        ]);
    }
}
