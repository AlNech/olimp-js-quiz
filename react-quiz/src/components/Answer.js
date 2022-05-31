import React, {useContext} from "react";
import { CurrentContext} from "../contexts/CurrentContext";
import '../css/App.css';
import {QuizContext} from "../contexts/QuizContexts";



function pathImg(elem1, props, elem2, elem3){
    let path;
    if (elem1 === 0){
        path = props.data[elem1].answer.imgPath[elem2];
    }
    if ((elem1 > 0) && (elem3))
    {
        if (elem3 === "female"){ path = props.data[elem1].answer.imgPathfemale[elem2];}
        if (elem3 === "male"){path = props.data[elem1].answer.imgPathmale[elem2];}
    }else if((elem1 > 0)){
        path = props.data[elem1].answer.imgPathboth[elem2];
    }
    return path;
}

function displayIMG(elem1, props, elem2, elem3){
    if (elem1 !== 2){
        return (<img src={process.env.PUBLIC_URL + pathImg(elem1, props, elem2, elem3)}  width="50px" height="50px"></img>);
    }
}


const Answer = ({props, index}) => {
    const [currQuestion,setCurrQuestion] = useContext(CurrentContext);
    const {quizState, setQuizState} = useContext(QuizContext);

    return (<div>
        <button
          onClick={() => {
            if (!currQuestion.showFinal )
                {setCurrQuestion({type: "NEXT_QUESTION"})}       
            else{
                setQuizState("end");
            };
            if ((currQuestion.currentQuestionIndex === 0) && (index===0)){currQuestion.data[0].flagSex = "female"; };
            if ((currQuestion.currentQuestionIndex === 0) && (index===1)){currQuestion.data[0].flagSex = "male";};         
        }}>
            
            <div> {displayIMG(currQuestion.currentQuestionIndex,currQuestion, index, currQuestion.data[0].flagSex)} </div>
            {props}
        </button>
    </div>);
};

export default Answer;