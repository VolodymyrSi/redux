import { addQuestionsAction } from "../store/questionsReducer";

const answersURL = (questionID) => {
  return `https://api.stackexchange.com/2.3/questions/${questionID}/answers?order=desc&sort=activity&site=stackoverflow`;
};

export const fetchAnswers = (questionID) => {
  return function (dispatch) {
    fetch(answersURL(questionID))
      .then((response) => response.json())
      .then((json) => dispatch(addQuestionsAction(json)));
  };
};
