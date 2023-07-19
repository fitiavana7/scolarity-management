@extends('layouts.app')

@section('content')
    <div class='header fixed-top'>
        <img src="{{ asset('./style-pro/pics/logo.jpeg') }}" alt="mon logo">
        <div class="navigation">
            <a  href="{{ route('acceuil') }}" ><i class="fa fa-home"></i><h4>acceuil</h4></a>
            <a class="active-nav" href="{{ route('voir') }}"><i class="fa fa-list-alt"></i><h4>liste</h4></a>
            <a  href="{{ route('ajouter') }}"><i class="fa fa-send"></i><h4>s'inscrire</h4></a>
            <a href="" class="perso-btn"><i class="fa fa-arrow-left"></i> Deconnecter</a>
        </div>
    </div>
    <div class='stats'>
        <div class="box-container">
            <div class="box box1">
                <h4>TOTAL DES ETUDIANTS</h4>
                <h1>{{ count($donnee) }}</h1>
            </div>
            <div class="box box2">
                <h4>ETUDIANTS INSCRITS EN DA2I</h4>
                <h1>{{ $dasi }}</h1>
            </div>
            <div class="box box3">
                <h4>ETUDIANTS INSCRITS EN AES</h4>
                <h1>{{ $aes }}</h1>
            </div>
            <div class="box box4">
                <h4>ETUDIANTS INSCRITS EN RPM</h4>
                <h1>{{ $rpm }}</h1>
            </div>
        </div>
    </div>

    <div>
        <form action="" class='trier-liste'>
            <div class="recherche">
                <h4>RECHERCHE UN ETUDIANT PAR SON NOM</h4>
                <input  type="text" class='form-control' placeholder='search..' name="" id="" />
                <input class='my-checkbox' type="checkbox" name="" id="payer" />
                <label for="payer">Afficher seulement ceux qui ont payes frais complets</label>
            </div>
            <div class="trier">
                <h4>RECHERCHE UN ETUDIANT PAR SON MENTION</h4>
                <div class="trier-content">
                    <div class="trier-item">
                        <input type="radio" name="choix" id="" />
                        <label for="">TOUT</label>
                    </div>
                    <div class="trier-item">
                        <input  type="radio" name="choix" id="DA2I" />
                        <label for="DA2I">DA2I</label>
                    </div>
                    <div class="trier-item">
                        <input  type="radio" name="choix" id="RPM" />
                        <label for="RPM">RPM</label>
                    </div>
                    <div className="trier-item">
                        <input onChange={handleTrie} type="radio" name="choix" id="AES" />
                        <label htmlFor="AES">AES</label>
                    </div>
                </div>
            </div>
        </form>
        <div class='list'>
            <div class="list-show">
                <div class="list-show-title">
                    <h4 class="profile"></h4>
                    <h4 class="nom">Nom</h4>
                    <h4 class="prenom">Prenom</h4>
                    <h4 class="mention">Mention</h4>
                    <h4 class="niveau">Niveau</h4>
                    <h4 class="action">Action</h4>
                </div>
                @forelse ($donnee as $info )
                <div class="list-show-content">
                        <div class="profile">
                            <img src="{{  Storage::url($info->image->path)  }}" alt="profile picture" class="profile">
                        </div>
                        <h6 class="nom">{{ $info->nom }}</h6>
                        <h6 class="prenom">{{ $info->prenom }}</h6>
                        <h6 class="mention">{{ $info->mention }}</h6>
                        <h6 class="niveau">{{ $info->niveau }}</h6>
                        <h6 class="action">
                            <a href="{{ route('modify' , $info->id) }}" class="btnModify"><i class="fa fa-edit"></i></a>
                            <a href="{{ route('delete' , $info->id) }}" class="btnDelete"><i class="fa fa-trash"></i></a>
                        </h6>
                    </div>
                @empty
                    <div>Pas de payment pour l'instant</div>
                @endforelse
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