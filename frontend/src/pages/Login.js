import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import monLogo from '../assets/pics/logo.jpeg' ;
import { setConnexion } from '../feature/connexion.slice';
import { useRef } from 'react';

const Login = (props) => {
    let [message , setMessage] = useState('')
    let [affiche , setAffiche] = useState(false)
    let [mail ,setMail] = useState('')
    let [pwd ,setPwd] = useState('')
    let [autorizedUser , setautorizedUser] = useState([])
    const navigate = useNavigate()
    let status = useSelector((state)=>state.loginSession)
    let dispatch = useDispatch()
    let caseMdp = useRef()

    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/connections')
        .then((res)=>{
            setautorizedUser(res.data)
        })
    },[])

    function handleChange(e) {
        e.target.id == 'mail' ? setMail(e.target.value) : setPwd(e.target.value) ;
    }
    function handleSubmit(e) {
        e.preventDefault()
        if (!mail.match("^(.+)@gmail.com") || mail.length <= 7){
            setMessage('Mail invalide') 
            setAffiche(true)
        } else {
            let result = autorizedUser.filter((res)=>res.mail == mail && res.password == pwd)
            if (result.length >= 1){
                navigate('./home' , { replace:true})
                dispatch(setConnexion({status:true}))
            }  
            setMessage('Echec de connexion')
            setMail('')
            setPwd('')
            setAffiche(true)        
        }
    }

    function handleShowMdp() {
        caseMdp.current.type === 'password' ? caseMdp.current.type = 'text' : caseMdp.current.type = 'password' 
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
                    <h2>CONNECTEZ ICI</h2>
                </div>
                <div className="login-form">
                    <form action="" method="post" onSubmit={handleSubmit}>
                        <div className="input-box">
                            <i className="fa fa-user"></i>
                            <input required onChange={handleChange} value={mail} id='mail' autoFocus type="text" placeholder='votre e-mail' className="form-control" />
                        </div>
                        <div className="input-box">
                            <i className="fa fa-lock"></i>
                            <i onClick={handleShowMdp} className="showMdp fa fa-eye" id="showMdp"></i>
                            <input ref={caseMdp} required onChange={handleChange} value={pwd} id='pwd' type="password" placeholder='mot de passe' className="form-control" />
                        </div>
                        <div className="boutton-box">
                            <button type="submit" className='mon-boutton2'>CONNECTER</button>
                        </div>
                        <div className="creer-box">
                            <NavLink to='/signup'>
                                creer un compte
                            </NavLink>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        );
};

export default Login;