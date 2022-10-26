import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import Footer from '../pages/Shared/Footer';
import Header from '../pages/Shared/Header';
import './Main.css';

const Main = () => {
    const { mood } = useContext(AuthContext);
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;