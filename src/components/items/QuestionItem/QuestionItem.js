import { Link } from "react-router-dom";
import "antd/dist/antd.css";

import { Card } from "antd";
import QuestionStats from "./QuestionStats";
import QuestionBody from "./QuestionBody";

export const QuestionItem = ({ question }) => {
  return (
    <Card style={{ marginBottom: 20 }}>
      <Link to={`answers/${question.question_id}`}>
        <QuestionBody question={question} />
      </Link>
      <QuestionStats question={question} />
    </Card>
  );
};
