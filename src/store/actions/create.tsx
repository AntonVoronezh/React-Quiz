import { CREATE_QUIZ_QUESTION, RESET_QUIZ_CREATION } from "./actionTypes";
import axios from "../../axios/axios-quiz";

export function createQuizQuestion(item: any): { item: any; type: string } {
  return {
    type: CREATE_QUIZ_QUESTION,
    item,
  };
}

export function resetQuizCreation(): { type: string } {
  return {
    type: RESET_QUIZ_CREATION,
  };
}

export function finishCreateQuiz(): (dispatch, getState) => Promise<void> {
  return async (dispatch, getState) => {
    await axios.post("quizes.json", getState().create.quiz);
    dispatch(resetQuizCreation());
  };
}
