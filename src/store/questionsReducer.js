const initialState = {
  items: [],
  isFetching: true,
  currentPage: 1,
  questionsPerPage: 20,
  filter: "activity",
};

const ADD_QUESTIONS = "ADD_QUESTIONS";
const SET_IS_FETCHING = "SET_IS_FETCHING";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_QUESTIONS_PER_PAGE = "SET_QUESTIONS_PER_PAGE";
const SET_FILTER = "SET_FILTER";

export const questionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_QUESTIONS:
      return {
        ...state,
        items: { ...state.items, ...action.payload },
        isFetching: false,
      };
    case SET_IS_FETCHING:
      return { ...state, isFetching: action.payload };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.payload };
    case SET_QUESTIONS_PER_PAGE:
      return { ...state, questionsPerPage: action.payload };
    case SET_FILTER:
      return { ...state, filter: action.payload };
    default:
      return state;
  }
};

export const addQuestionsAction = (questions) => ({
  type: ADD_QUESTIONS,
  payload: questions,
});

export const setIsFetching = (bool) => ({
  type: SET_IS_FETCHING,
  payload: bool,
});

export const setCurrentPage = (page) => ({
  type: SET_CURRENT_PAGE,
  payload: page,
});

export const setQuestionsPerPage = (number) => ({
  type: SET_QUESTIONS_PER_PAGE,
  payload: number,
});

export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: filter,
});
