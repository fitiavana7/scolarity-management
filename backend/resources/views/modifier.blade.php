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
            @if ($errors->any())
            <div class='error-box' id="errBox">
                <h3 class="error-title">ERROR <i id="errBtn" class="fa fa-remove"></i></h3>
                <div class="error-list">
                    @foreach ($errors->all() as $err )
                        <div class="item"><h6>{{ $err }}</h6></div>
                    @endforeach
                </div>
            </div>
                
            @endif
        <div class='profile-picture'>
            <div class="picture">
                <img src="{{ $donnee->image ? Storage::url($donnee->image->path) : 'pas de photo'}}" alt='un photo de profil' />
            </div>
        </div>
        <form action="{{ route('edit' , $donnee->id) }}" method="post">
            @csrf
            
            <div class="form-title">
                <h3>MODIFIER VOS INFORMATIONS</h3>
                
            </div>
            <div class="form-info">
                <div class="form-item box1">
                    <input class='form-control mon-input' value="{{ $donnee->nom }}" type="text" name="nom" id="nom" placeholder='nom' />
                </div>
                <div class="form-item box2">
                    <input class='form-control mon-input' value="{{ $donnee->prenom }}" type="text" name="prenom" id="prenom" placeholder='prenom' />
                </div>
                <div class="form-item box3">
                    <input class='form-control mon-input' value="{{ $donnee->phone }}" type="text" name="phone" id="phone" placeholder='telephone' />
                </div>
                <div class="form-item box4">
                    <input class='form-control mon-input' value="{{ $donnee->mail }}" type="text" name="mail" id="mail" placeholder='e-mail' />
                </div>
                <div class="form-item box7">
                    <select class='form-control' value="{{ $donnee->mention }}" name="mention" id="">
                        <option value="DASI">DASI</option>
                        <option value="AES">AES</option>
                        <option value="RPM">RPM</option>
                    </select>
                </div>
                <div class="form-item box6">
                    <input class='form-control mon-input' value="{{ $donnee->cin }}" type="number" name="cin" id="cin" placeholder='numero CIN' />
                </div>
                <div class="form-item box7">
                    <select class='form-control' value="{{ $donnee->niveau }}" name="niveau" id="">
                        <option value="L1">L1</option>
                        <option value="L2">L2</option>
                        <option value="L3">L3</option>
                        <option value="M1">M1</option>
                        <option value="M2">M2</option>
                    </select>
                </div>
            </div>
            <div class="form-title">
                <h3>VALIDER LES DESCRIPTIONS DU PAYMENT</h3>
            </div>
            <div class="form-info">
                <div class="form-item box8">
                    <select class='form-control' name="" id="">
                        <option value="">BFV MADAGASCAR</option>
                        <option value="">BOA MADAGASCAR</option>
                    </select>
                </div>
                <div class="form-item box9">
                    <input class='form-control mon-input' value="{{ $donnee->bordereau }}" type="number" name="bordereau" id="bordereau" placeholder='numero bordereau' />
                </div>
                <div class="form-item box10"  >
                    <input class='form-control mon-input' value="{{ $donnee->montant }}" type="number" name="montant" id="montant" placeholder='montant a payer' />
                </div>
            </div>
            <div class="form-envoie">
                <button class='btn btn-primary mon-boutton' type="submit">MODIFIER</button>
            </div>
        </form>
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
    <script>
        let errBtn = document.getElementById('errBtn') , errBox = document.getElementById('errBox') ;
        errBtn.onclick = function () {
           errBox.style.display = 'none' ; 
        } ;
    </script>
@endsection