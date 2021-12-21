import { Link } from "react-router-dom";
import "antd/dist/antd.css";

import { Comment, Tooltip, Avatar, Card, Statistic } from "antd";
import { RiseOutlined, BulbOutlined } from "@ant-design/icons";


export const QuestionItem = ({ question }) => {
  return (
    <Card style={{ marginBottom: 20 }}>
      <Link to={`answers/${question.question_id}`}>
        <Comment
          author={<a>{question.owner.display_name}</a>}
          avatar={
            <Avatar
              src={question.owner.profile_image}
              alt={question.owner.display_name}
            />
          }
          content={<p style={{ fontSize: 18 }}>{question.title}</p>}
        />
      </Link>
      <div style={{display:'flex', justifyContent:'flex-end', fontSize: 10}}>
        <Statistic
          title="Views"
          value={question.view_count}
          prefix={<RiseOutlined />}
          style={{marginRight: 10}}
        />
        <Statistic
          title="Answers"
          value={question.answer_count}
          prefix={<BulbOutlined />}
        />
      </div>
    </Card>
  );
};
