import { Link } from "react-router-dom";
import "antd/dist/antd.css";

import { Comment, Tooltip, Avatar } from "antd";
import parse from "html-react-parser";

export const QuestionItem = ({ question }) => {
  return (
    <div>
      <Link to={`answers/${question.question_id}`}>
        {" "}
        <Comment
          author={<a>{question.owner.display_name}</a>}
          avatar={
            <Avatar
              src={question.owner.profile_image}
              alt={question.owner.display_name}
            />
          }
          content={<p>{question.title}</p>}
        />
      </Link>
      {question.tags && question.tags.map((tag) => <p>{tag}</p>)}

      <p>Viewed {question.view_count}</p>
      <p>Answers {question.answer_count}</p>
    </div>
  );
};
