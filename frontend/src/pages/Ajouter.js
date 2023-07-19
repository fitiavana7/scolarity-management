import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import Form from '../components/Form';
import Header from '../components/Header';

const Ajouter = (props) => {
    let status = useSelector((state)=>state.loginSession).connexionStatus.status
    const navigate = useNavigate()

    useEffect(()=>{
        if (!status) {
            navigate('../' , {replace : true})
        }
    } , [])

    return (
        <>
            <Header/>
            <Form/>
            <Footer/>
        </>
    );
};

export default Ajouter;