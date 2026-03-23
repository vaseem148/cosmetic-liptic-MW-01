import React, { useEffect } from "react";
import LipstickHero from "../../components/liptickcontents/LipstickHero"
import Content2 from "../../components/liptickcontents/Content2"
import Content3 from "../../components/liptickcontents/Content3"
import Content4 from "../../components/liptickcontents/Content4"
import Content5 from "../../components/liptickcontents/Content5"
import Content7 from "../../components/liptickcontents/Content7"
import Content8 from "../../components/liptickcontents/Content8"
import Content9 from "../../components/liptickcontents/Content9"
import Content10 from "../../components/liptickcontents/Content10"
import { useLocation } from "react-router-dom";



const SinglePage = () =>{
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const id = hash.replace("#", "");
            const element = document.getElementById(id);
            if (element) {
                // Small delay to ensure items are rendered
                setTimeout(() => {
                    element.scrollIntoView({ behavior: "smooth" });
                }, 200);
            }
        }
    }, [hash]);

    return (

        <main>

        <LipstickHero/>
        <Content2/>
        <Content3/>
        <Content4/>
        <Content5/>
        <Content7/>
        <Content8/>
        <Content9/>
        <Content10/>


        </main>
    );
};

export default SinglePage;