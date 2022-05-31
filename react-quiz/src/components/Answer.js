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
    if ((elem1 !== 2)&&(elem1 !== 4)&&(elem1 !== 6)){
        return (<img src={process.env.PUBLIC_URL + pathImg(elem1, props, elem2, elem3)}  width="50px" height="50px"></img>);
    }
}
function class_for_page(indexcurr){
    if ((indexcurr==1)||(indexcurr==0)){
        return "class_for_1-2_page";
    }
    if ((indexcurr==2)||(indexcurr==4)){
        return "class_for_3-5_page"
    }
}
function displayAnswer(elem1, setCurrQuestion, setQuizState, indexcurr , index, currQuestion,props){
    
    return (<div className="answer">
        <button className={class_for_page(indexcurr)}
          onClick={() => {
            if (!elem1 ){
                    setCurrQuestion({type: "NEXT_QUESTION"})}       
            else{
                setQuizState("end");
            };
            if ((indexcurr=== 0) && (index===0)){currQuestion.data[0].flagSex = "female"; };
            if ((indexcurr === 0) && (index===1)){currQuestion.data[0].flagSex = "male";};         
        }}>
            
            <div className="img_answer"> {displayIMG(indexcurr,currQuestion, index, currQuestion.data[0].flagSex)} </div>
            <div className="text_answer">{props}</div>
        </button>
        </div>
    )
};

const Answer = ({props, index}) => {
    const [currQuestion,setCurrQuestion] = useContext(CurrentContext);
    const {quizState, setQuizState} = useContext(QuizContext);

    return (<div>
        {displayAnswer(currQuestion.showFinal,setCurrQuestion, setQuizState, currQuestion.currentQuestionIndex, index, currQuestion,props)}
    </div>);
};

export default Answer;