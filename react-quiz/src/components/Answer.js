import React, {useContext} from "react";
import { CurrentContext} from "../contexts/CurrentContext";
import '../css/App.css';


const Answer = ({props, indexOption}) => {
    const [currQuestion,setCurrQuestion] = useContext(CurrentContext);

    
    return (<div><button onClick={() => {setCurrQuestion({type: "NEXT_QUESTION"})}}>{props}</button></div>);
};

export default Answer;