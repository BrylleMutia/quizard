import React, { useState } from "react";
import classes from "./App.module.css";
import { CircularProgress } from "@material-ui/core";

import { fetchQuestions, Difficulty, QuestionState } from "./API";
import QuestionCard from "./components/questionCard/QuestionCard";
import { AnswerObject } from "./components/questionCard/QuestionCard";

import { theme } from "./theme/theme";
import { ThemeProvider } from "@material-ui/core/styles";
import { Button, Typography } from "@material-ui/core";

const App = (props: any) => {
    // params for questions' difficulty and total numbers
    const TOTAL_QUESTIONS = 10;
    const DIFFICULTY = Difficulty.EASY;

    const [loading, setLoading] = useState(false);
    const [questions, setQuestions] = useState<QuestionState[]>([]);
    const [number, setNumber] = useState(0);
    const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(true);
    const [isFirstTry, setIsFirstTry] = useState(true);
    const [highscore, setHighscore] = useState(0);

    const startQuiz = async () => {
        setLoading(true);
        setGameOver(false);
        setIsFirstTry(false);

        // const newQuestions = await fetchQuestions(TOTAL_QUESTIONS, DIFFICULTY);

        const newQuestions = [
            {
                category: "Animals",
                type: "multiple",
                difficulty: "easy",
                question: "The K\u0101k\u0101p\u014d is a large, flightless, nocturnal parrot native to which country?",
                correct_answer: "New Zealand",
                incorrect_answers: ["South Africa", "Australia", "Madagascar"],
                answers: ["South Africa", "Australia", "Madagascar", "New Zealand"],
            },
            {
                category: "Science & Nature",
                type: "multiple",
                difficulty: "easy",
                question: "Which of the following blood vessels carries deoxygenated blood?",
                correct_answer: "Pulmonary Artery",
                incorrect_answers: ["Pulmonary Vein", "Aorta", "Coronary Artery"],
                answers: ["Pulmonary Vein", "Aorta", "Coronary Artery", "Pulmonary Artery"],
            },
            {
                category: "Entertainment: Cartoon & Animations",
                type: "multiple",
                difficulty: "easy",
                question: "In the Pixar film, &quot;Toy Story&quot; what was the name of the child who owned the toys?",
                correct_answer: "Andy",
                incorrect_answers: ["Edward", "Danny", "Matt"],
                answers: ["Edward", "Danny", "Matt", "Andy"],
            },
            {
                category: "Entertainment: Video Games",
                type: "multiple",
                difficulty: "easy",
                question: "In the first game of the Sly Cooper franchise, what family heirloom did Sly Cooper want to steal back?",
                correct_answer: "Thievius Raccoonus",
                incorrect_answers: ["Raccoon Training 101", "The Art of Sneak", "Raccoonus Teachus"],
                answers: ["Raccoon Training 101", "The Art of Sneak", "Raccoonus Teachus", "Thievius Raccoonus"],
            },
            {
                category: "Entertainment: Video Games",
                type: "multiple",
                difficulty: "easy",
                question: "What is Gabe Newell&#039;s favorite class in Team Fortress 2?",
                correct_answer: "Spy",
                incorrect_answers: ["Heavy", "Medic", "Pyro"],
                answers: ["Heavy", "Medic", "Pyro", "Spy"],
            },
            {
                category: "Entertainment: Film",
                type: "multiple",
                difficulty: "easy",
                question: "In &quot;Jurassic World&quot;, what is the name of the dinosaur that is a genetic hybrid?",
                correct_answer: "Indominus Rex",
                incorrect_answers: ["Mosasaurus", "Pteranodon", "Tyrannosaurus Rex "],
                answers: ["Mosasaurus", "Pteranodon", "Tyrannosaurus Rex ", "Indominus Rex"],
            },
            {
                category: "Entertainment: Video Games",
                type: "multiple",
                difficulty: "easy",
                question: "What is the homeworld of the Elites from Halo?",
                correct_answer: "Sanghelios",
                incorrect_answers: ["Te", "Doisac", "Eayn"],
                answers: ["Te", "Doisac", "Eayn", "Sanghelios"],
            },
            {
                category: "Vehicles",
                type: "multiple",
                difficulty: "easy",
                question: "The LS1 engine is how many cubic inches?",
                correct_answer: "346",
                incorrect_answers: ["350", "355", "360"],
                answers: ["350", "355", "360", "346"],
            },
            {
                category: "Mythology",
                type: "multiple",
                difficulty: "easy",
                question: "The Nike apparel and footwear brand takes it&#039;s name from the Greek goddess of what?",
                correct_answer: "Victory",
                incorrect_answers: ["Courage", "Strength", "Honor"],
                answers: ["Courage", "Strength", "Honor", "Victory"],
            },
            {
                category: "Entertainment: Television",
                type: "multiple",
                difficulty: "easy",
                question: "In the cartoon &#039;SpongeBob SquarePants&#039;, what did the acronym E.V.I.L stand for?",
                correct_answer: "Every Villain Is Lemons",
                incorrect_answers: ["Every Villain Is Lemonade", "Every Villain Is Limes", "Each Villain Is Lemonade"],
                answers: ["Every Villain Is Lemonade", "Every Villain Is Limes", "Each Villain Is Lemonade", "Every Villain Is Lemons"],
            },
        ];

        setQuestions(newQuestions);
        setScore(0);
        setUserAnswers([]);
        setNumber(0);
        setLoading(false);
    };

    const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!gameOver) {
            // get user answer from button value
            const answer = e.currentTarget.value;
            // check answer agains correct answer
            const correct = questions[number].correct_answer === answer;
            // add score if answer if correct
            // change color of selected button (red = wrong, green = correct)
            if (correct) setScore((prev) => prev + 1);

            // save answer in the array for user answer
            const answerObject = {
                answer,
                correct,
                correctAnswer: questions[number].correct_answer,
            };

            setUserAnswers((prev) => [...prev, answerObject]);
        }
    };

    const nextQuestion = (e: any) => {
        e.preventDefault();
        // move on to next question if not on last question
        const nextQuestion = number + 1;

        if (nextQuestion === TOTAL_QUESTIONS) {
            setGameOver(true);
            if (score > highscore) setHighscore(score);
        } else {
            setNumber(nextQuestion);
        }
    };

    return (
        <React.StrictMode>
            <ThemeProvider theme={theme}>
                <div className={classes.app}>
                    <div className={classes.container}>
                        <h1>QUIZARD</h1>

                        {isFirstTry || userAnswers.length === TOTAL_QUESTIONS ? (
                            <React.Fragment>
                                {isFirstTry ? (
                                    <Typography variant="h5" style={{ textAlign: "center" }}>
                                        How far can your knowledge take you?
                                    </Typography>
                                ) : (
                                    <Typography variant="h5" style={{ textAlign: "center" }}>
                                        {score > highscore ? "NEW HIGHSCORE!" : "WELL DONE!"}
                                    </Typography>
                                )}
                                <Button
                                    {...props}
                                    style={{ marginTop: "2em" }}
                                    className={classes.start}
                                    onClick={startQuiz}
                                    size="medium"
                                    variant="contained"
                                    color="primary"
                                >
                                    {isFirstTry ? "START QUIZ" : "RETAKE QUIZ"}
                                </Button>
                            </React.Fragment>
                        ) : null}

                        {!gameOver ? (
                            <Typography variant="h6" style={{ marginTop: "3em" }} className={classes.score}>
                                SCORE: {score}
                            </Typography>
                        ) : null}

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

                        <form>
                            {!loading && !gameOver && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS - 1 ? (
                                <Button
                                    type="submit"
                                    style={{ marginTop: "1em" }}
                                    variant="contained"
                                    size="large"
                                    color="primary"
                                    className={classes.next}
                                    onClick={nextQuestion}
                                >
                                    Next Question
                                </Button>
                            ) : null}
                        </form>
                    </div>
                </div>
            </ThemeProvider>
        </React.StrictMode>
    );
};

export default App;
