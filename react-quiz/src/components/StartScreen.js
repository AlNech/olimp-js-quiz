import React, {useContext} from "react";
import { QuizContext } from "../contexts/QuizContexts";
import logo from "../img/logo.svg"
import arrow_right from "../img/arrow_right.svg";
import main_image from "../img/main-image.svg";
import '../css/App.css';

const StartScreen = () => {
    //Переключение страниц старт-квиз-конец
    const {quizState, setQuizState} = useContext(QuizContext);
    
    return (
        <div className="main-screen">
                <div className="head-line">
                    <div className="head-line__logo"><img src={logo} alt="logo" width="120px" height="38px"></img></div>
                    <div className="head-line__arrow-right"><button onClick={() => setQuizState("quiz")}><img src={arrow_right} alt="right" width="10px" height="18px" ></img></button></div>
                </div>
                <div className="page-main">
                    <div className="page-main__image"><img src={main_image} alt="image-glasses" width="312px" height="153px"></img></div>
                    <div className="page-main__title"><h2>Let's find your perfect pair!</h2></div>
                    <div className="page-main__text"><main>Take the quiz to easily discover your perfect fit from thousands of styles</main></div>
                    <div className="page-main__button"><button onClick={() => setQuizState("quiz")}>Start Now</button></div>
                </div> 
        </div>
        
                   
        
    );
};

export default StartScreen;