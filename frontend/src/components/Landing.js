import React from 'react';
import { NavLink } from 'react-router-dom';
import  Typewriter  from 'typewriter-effect' ;

const Landing = (props) => {
    return (
        <div className='landing'>
            <div className="landing-content">
                <Typewriter onInit={(type)=>{
                    type.typeString("<h1><b>E</b>cole de <b>M</b>anagemente t d'<b>I</b>nnovation <b>T</b>echnologique</h1>").start()
                }} />
                <p>Situe a Fianarantsoa , l'EMIT est parmi les meilleurs ecoles en informatique a Madagascar .
                L'ecole sort des eleves competents et talentueux , leaders et disciplines . Les enseignants sont jeunes , experimentes , des pro en informatique , des docteurs et des professeurs . 
                EMIT , ensemble pour une innovation ! </p>
                <div className="button-container">
                    <NavLink to='/ajouter'>
                        <button className="mon-boutton btn btn-info">S'INSCRIRE</button>
                    </NavLink>
                </div>
            </div>
            <div className="link">
                <a href=""><i className="fa fa-facebook"></i></a>
                <a href=""><i className="fa fa-google"></i></a>
                <a href=""><i className="fa fa-instagram"></i></a>
            </div>
        </div>
    );
};

export default Landing;