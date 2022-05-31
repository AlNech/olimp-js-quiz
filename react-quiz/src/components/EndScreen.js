import { useState, useContext } from "react";
import React from "react";
import { QuizContext } from "../contexts/QuizContexts";
import '../css/App.css';



const EndScreen = () => {
    const {quizState, setQuizState} = useContext(QuizContext);
    


    return (
        <div className="final-screen">
                <div className="head-line">
                    <div className="head-line__logo"><img src={process.env.PUBLIC_URL + "/img/logo.svg"} alt="logo" width="120px" height="38px"></img></div>
                    <div className="head-line__exit_final">
                        <button onClick={() => setQuizState("start")}>
                            <img src={process.env.PUBLIC_URL + "/img/exit.svg"} alt="right" ></img>
                            </button></div>
                </div>
                <div className="progress-line"><div className="progress" style={{width:100% + '' }}></div></div>
                <div className="page-final">
                    <div className="page-final__image"><img src={process.env.PUBLIC_URL + "/img/send.svg"} alt="send"></img></div>
                    <div className="page-final__title"><h2>We've found some awesome frames for you!</h2></div>
                    <div className="page-final__text"><main>Send the results to your email to receive special discounts.</main></div>
                    <div className="page-final__button"><button>Send</button></div>
                    <div className="footer-final">By clicking ‘Send’ you agree to our Terms of Use & Privacy Policy and receiving promotion emails</div>
                </div> 
                
        </div>
    )
}

export default EndScreen;