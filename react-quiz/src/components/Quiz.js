import { useState, useContext } from "react";
import React from "react";
import Question from "./Question";
import Answer from "./Answer";
import exit from "../img/exit.svg";
import arrow_left from "../img/arrow_left.svg";
import '../css/App.css';

import { CurrentContext} from "../contexts/CurrentContext";

function displayAnswer(props, index){
    
    return props.data[index].answer.option;
};

function displaybottomText(props, index){
   let textBottom = props.data[index].bottomText;  
   if (textBottom){
       return <div className="skip">{textBottom}</div>
   }
};

const Quiz = () => {
    const [currQuestion,setCurrQuestion] = useContext(CurrentContext);

    return(
        
            <div className="Quiz">
                <div className="head-line-quiz">
                        <div className="head-line__arrow-left"><button><img src={arrow_left} alt="left" width="8px" height="14px"></img></button></div>
                        <div className="head-line__question-number">{currQuestion.currentQuestionIndex + 1}/{currQuestion.data.length}</div>
                        <div className="head-line__exit"><button><img src={exit} alt="exit" width="13px" height="13px"></img></button></div>
                    </div>
                <div className="progress-line" ></div>
                <div className="content">
                    <div className="content-question"><Question/></div>
                    <div className="content-answers">{displayAnswer(currQuestion,currQuestion.currentQuestionIndex)}</div>
                </div> 
                {displaybottomText(currQuestion,currQuestion.currentQuestionIndex)}
            </div>

    );
};

export default Quiz;