import React from "react";
import Header from "../components/Header";
import Cal from "../components/Cal";
import Intro from "../components/Intro";
import Footer from "../components/Footer";
import Main from "../components/Main";


const HomeView = () => {
    return (
    <>
        <Header />
        <Main>
            <Intro />
            <Cal/>
        </Main>
        <Footer />
    </>
    );
};

export default HomeView;