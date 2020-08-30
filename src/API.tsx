export interface Question {
    category: string,
    difficulty: string,
    type: string,
    question: string,
    correct_answer: string,
    incorrect_answers: string[]
}



export type QuestionState = Question & { answers: string[] }

export enum Difficulty {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard"
}

export const fetchQuestions = async (amount: number, difficulty: Difficulty) => {
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;

    const data = await (await fetch(endpoint)).json();
    return data.results.map((question: Question) => (
        {
            ...question,
            answers: shuffleArray([...question.incorrect_answers, question.correct_answer])
        }
    ))
}

// shuffle answers from the api
const shuffleArray = (array: any[]) => [...array].sort(() => Math.random() - 0.5);