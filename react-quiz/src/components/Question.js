import React, {useContext} from "react";
import { CurrentContext } from "../contexts/CurrentContext";

const Question = () => {
    const [currQuestion,setCurrQuestion] = useContext(CurrentContext);
    const currentQuestion = currQuestion.data[currQuestion.currentQuestionIndex];

    return (
        <div className="question">{currentQuestion.quiestion}</div>
    );
};

export default Question;