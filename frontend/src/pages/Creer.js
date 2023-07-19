import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import monLogo from '../assets/pics/logo.jpeg' ;
import { useRef } from 'react';

const Creer = (props) => {
    let [message , setMessage] = useState('')
    let [affiche , setAffiche] = useState(false)
    let [mail ,setMail] = useState('')
    let [pwd ,setPwd] = useState('')
    let [pwd2 ,setPwd2] = useState('')
    let caseMdp1 = useRef()
    let caseMdp2 = useRef()

    function handleChange(e) {
        switch (e.target.id) {
            case 'mail':
                setMail(e.target.value)
                break;
            case 'pwd' :
                setPwd(e.target.value)
                break;
            case 'pwd2' :
                setPwd2(e.target.value)
                break;
            default:
                break;
        }
    }
    function handleSubmit(e) {
        e.preventDefault()
        if (!mail.match("^(.+)@gmail.com") || mail.length <= 7){
            setMessage('Mail invalide')
            setAffiche(true)
        } else{
            if (pwd != pwd2) {
                setMessage('Retaper le même password')
                setAffiche(true)
            } else if (pwd.length <= 5 || pwd2.length <= 5){
                setMessage('Mot de passe invalide')
                setAffiche(true)
            }
            else{
                let Donnee = new FormData()
                Donnee.append('mail' , mail)
                Donnee.append('password' , pwd)
                axios({
                    method : 'POST' , 
                    url : 'http://127.0.0.1:8000/api/add/user' , 
                    data : Donnee , 
                    config : { headers : {'Content-Type' : 'multipart/form-data'} }
                }).then(()=>{
                    setMessage('creation avec success')
                    setMail('')
                    setPwd('')
                    setPwd2('')
                    setAffiche(true)    
                }).catch((e)=>{setMessage('mail dejá pris !')})
            }
        }
        
    }

    function handleShowMdp(el) {
        el.current.type === 'password' ? el.current.type = 'text' : el.current.type = 'password' 
    }
    return (
        <div className='login'>
            {affiche ? 
            <div className='login-message'><h4>{message}</h4> <h3 onClick={()=>{setAffiche(false)}} ><i className="fa fa-remove"></i></h3></div>
            : <></>}
            <div className="login-box">
                <div className="login-header">
                    <img src={monLogo} alt="logo" />
                </div>
                <div className="login-title">
                    <h2>CREER VÔTRE COMPTE</h2>
                </div>
                <div className="login-form">
                    <form action="" method="post" onSubmit={handleSubmit}>
                        <div className="input-box">
                            <i className="fa fa-user"></i>
                            <input required id='mail' onChange={handleChange} value={mail} autoFocus type="text" placeholder='votre e-mail' className="form-control" />
                        </div>
                        <div className="input-box">
                            <i className="fa fa-lock"></i>
                            <i onClick={()=>handleShowMdp(caseMdp1)} className="showMdp fa fa-eye" id="showMdp"></i>
                            <input ref={caseMdp1} required id='pwd' onChange={handleChange} value={pwd} type="password" placeholder='mot de passe' className="form-control" />
                        </div>
                        <div className="input-box">
                            <i className="fa fa-lock"></i>
                            <i onClick={()=>handleShowMdp(caseMdp2)} className="showMdp fa fa-eye" id="showMdp"></i>
                            <input ref={caseMdp2} required id='pwd2' onChange={handleChange} value={pwd2} type="password" placeholder='retaper mot de passe' className="form-control" />
                        </div>
                        <div className="boutton-box">
                            <button type="submit" className='mon-boutton2'>ENVOYER</button>
                        </div>
                        <div className="creer-box">
                            <NavLink to='/'>
                                j'ai dejà une compte
                            </NavLink>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        );
};

export default Creer;