import { addQuestionsAction, setIsFetching } from "../store/questionsReducer";

const questionsURL = (pageNumber, pageSize, sort) => {
  return `https://api.stackexchange.com/2.3/questions?page=${pageNumber}&pagesize=${pageSize}&order=desc&sort=${sort}&site=stackoverflow&filter=!nKzQUR693x`;
};

export const fetchQuestions = (
  pageNumber = 1,
  pageSize = 20,
  sort = "activity"
) => {
  return function (dispatch) {
    dispatch(setIsFetching(true));
    fetch(questionsURL(pageNumber, pageSize, sort))
      .then((response) => response.json())
      .then((json) => {
        dispatch(addQuestionsAction(json));
      });
  };
};
