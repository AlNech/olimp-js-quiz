import { useState, useContext } from "react";
import React from "react";
import Question from "./Question";
import exit from "../img/exit.svg";
import arrow_left from "../img/arrow_left.svg";
import '../css/App.css';

import { CurrentContext} from "../contexts/CurrentContext";

const Quiz = () => {
    const [currQuestion,setCurrQuestion] = useContext(CurrentContext);

    console.log('curr', currQuestion);

    return(
        
            <div className="Quiz">
                <div className="head-line">
                        <div className="head-line__arrow-left"><button><img src={arrow_left} alt="left" width="10px" height="18px"></img></button></div>
                        <div className="head-line__question-number">{currQuestion.currentQuestionIndex + 1}/{currQuestion.data.length}</div>
                        <div className="head-line__exit"><button><img src={exit} alt="exit" width="10px" height="18px"></img></button></div>
                    </div>
                <div className="progress-line"></div>
                <div className="content">
                    <div className="content-question"><Question/></div>
                    <div className="content-answers"></div>
                </div> 
                <div className="skip"></div>
            </div>

    );
};

export default Quiz;