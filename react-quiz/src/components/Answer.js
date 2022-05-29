import React, {useContext} from "react";
import { CurrentContext} from "../contexts/CurrentContext";
import '../css/App.css';


function flagSex(elem1){
    let flag = "both";
    if (elem1 == 0) {
        flag = "female";
    } else if(elem1 == 1){
        flag = "male";
    }
    return flag;
}

function pathImg(elem1, props, elem2, elem3){
    let path;
    if (elem1 == 0){
        path = props.data[elem1].answer.imgPath[elem2];
    }
    if ((elem1 > 0) && (elem3))
    {
        if (elem3 == "female"){ path = props.data[elem1].answer.imgPathfemale[elem2];}
        if (elem3 == "male"){path = props.data[elem1].answer.imgPathmale[elem2];}
    }else if((elem1 > 0)){
        path = props.data[elem1].answer.imgPathboth[elem2];
    }
    return path;
}


const Answer = ({props, index}) => {
    const [currQuestion,setCurrQuestion] = useContext(CurrentContext);
    let flag;
    return (<div>
        <button
          onClick={() => {
            setCurrQuestion({type: "NEXT_QUESTION"}); 
            if (currQuestion.currentQuestionIndex == 0){flag = (flagSex(index));};
        }}>
            <img src={process.env.PUBLIC_URL + pathImg(currQuestion.currentQuestionIndex, currQuestion, index, flag)} height="50px" width="50px"></img>
            {props}
        </button>
    </div>);
};

export default Answer;