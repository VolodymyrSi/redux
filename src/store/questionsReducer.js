const initialState = {
};

const ADD_QUESTIONS = "ADD_QUESTIONS";

export const questionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_QUESTIONS:
      return { ...state, items: {...state.items, ...action.payload} };
    default:
      return state;
  }
};

export const addQuestionsAction = (payload) => ({ type: ADD_QUESTIONS , payload });
