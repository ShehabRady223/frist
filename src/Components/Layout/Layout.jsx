import React from 'react'
import Footer from '../Footer/Footer'
import NavBar from '../NaveBar/NavBar'
import { Outlet } from 'react-router-dom';

export default function Layout() {
    return (
        <>
            <NavBar />
            <Outlet />
            <Footer />
        </>
    );
}