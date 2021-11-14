import React from 'react';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
 import LandingPage from './component/LandingPage';
import {Route , Switch} from "react-router-dom";
import Products from './component/Products';
const App = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Switch>
            <Route path ="/products" component={Products}/>
            <Route path ="/" component={LandingPage}/>
          </Switch>
            <Footer/>
        </div>
    );
};

export default App;