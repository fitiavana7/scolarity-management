@extends('layouts.app')

@section('content')
    <div class='header fixed-top'>
        <img src="{{ asset('./style-pro/pics/logo.jpeg') }}" alt="mon logo">
        <div class="navigation">
            <a href="{{ route('acceuil') }}" ><i class="fa fa-home"></i><h4>acceuil</h4></a>
            <a href="{{ route('voir') }}"><i class="fa fa-list-alt"></i><h4>liste</h4></a>
            <a class="active-nav" href="{{ route('ajouter') }}"><i class="fa fa-send"></i><h4>s'inscrire</h4></a>
            <a href="" class="perso-btn"><i class="fa fa-arrow-left"></i> Deconnecter</a>
        </div>
    </div>
    <div class='ajouter'>
            <div class="success-box">
                <h3 class="success-title">SUCCESS</h3>
                <div class="success-mess">
                    <div class="item">
                        <h5> {{ $message }}</h5>
                    </div>
                </div>
            </div>
        
    </div>
    <div class='footer'>
        <div class="footer-link">
            <a href="http://www.facebook.com" target="_blank" ><i class="fa fa-facebook"></i></a>
            <a href="http://www.instagram.com" target="_blank" ><i class="fa fa-instagram"></i></a>
            <a href="http://www.gmail.com" target="_blank" ><i class="fa fa-envelope"></i></a>
            <a href="http://www.linkedin.com" target="_blank" ><i class="fa fa-linkedin"></i></a>
        </div>
        <div class="footer-droit">
            <p>Fitiavana Andriaherilanto - copyright fevrier 2023 &copy;</p>
        </div>
    </div>
@endsection