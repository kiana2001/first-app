import React from 'react';
import Banner from './Component/Banner';
import Navbar from './Component/Navbar';
import Cards from './Component/Cards';
import Search
 from './Component/Search';
 import Logo from './Component/Logo';
import Footer from './Component/Footer';
const App = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Cards></Cards> 
            <Search/>
            <Logo/>
            <Footer/>
        </div>
    );
};

export default App;