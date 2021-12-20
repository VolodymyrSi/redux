import { applyMiddleware, combineReducers, createStore } from "redux";
import { answersReducer } from "./answersReducer";
import { questionsReducer } from "./questionsReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  answers: answersReducer,
  questions: questionsReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
