import { useDispatch, useSelector } from "react-redux";
import { fetchQuestions } from "../../ApiRequests/questionsApi";

export const AllQuestions = () => {
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.questions.items);
  return (
    <>
      <button onClick={() => dispatch(fetchQuestions())}>
        Fetch questions
      </button>
      <div>All questions page</div>
    </>
  );
};
