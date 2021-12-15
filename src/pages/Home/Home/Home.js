import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import CheckAbility from '../CheckAbility/CheckAbility';
import Features from '../Features/Features';
import Key from '../Key/Key';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
      
            <Banner></Banner>
            <Features></Features>
            <About></About>
            <Key></Key>
            <CheckAbility></CheckAbility>
            <Services></Services>
        </div>
    );
};

export default Home;