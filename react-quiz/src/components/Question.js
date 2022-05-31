import React, {useContext} from "react";
import { CurrentContext } from "../contexts/CurrentContext";


function displayQuestion(props, elem1){
    if(!props.showUnderQuestion)
        {return props.data[elem1].quiestion}
    else{
        return props.data[elem1].underQuestion;
    }    
    
}

function for_4_page(currQuestion){
    if (currQuestion.currentQuestionIndex == 3){
    return <div className="img_frame"><img src={process.env.PUBLIC_URL + "img/sizes.svg"} ></img></div>}
};

const Question = () => {
    const [currQuestion,setCurrQuestion] = useContext(CurrentContext);

    return (
        <div className="question">{displayQuestion(currQuestion, currQuestion.currentQuestionIndex)}{for_4_page(currQuestion)}</div>
        
    );
};

export default Question;