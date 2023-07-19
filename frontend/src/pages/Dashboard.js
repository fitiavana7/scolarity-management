import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import List from '../components/List';
import Stats from '../components/Stats';

const Dashboard = (props) => {
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
            <Stats/>
            <List/>
            <Footer/>
        </>
    );
};

export default Dashboard;