import React from "react";

import about from "../assets/img/about.jpg";

const Intro = () => {
    return(
        <section id="intro">
                <div class="img">
                    <img src={about} alt="이미지"/>
                </div>
        </section>
    )
};

export default Intro;
