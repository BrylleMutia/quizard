import React from "react";
import classes from "./QuestionCard.module.css";
import { Typography, CardActions, Card, CardContent, Button, useMediaQuery } from "@material-ui/core";

// specify types of this component's props
interface Props {
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    questionNum: number;
    totalQuestions: number;
}

export interface AnswerObject {
    answer: string;
    correct: boolean;
    correctAnswer: string;
}

const QuestionCard: React.FC<Props> = ({ question, answers, callback, userAnswer, questionNum, totalQuestions }) => {
    // styling for choice buttons
    // red = wrong / green = correct
    const answerResultStyle = (answer: string) => {
        if (answer === userAnswer?.correctAnswer)
            return {
                color: "green",
                borderColor: "green",
            };

        if (answer !== userAnswer?.correctAnswer && userAnswer !== undefined)
            return {
                color: "red",
                borderColor: "red",
            };
    };

    // material ui media query for card component
    const matches = useMediaQuery("(max-width: 420px)");

    return (
        <Card className={classes.question_card} style={matches ? { overflow: "scroll" } : undefined }>
            <CardContent>
                <Typography className={classes.number}>
                    {questionNum} / {totalQuestions}
                </Typography>
                <Typography>
                    <p dangerouslySetInnerHTML={{ __html: question }} />
                </Typography>
                <CardActions
                    style={matches ? { display: "flex", flexDirection: "column" } : undefined}
                >
                    {answers.map((answer, index) => (
                        <div key={index} className={classes.buttons}>
                            <Button
                                style={answerResultStyle(answer)}
                                id="button"
                                variant="outlined"
                                disabled={userAnswer ? true : false}
                                value={answer}
                                onClick={callback}
                            >
                                <span dangerouslySetInnerHTML={{ __html: answer }} />
                            </Button>
                        </div>
                    ))}
                </CardActions>
            </CardContent>
        </Card>
    );
};

export default QuestionCard;
