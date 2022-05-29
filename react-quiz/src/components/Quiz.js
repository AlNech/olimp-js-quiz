import { useState, useContext } from "react";
import React from "react";
import Question from "./Question";
import Answer from "./Answer";
import '../css/App.css';

import { CurrentContext} from "../contexts/CurrentContext";
import {QuizContext} from "../contexts/QuizContexts";


function displayAnswer(props, index){
    let arrOption = props.data[index].answer.option;
    let answer = arrOption.map((x, index)  => {return <Answer props={x} index={index} key={arrOption.indexOf(x)}></Answer>});
    return answer;
};

function displaybottomText(props, index, set1, set2){
   let textBottom = props.data[index].bottomText;  
   if (textBottom){
       return <div className="skip" 
       onClick={() => {
           if (!props.showFinal ){set1({type: "NEXT_QUESTION"})}
           else{
            set2("end");
           }
        }
    }>{textBottom}</div>
   }
};


const Quiz = () => {
    const [currQuestion,setCurrQuestion] = useContext(CurrentContext);
    const {quizState, setQuizState} = useContext(QuizContext);


    
    return (
        <div className="Quiz">
                <div className="page-quiz">
                    <div className="head-line-quiz">
                            <div className="head-line__arrow-left"><button><img src={process.env.PUBLIC_URL + "/img/arrow_left.svg"} alt="left" width="8px" height="14px"></img></button></div>
                            <div className="head-line__question-number">{currQuestion.currentQuestionIndex + 1}/{currQuestion.data.length}</div>
                            <div className="head-line__exit"><button><img src={process.env.PUBLIC_URL + "/img/exit.svg"} alt="exit" width="13px" height="13px"></img></button></div>
                        </div>
                    <div className="progress-line" ></div>
                    <div className="content">
                        <div className="content-question"><Question/></div>
                        <div className="content-answers">{displayAnswer(currQuestion,currQuestion.currentQuestionIndex)}</div>
                    </div> 
                    {displaybottomText(currQuestion,currQuestion.currentQuestionIndex, setCurrQuestion, setQuizState)}
                </div>
        </div>
    )
};
        


export default Quiz;