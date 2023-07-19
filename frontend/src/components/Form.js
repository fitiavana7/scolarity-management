import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';

const Form = (props) => {
    let [showMess , setShowMess] = useState(false)
    let [nom , setNom] = useState('')
    let [prenom , setPrenom] = useState('')
    let [phone , setPhone] = useState('')
    let [mail , setMail] = useState('')
    let [mention , setMention] = useState('')
    let [cin , setCin] = useState('')
    let [bordereau , setBordereau] = useState('')
    let [montant , setMontant] = useState('')
    let [niveau , setNiveau] = useState('L1')
    let [message , setMessage] = useState('')

    function handleChange(e) {
        switch (e.target.id) {
            case 'nom':
                setNom(e.target.value)
                break;        
            case 'prenom':
                setPrenom(e.target.value)
                break;
            case 'cin':
                if (cin.length <= 12) {
                    setCin(e.target.value.toString())
                }
                break;
            case 'bordereau':
                setBordereau(e.target.value.toString())
                break;
            case 'montant':
                setMontant(e.target.value.toString())
                break;
            case 'phone':
                setPhone(e.target.value.toString())
                break;
            case 'mail':
                setMail(e.target.value)
                break;
            default:
                break;
        }
    }
    function handleChangeRadio(e) {
        setMention(e.target.id)
    }
    function handleSubmit(e) {
        e.preventDefault()
        if (nom.length < 3) {setMessage('nom invalide')}
        else {if (mention.length <= 1) {setMessage('mention invalide')
            } else {if (cin.length != 12) {setMessage('CIN trop court ou trop long')
                } else { if (bordereau.length <= 6) {setMessage('numero bordereau invalide')
                    } else{ if (montant.length <= 5) { setMessage('montant insuffisant')} else {
                        if (phone.length < 10){ setMessage('phone invalide')} else{
                            if (!mail.match("^(.+)@gmail.com")) { setMessage('mail invalide')} else{
                                    setMessage('ENVOIE AVEC SUCCESS')
                                    let formData = new FormData()
                                    formData.append('nom' , nom )
                                    formData.append('prenom' , prenom)
                                    formData.append('phone' , phone)
                                    formData.append('mail' , mail)
                                    formData.append('mention' , mention )
                                    formData.append('niveau' , niveau )
                                    formData.append('bordereau' , bordereau )
                                    formData.append('montant' , montant )
                                    formData.append('cin' , cin )
                                    axios({
                                        method : 'POST' , 
                                        url : 'http://127.0.0.1:8000/api/add/liste' , 
                                        data : formData , 
                                        config : { headers : {'Content-Type' : 'multipart/form-data'} }
                                    })
                                    .then(()=>{
                                        setNom('') 
                                        setPrenom('')
                                        setBordereau('')
                                        setCin('')
                                        setMontant('')
                                        setPhone('')
                                        setMail('')
                                        }    
                                    )
                                    .catch((error)=>{console.log(error)})
                                }
                            }
                        } 
                    }
                }
            }
        }
        setShowMess(true)
    }
    return (
        <div className='ajouter'>
            { showMess ?
            <div className="ajouter-mess">
                <h4>{message}<i className="fa fa-remove" onClick={()=>{setShowMess(!showMess)}}></i></h4>
            </div> : '' }
            <form action="" onSubmit={handleSubmit}>
                <div className="form-title">
                    <h3>ENTREZ VOS INFORMATIONS</h3>
                </div>
                <div className="form-info">
                    <div className="form-item box1">
                        <input onChange={handleChange} required value={nom} className='form-control mon-input' type="text" name="" id="nom" placeholder='nom' />
                    </div>
                    <div className="form-item box2">
                        <input onChange={handleChange} value={prenom} className='form-control mon-input' type="text" name="" id="prenom" placeholder='prenom' />
                    </div>
                    <div className="form-item box3">
                        <input onChange={handleChange} value={phone} className='form-control mon-input' type="number" name="" id="phone" placeholder='telephone' />
                    </div>
                    <div className="form-item box4">
                        <input onChange={handleChange} value={mail} className='form-control mon-input' type="text" name="" id="mail" placeholder='e-mail' />
                    </div>
                    <div className="form-radio box5">
                        <div className="radio-item">
                            <input onClick={handleChangeRadio} type="radio" name="mention" id="DASI" />
                            <label htmlFor="DASI">DA2I</label>
                        </div>
                        <div className="radio-item">
                            <input onClick={handleChangeRadio} type="radio" name="mention" id="RPM" />
                            <label htmlFor="RPM">RPM</label>
                        </div>
                        <div className="radio-item">
                            <input onClick={handleChangeRadio} type="radio" name="mention" id="AES" />
                            <label htmlFor="AES">AES</label>
                        </div>
                    </div>
                    <div className="form-item box6">
                        <input required value={cin} onChange={handleChange} className='form-control mon-input' type="number" name="" id="cin" placeholder='numero CIN' />
                    </div>
                    <div className="form-item box7">
                        <select onChange={(e)=>{setNiveau(e.target.value)}} className='form-control' name="" id="">
                            <option value="L1">L1</option>
                            <option value="L2">L2</option>
                            <option value="L3">L3</option>
                            <option value="M1">M1</option>
                            <option value="M2">M2</option>
                        </select>
                    </div>
                </div>
                <div className="form-title">
                    <h3>VALIDER LES DESCRIPTIONS DU PAYMENT</h3>
                </div>
                <div className="form-info">
                    <div className="form-item box8">
                        <select className='form-control' name="" id="">
                            <option value="">BFV MADAGASCAR</option>
                            <option value="">BOA MADAGASCAR</option>
                        </select>
                    </div>
                    <div className="form-item box9">
                        <input onChange={handleChange} required value={bordereau} className='form-control mon-input' type="number" name="" id="bordereau" placeholder='numero bordereau' />
                    </div>
                    <div className="form-item box10"  >
                        <input onChange={handleChange} required value={montant} className='form-control mon-input' type="number" name="" id="montant" placeholder='montant a payer' />
                    </div>
                </div>
                <div className="form-envoie">
                    <button className='btn btn-primary mon-boutton' type="submit">VALIDER L'INSCRIPTION</button>
                </div>
            </form>
        </div>
    );
};

export default Form;