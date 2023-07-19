import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import monLogo from '../assets/pics/logo.jpeg' ;
import { setConnexion } from '../feature/connexion.slice';

const Header = (props) => {
    const navigate = useNavigate()
    let status = useSelector((state)=>state.loginSession)
    let dispatch = useDispatch()

    function deconnecter() {
        dispatch(setConnexion({status:false}))
        navigate('../' , {replace : true})
    }
    return (
        <div className='header fixed-top'>
            <img src={monLogo} alt="" />
            <div className="navigation">
                <NavLink className={(nav)=> nav.isActive ? 'active-nav' : ''} to='/home'>
                <i className="fa fa-home"></i><h4>acceuil</h4>
                </NavLink>
                <NavLink className={(nav)=> nav.isActive ? 'active-nav' : ''} to='/dashboard'>
                <i className="fa fa-list-alt"></i><h4>liste</h4>
                </NavLink>
                <NavLink className={(nav)=> nav.isActive ? 'active-nav' : ''} to='/ajouter'>
                <i className="fa fa-send"></i><h4>s'inscrire</h4>
                </NavLink>
                <div className="deconnexion">
                    
                </div>
                <button onClick={deconnecter} className="perso-btn"><i className="fa fa-user"></i> <h6>Deconnecter</h6></button>
            </div>
        </div>
    );
};

export default Header;