import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer/Footer';

const MainLayouts = () => {
    return (
        <div className='w-10/12 mx-auto'>
             <Navbar></Navbar>
            <div className='bg-amber-400 min-h-[calc(100vh-250px)]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayouts;