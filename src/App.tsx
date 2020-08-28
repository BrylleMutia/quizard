import React, { useState } from "react";
import classes from "./App.module.css";
import { CircularProgress } from "@material-ui/core";

import { fetchQuestions, Difficulty } from "./API";
import QuestionCard from "./components/questionCard/QuestionCard";

const TOTAL_QUESTIONS = 10;

function App() {
    const [loading, setLoading] = useState(false);
    const [questions, setQuestions] = useState([]);
    const [number, setNumber] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(true);

    console.log(fetchQuestions(TOTAL_QUESTIONS, Difficulty.EASY));

    const startQuiz = () => {};

    const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};

    const nextQuestion = () => {};

    return (
        <div className="App">
            <h1>React Quiz</h1>
            <button className={classes.start} onClick={startQuiz}>
                START
            </button>
            <p className={classes.score}>SCORE: </p>
            { loading ? <CircularProgress /> : null }

            {/* <QuestionCard
                questionNum={number + 1}
                totalQuestions={TOTAL_QUESTIONS}
                // question={questions[number].question}
                // answers={questions[number].answers}
                userAnswer={userAnswers ? userAnswers[number] : undefined}
                callback={checkAnswer}
            /> */}
            <button className={classes.next} onClick={nextQuestion}>
                Next Question
            </button>
        </div>
    );
}

export default App;
