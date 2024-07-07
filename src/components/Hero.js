import React from "react"
// import bckgrnd from '../images/Background.png'

function Hero(){
    return(
        <section  className="hero">
            <div className="hero--images">
                <div className="hero--images1">
                    <img src={require("../images/Background.png")} className="hero--photo1" alt=""/> 
                </div>
                <div className="hero--images2">
                    <img src={require("../images/neelkurunji.png")} className="hero--photo2" alt=""/>
                    <img src={require("../images/me_tea_garden.png")} className="hero--photo3" alt=""/> 
                </div>
                <div className="hero--images3">
                    <img src={require("../images/mysuru_palace.png")} className="hero--photo4" alt=""/>
                    <img src={require("../images/me_with_Flower.png")} className="hero--photo5" alt=""/> 
                </div>
                <div className="hero--images4">
                    <img src={require("../images/vrkla_beach.png")} className="hero--photo6" alt=""/> 
                    <img src={require("../images/tea_grdn.png")} className="hero--photo7" alt=""/>
                </div>
                <div className="hero--images5">
                    <img src={require("../images/vrkla.png")} className="hero--photo8" alt=""/>
                </div>
            </div>
            
            <h2 className="hero--header">Moments</h2>
            <h4 className="hero--text">Don't listen to what they say. Go See....</h4>
        </section>
    )
}

export default Hero