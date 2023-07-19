import React from 'react';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import Ajouter from './pages/Ajouter';
import Creer from './pages/Creer';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Login from './pages/Login';
import Notfound from './pages/Notfound';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/signup' element={<Creer />} />
                <Route path='/home' element={<Home />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/ajouter' element={<Ajouter />} />
                <Route path='*' element={<Notfound/>} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;