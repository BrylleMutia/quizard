import React, { useState } from "react";
import classes from "./App.module.css";
import { CircularProgress } from "@material-ui/core";

import { fetchQuestions, Difficulty, QuestionState } from "./API";
import QuestionCard from "./components/questionCard/QuestionCard";
import { AnswerObject } from "./components/questionCard/QuestionCard";

import { theme } from "./theme/theme";
import { ThemeProvider, makeStyles } from "@material-ui/core/styles";
import { Button, Typography, InputLabel, Select, MenuItem } from "@material-ui/core";

const useStyles = makeStyles({
    quiz_form: {
        display: "flex",
        flexDirection: "column",
        marginTop: "2em",
    },
    typography: {
        textAlign: "center",
    },
});

const App = () => {
    const styles = useStyles();

    // params for questions' difficulty and total numbers (api)
    const [totalQuestions, setTotalQuestions] = useState(10);
    const [difficulty, setDifficulty] = useState(Difficulty.EASY);

    const [loading, setLoading] = useState(false);
    const [questions, setQuestions] = useState<QuestionState[]>([]);
    const [number, setNumber] = useState(0);
    const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(true);
    const [highscore, setHighscore] = useState(0);

    const startQuiz = async () => {
        setLoading(true);
        setGameOver(false);

        // fetch questions from API
        const newQuestions = await fetchQuestions(totalQuestions, difficulty);

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

        if (nextQuestion === totalQuestions) {
            setGameOver(true);
            if (score > highscore) setHighscore(score);
        } else {
            setNumber(nextQuestion);
        }
    };

    const handleChangeDifficulty = (e: any) => setDifficulty(e.target.value);

    const handleChangeTotalQuestions = (e: any) => setTotalQuestions(e.target.value);

    return (
        <React.StrictMode>
            <ThemeProvider theme={theme}>
                <div className={classes.app}>
                    <div className={classes.container}>
                        <h1>QUIZARD</h1>

                        {gameOver ? (
                            <React.Fragment>
                                <Typography className={styles.typography} variant="h5">
                                    How far can your knowledge take you?
                                </Typography>

                                <form className={styles.quiz_form}>
                                    <InputLabel shrink={true} id="difficulty">
                                        DIFFICULTY
                                    </InputLabel>
                                    <Select
                                        labelId="difficulty"
                                        id="select-difficulty"
                                        defaultValue={difficulty}
                                        value={difficulty}
                                        onChange={handleChangeDifficulty}
                                    >
                                        <MenuItem value={Difficulty.EASY}>EASY</MenuItem>
                                        <MenuItem value={Difficulty.MEDIUM}>MEDIUM</MenuItem>
                                        <MenuItem value={Difficulty.HARD}>HARD</MenuItem>
                                    </Select>
                                    <InputLabel style={{ marginTop: "1em" }} shrink={true} id="total-questions">
                                        NUMBER OF QUESTIONS
                                    </InputLabel>
                                    <Select
                                        labelId="total-questions"
                                        id="select-total-questions"
                                        defaultValue={totalQuestions}
                                        value={totalQuestions}
                                        onChange={handleChangeTotalQuestions}
                                    >
                                        <MenuItem value={5}>5</MenuItem>
                                        <MenuItem value={10}>10</MenuItem>
                                        <MenuItem value={15}>15</MenuItem>
                                        <MenuItem value={20}>20</MenuItem>
                                        <MenuItem value={25}>25</MenuItem>
                                        <MenuItem value={30}>30</MenuItem>
                                        <MenuItem value={35}>35</MenuItem>
                                        <MenuItem value={40}>40</MenuItem>
                                        <MenuItem value={45}>45</MenuItem>
                                        <MenuItem value={50}>50</MenuItem>
                                    </Select>

                                    <Button
                                        style={{ marginTop: "2em" }}
                                        className={classes.start}
                                        onClick={startQuiz}
                                        size="medium"
                                        variant="contained"
                                        color="primary"
                                    >
                                        START QUIZ
                                    </Button>
                                </form>
                            </React.Fragment>
                        ) : null}

                        {loading && (
                            <React.Fragment>
                                <Typography variant="h6" color="secondary" style={{ margin: "0.7em 0" }}>
                                    Preparing questions...
                                </Typography>
                                <CircularProgress color="secondary" />
                            </React.Fragment>
                        )}

                        {userAnswers.length === totalQuestions && !gameOver ? (
                            <Typography className={styles.typography} variant="h5" color="secondary">
                                {score > highscore ? "NEW HIGHSCORE!" : "WELL DONE!"}
                            </Typography>
                        ) : null}

                        {!gameOver && !loading ? (
                            <Typography className={classes.score} variant="h6" style={{ marginTop: "3em" }}>
                                SCORE: {score}
                            </Typography>
                        ) : null}

                        {!loading && !gameOver && (
                            <QuestionCard
                                questionNum={number + 1}
                                totalQuestions={totalQuestions}
                                question={questions[number].question}
                                answers={questions[number].answers}
                                userAnswer={userAnswers ? userAnswers[number] : undefined}
                                callback={checkAnswer}
                            />
                        )}

                        {!loading && !gameOver && userAnswers.length === number + 1 ? (
                            <Button
                                type="submit"
                                style={{ marginTop: "1em" }}
                                variant="contained"
                                size="large"
                                color="primary"
                                className={classes.next}
                                onClick={nextQuestion}
                            >
                                {userAnswers.length === totalQuestions ? "RETAKE QUIZ" : "Next Question"}
                            </Button>
                        ) : null}
                    </div>
                </div>
            </ThemeProvider>
        </React.StrictMode>
    );
};

export default App;
