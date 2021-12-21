import { useDispatch, useSelector, connect } from "react-redux";
import { fetchQuestions } from "../../ApiRequests/questionsApi";
import { QuestionItem } from "../items/QuestionItem";
import { useEffect } from "react";
import { fetchAnswers } from "../../ApiRequests/answersApi";

export const AllQuestions = (props) => {
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.questions.items);

  useEffect(() => {
    dispatch(fetchQuestions());
  }, []);

  return (
    <>
      {questions ? (
        <div>
          {questions.items.map((question) => (
            <QuestionItem question={question} key={question.question_id} />
          ))}
        </div>
      ) : (
        <div>there are no qs</div>
      )}
      <div>All questions page</div>
    </>
  );
};

const mapStateToProps = function (state) {
  return {
    questions: state.questions.items,
  };
};

export default connect(mapStateToProps)(AllQuestions);
