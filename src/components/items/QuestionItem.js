import { Link } from "react-router-dom";

export const QuestionItem = ({ question }) => {
  return (
    <div>
      <Link to={`answers/${question.question_id}`}>{question.title}</Link>
      {question.tags && question.tags.map((tag) => <p>{tag}</p>)}
        <img src={question.owner.profile_image}/>
        <p>{question.owner.display_name}</p>
        <p>Viewed {question.view_count}</p>
        <p>Answers {question.answer_count}</p>
    </div>
  );
};
