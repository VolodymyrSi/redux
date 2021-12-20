import {addAnswersAction} from "../store/answersReducer";

const answersURL = (questionID) => {
  return `https://api.stackexchange.com/2.3/questions/${questionID}/answers?order=desc&sort=activity&site=stackoverflow`;
};

export const fetchAnswers = (questionID) => {
  return function (dispatch) {
    fetch(answersURL(questionID))
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        return dispatch(addAnswersAction(json));
      });
  };
};
