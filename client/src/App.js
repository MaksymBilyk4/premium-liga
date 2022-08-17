import React from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ToTop from "./components/ToTop";

const App = () => {
    return (
        <BrowserRouter>
            <ToTop/>
            <Navbar/>
            <AppRouter/>
            <Footer/>
        </BrowserRouter>
    );
};

export default App;