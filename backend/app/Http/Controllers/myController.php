<?php

namespace App\Http\Controllers;

use App\Models\Image;
use App\Models\Liste;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class myController extends Controller
{
    public function acceuil(){
        return view('home') ;
    }
    public function voir(){

        $data = Liste::all();
        $dasi = Liste::where('mention' , 'DASI')->get() ;
        $aes = Liste::where('mention' , 'AES')->get() ;
        $rpm = Liste::where('mention' , 'RPM')->get() ;

        return view('voir' , [
            'donnee' => $data , 
            'dasi' => count($dasi) ,
            'aes' => count($aes) ,
            'rpm' => count($rpm) 
        ]) ;
    }
    public function store(Request $request){
        $request->validate([
            'nom' => ['required' , 'min:3' , 'max:80'] , 
            'prenom' => [] ,
            'phone' => ['required' , 'min:10' , 'max:11' , 'unique:listes'] , 
            'mail' => ['required' , 'min:7' , 'unique:listes'] , 
            'cin' => ['required' , 'min:12' , 'integer' , 'unique:listes'] , 
            'profilepic' => ['required'] , 
            'bordereau' => ['required' , 'min:6' , 'unique:listes']  , 
            'montant' => ['integer' , 'required' , 'min:5']
        ]);

        $liste = Liste::create([
            'nom' => $request->nom , 
            'prenom' => $request->prenom ,
            'phone' => $request->phone , 
            'mail' => $request->mail , 
            'mention' => $request->mention ,
            'cin' => $request->cin , 
            'bordereau' => $request->bordereau  , 
            'montant' => $request->montant
        ]);
        $newname = Storage::disk('public')->put('avatars' , $request->profilepic);

        $image = new Image();
        $image->path = $newname ;
        $liste->image()->save($image);
        return view('message' , [
            'message' => 'AJOUT REUSSI'
        ]) ;
    }
    public function supprimer($id){
        $data = Liste::findOrFail($id);
        $data->delete();
        return view('message' , [
            'message' => 'SUPPRESSION REUSSI'
        ]) ;
    }
    public function ajouter(){
        return view('ajouter') ;
    }
    public function modifier($id){
        $data = Liste::findOrFail($id) ;
        return view('modifier' , [
            'donnee' => $data
        ]) ;   
    }
    public function edit(Request $request , $id){
        $data = Liste::findOrFail($id) ;
        $data->update([
            'nom' => $request->nom , 
            'prenom' => $request->prenom ,
            'phone' => $request->phone , 
            'mail' => $request->mail , 
            'mention' => $request->mention ,
            'cin' => $request->cin , 
            'bordereau' => $request->bordereau  , 
            'montant' => $request->montant
        ]) ;
        return view('message' , [
            'message' => 'MODIFICATION REUSSI'
        ]) ;
    }
}
