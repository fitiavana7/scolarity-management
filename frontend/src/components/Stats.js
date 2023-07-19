import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const Stats = (props) => {
    let [nombre , setNombre] = useState(0)
    let [nbrDasi , setNbrDasi] = useState(0)
    let [nbrAes , setNbrAes] = useState(0)
    let [nbrRpm , setNbrRpm] = useState(0)
    useEffect(()=>{
        axios.get("http://127.0.0.1:8000/api/dasi")
        .then((res)=>{setNombre(res.data.length)})

        axios.get("http://127.0.0.1:8000/api/dasi")
        .then((res)=>{setNbrDasi(res.data.length)})
        axios.get("http://127.0.0.1:8000/api/aes")
        .then((res)=>{setNbrAes(res.data.length)})
        axios.get("http://127.0.0.1:8000/api/rpm")
        .then((res)=>{setNbrRpm(res.data.length)})
    } , [])
    return (
        <div className='stats'>
            <div className="box-container">
                <div className="box box1">
                    <h4>TOTAL DES ETUDIANTS</h4>
                    <h1>{nombre}</h1>
                </div>
                <div className="box box2">
                    <h4>ETUDIANTS INSCRITS EN DA2I</h4>
                    <h1>{nbrDasi}</h1>
                </div>
                <div className="box box3">
                    <h4>ETUDIANTS INSCRITS EN AES</h4>
                    <h1>{nbrAes}</h1>
                </div>
                <div className="box box4">
                    <h4>ETUDIANTS INSCRITS EN RPM</h4>
                    <h1>{nbrRpm}</h1>
                </div>
            </div>
        </div>
    );
};

export default Stats;