import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Landing from '../components/Landing';

const Home = (props) => {
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
            <Landing />
        </>
    );
};

export default Home;