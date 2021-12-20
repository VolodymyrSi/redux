const initialState = {
    items: [],
};

const ADD_ANSWERS = "ADD_ANSWERS";

export const answersReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ANSWERS:
            return { ...state, items: [...state.items, ...action.payload] };
        default:
            return state;
    }
};

export const addAnswersAction = (payload) => ({ type: ADD_ANSWERS , payload });
