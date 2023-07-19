import React from 'react';
import { useSelector } from 'react-redux';
import {  useLocation, useNavigate } from 'react-router-dom';

const Notfound = (props) => {
    let status = useSelector((state)=>state.loginSession).connexionStatus.status
    let pageNow = useLocation()
    const navigate = useNavigate()
    
    function redirect() {
        if (status){
            navigate('./home' , {replace : true})
        }else {
            navigate('../' , {replace : true})
        }
    }
    return (
        <div className='not-found'>
            <div className="not-found-message">
                <div className="url">{pageNow.pathname}</div>
                <h2>PAGE NOT FOUND</h2>
                <div className="not-found-btn">
                    <button onClick={redirect} className='mon-boutton2'>
                        RETOUR                     
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Notfound;