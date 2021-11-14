import React, { Component } from 'react'

import Cards from './Cards';
import Search from './Search';
 import Logo from './Logo';
import Banner from './Banner';
export default class LandingPage extends Component {
    render() {
        return (
            <div>
            <Banner></Banner>
            <Cards></Cards> 
            <Search/>
            <Logo/>
            </div>
        )
    }
}
