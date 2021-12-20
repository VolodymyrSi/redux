import { Link } from "react-router-dom";

export const QuestionItem = ({ question }) => {
  return (
    <div>
      <Link to={`answers/${question.question_id}`}>{question.title}</Link>
    </div>
  );
};
