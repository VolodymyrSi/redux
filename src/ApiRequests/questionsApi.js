import { addQuestionsAction } from "../store/questionsReducer";

const questionsURL =
  "https://api.stackexchange.com/2.3/questions?order=desc&sort=activity&site=stackoverflow";

export const fetchQuestions = () => {
  return function (dispatch) {
    fetch(questionsURL)
      .then((response) => response.json())
      .then((json) => dispatch(addQuestionsAction(json)));
  };
};
