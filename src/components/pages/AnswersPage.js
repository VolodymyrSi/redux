import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchAnswers } from "../../ApiRequests/answersApi";
import { AnswerItem } from "../items/AnswerItem";

export const AnswersPage = () => {
  const dispatch = useDispatch();
  const answers = useSelector((state) => state.answers.items);

  let { questionId } = useParams();

  useEffect(() => {
    console.log("insideUseEffect");
    console.log(questionId);
    if (!questionId) return;
    dispatch(fetchAnswers(questionId));
    console.log(answers);
  }, []);

  return (
    <div>
      {console.log(answers)}
      {answers?.items?.map((answer) => (
        <AnswerItem data={answer} />
      ))}
      <p>Exact question page</p>
    </div>
  );
};
