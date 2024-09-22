import React, { useState } from "react";
import Header from "../components/Header";
import Cal from "../components/Cal";
import Intro from "../components/Intro";
import Footer from "../components/Footer";
import Main from "../components/Main";

const HomeView = () => {
    const [showCal, setShowCal] = useState(false); // Cal 컴포넌트 표시 여부 상태 추가

    const toggleCal = () => {
        setShowCal((prev) => !prev); // Cal 컴포넌트의 표시 상태 토글
    };

    return (
        <>
            <Header toggleCal={toggleCal} /> {/* Header에 toggleCal 함수 전달 */}
            <Main>
                <Intro />
                {showCal && <Cal />} {/* showCal이 true일 때만 Cal 컴포넌트 표시 */}
            </Main>
            <Footer />
        </>
    );
};

export default HomeView;
