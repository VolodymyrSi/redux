import { addQuestionsAction } from "../store/questionsReducer";

const questionsURL =
  "https://api.stackexchange.com/2.3/questions?order=desc&sort=&site=stackoverflow";

export const fetchQuestions = (
  pageNumber = 1,
  pageSize = 20,
  sort = "activity"
) => {
  return function (dispatch) {
    fetch(
      `https://api.stackexchange.com/2.3/questions?page=${pageNumber}&pagesize=${pageSize}&order=desc&sort=${sort}&site=stackoverflow&filter=!nKzQUR693x`
    )
      .then((response) => response.json())
      .then((json) => dispatch(addQuestionsAction(json)));
  };
};
