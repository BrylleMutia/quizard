import React, { useState } from "react";
import classes from "./App.module.css";
import { CircularProgress } from "@material-ui/core";

import { fetchQuestions, Difficulty, QuestionState } from "./API";
import QuestionCard from "./components/questionCard/QuestionCard";
import { AnswerObject } from "./components/questionCard/QuestionCard";


function App() {
    // params for questions' difficulty and total numbers
    const TOTAL_QUESTIONS = 10;
    const DIFFICULTY = Difficulty.EASY;

    const [loading, setLoading] = useState(false);
    const [questions, setQuestions] = useState<QuestionState[]>([]);
    const [number, setNumber] = useState(0);
    const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(true);

    const startQuiz = async () => {
        setLoading(true);
        setGameOver(false);

        const newQuestions = await fetchQuestions(TOTAL_QUESTIONS, DIFFICULTY);

        setQuestions(newQuestions);
        setScore(0);
        setUserAnswers([]);
        setNumber(0);
        setLoading(false);
    };

    const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
        if(!gameOver) {
            // get user answer from button value
            const answer = e.currentTarget.value;
            // check answer agains correct answer
            const correct = questions[number].correct_answer === answer;
            // add score if answer if correct
            if(correct) setScore(prev => prev + 1);

            // save answer in the array for user answer
            const answerObject = {
                question: questions[number].question,
                answer,
                correct,
                correctAnswer: questions[number].correct_answer
            }

            setUserAnswers(prev => [...prev, answerObject]);
        }
    };

    const nextQuestion = () => {
        // move on to next question if not on last question
        const nextQuestion = number + 1;

        if(nextQuestion === TOTAL_QUESTIONS) {
            setGameOver(true);
        } else {
            setNumber(nextQuestion);
        }
    };

    return (
        <div className="App">
            <h1>React Quiz</h1>

            {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
                <button className={classes.start} onClick={startQuiz}>
                    START
                </button>
            ) : null}

            {!gameOver ? <p className={classes.score}>SCORE: </p> : null}

            {loading && <CircularProgress />}

            {!loading && !gameOver && (
                <QuestionCard
                    questionNum={number + 1}
                    totalQuestions={TOTAL_QUESTIONS}
                    question={questions[number].question}
                    answers={questions[number].answers}
                    userAnswer={userAnswers ? userAnswers[number] : undefined}
                    callback={checkAnswer}
                />
            )}

            {!loading && !gameOver && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS - 1 ? (
                <button className={classes.next} onClick={nextQuestion}>
                    Next Question
                </button>
            ) : null}
        </div>
    );
}

export default App;
