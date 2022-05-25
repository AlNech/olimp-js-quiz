import React, {useState, useContext} from "react";
import StartScreen from './components/StartScreen';
import Quiz from './components/Quiz';
import EndScreen from './components/EndScreen';

import { QuizContext } from "./contexts/QuizContexts";
import {CurrentProvider} from "./contexts/CurrentContext";

function App() {
  const [quizState, setQuizState] = useState("start");


  return (
    
      <QuizContext.Provider value={{quizState, setQuizState}}>
        {quizState === "start" && <StartScreen/>}
        {quizState === "quiz" && (<CurrentProvider><Quiz/></CurrentProvider>)}
        {quizState === "end" && <EndScreen/>}
      </QuizContext.Provider>

    
  );
}

export default App;
