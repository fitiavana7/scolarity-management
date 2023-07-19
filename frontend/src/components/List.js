import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import monLogo from '../assets/pics/logo.jpeg' ;

const List = (props) => {
    let [data , setData] = useState([])
    let [afficher , setAfficher] = useState({})
    let [show , setShow] = useState(false)

    let [rechercheNom , setRecherche] = useState('')
    let [trie, setTrie] = useState('')
    let [payer , setPayer] = useState(true)
    let [montant , setMontant] = useState('')

    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/users')
        .then((res)=>{setData(res.data)})
    } , [])

    function handleShow(data) {
        setAfficher(data)
        setShow(!show)
    }
    function handleFermer() {
        setShow(!show)
    }

    function handleRecherche(e) {
        setRecherche(e.target.value.toLocaleLowerCase())
    }

    function handleTrie(e) {
        setTrie(e.target.id)
    }

    function handlePayer(e) {
        setPayer(!payer)
        payer ? setMontant('505000') : setMontant('')
    }
    return (
        <>
        <form action="" className='trier-liste' onSubmit={(e)=>{e.preventDefault()}}>
            <div className="recherche">
                <h4>RECHERCHE UN ETUDIANT PAR SON NOM</h4>
                <input onChange={handleRecherche} value={rechercheNom} type="text" className='form-control' placeholder='search..' name="" id="" />
                <input onChange={handlePayer} className='my-checkbox' type="checkbox" name="" id="payer" />
                <label htmlFor="payer">Afficher seulement ceux qui ont payes frais complets</label>
            </div>
            <div className="trier">
                <h4>RECHERCHE UN ETUDIANT PAR SON MENTION</h4>
                <div className="trier-content">
                    <div className="trier-item">
                        <input onChange={handleTrie} type="radio" name="choix" id="" />
                        <label htmlFor="">TOUT</label>
                    </div>
                    <div className="trier-item">
                        <input onChange={handleTrie} type="radio" name="choix" id="DA2I" />
                        <label htmlFor="DA2I">DA2I</label>
                    </div>
                    <div className="trier-item">
                        <input onChange={handleTrie} type="radio" name="choix" id="RPM" />
                        <label htmlFor="RPM">RPM</label>
                    </div>
                    <div className="trier-item">
                        <input onChange={handleTrie} type="radio" name="choix" id="AES" />
                        <label htmlFor="AES">AES</label>
                    </div>
                </div>
            </div>
        </form>
        <div className='list'>
            <div className="list-show">
                <div className="list-show-title">
                    <h4 className="nom">Nom</h4>
                    <h4 className="prenom">Prenom</h4>
                    <h4 className="mention">Mention</h4>
                    <h4 className="niveau">Niveau</h4>
                </div>
                {
                    data.filter((res)=> {return res.nom.toLocaleLowerCase().includes(rechercheNom)})
                    .filter((res)=> {return res.mention.includes(trie)})
                    .filter((res)=> { return res.montant.includes(montant)})
                    .map((etudiant , index)=>{
                        return(
                            <div onClick={()=>{handleShow(etudiant)}} className="list-show-content" key={index}>
                                <h6 className="nom">{etudiant.nom.toLocaleUpperCase()}</h6>
                                <h6 className="prenom">{etudiant.prenom}</h6>
                                <h6 className="mention">{etudiant.mention}</h6>
                                <h6 className="niveau">{etudiant.niveau}</h6>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        {show ?
        <div className='info'>
            <div className="info-box">
                <div className="info-pic">
                <h2>INFORMATIONS DE {afficher.nom.toLocaleUpperCase()}</h2>
                    <img src={monLogo} alt="logo de lemit" />
                </div>
                <form action="" method="post">
                    <div className="box-input">
                        <label htmlFor="nom">Nom :</label>
                        <input readOnly type="text" id='nom' className="form-control" value={afficher.nom.toLocaleUpperCase()} />
                    </div>
                    <div className="box-input">
                        <label htmlFor="prenom">Prenom :</label>
                        <input readOnly type="text" id='prenom' className="form-control" value={afficher.prenom} />
                    </div>
                    <div className="box-input">
                        <label htmlFor="phone">Phone :</label>
                        <input readOnly type="text" id='phone' className="form-control" value={afficher.phone} />
                    </div>
                    <div className="box-input">
                    <label htmlFor="mail">e-mail :</label>
                        <input readOnly type="text" id='mail' className="form-control" value={afficher.mail} />
                    </div>
                    <div className="box-input">
                    <label htmlFor="cin">Numero CIN :</label>
                        <input readOnly type="text" id='cin' className="form-control" value={afficher.cin} />
                    </div>
                    <div className="box-input">
                    <label htmlFor="montant">Montant paye :</label>
                        <input readOnly type="number" id='montant' className="form-control" value={afficher.montant} />
                    </div>
                    <div className="box-input">
                    <label htmlFor="niveau">Niveau :</label>
                        <input readOnly type="text" id='niveau' className="form-control" value={afficher.niveau} />
                    </div>
                    {parseInt(afficher.montant) >= 505000 ? 
                        <div className='statut-yes'>
                            Frais de scolarite complet
                        </div> 
                    :   <div className='statut-no'>
                        Frais de scolarite 1er tranche paye
                    </div> }
                </form>
                <div className="button-container"><button onClick={handleFermer} className="btn btn-primary mon-boutton2">FERMER</button></div>
            </div>
        </div> 
        : ''}
        </>
    );
};

export default List;