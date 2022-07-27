import React from 'react';

import "../assets/css/common.css";
import "../assets/css/home.scss";

import logo from "../assets/img/premium-liga-logo.jpg";

const Home = () => {
    return (
        <>
            <div className="main-wrapper">
                <section className="hello fullscreen">
                    <div className="hello__image">
                        <img src={logo} alt="Premium Liga Logo"/>
                    </div>
                </section>


            </div>
        </>
    );
};

export default Home;