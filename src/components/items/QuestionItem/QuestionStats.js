import { Statistic } from "antd";
import { BulbOutlined, RiseOutlined } from "@ant-design/icons";

const QuestionStats = (props) => {
  return (
    <div style={{ display: "flex", justifyContent: "flex-end", fontSize: 10 }}>
      <Statistic
        title="Views"
        value={props.question.view_count}
        prefix={<RiseOutlined />}
        style={{ marginRight: 10 }}
      />
      <Statistic
        title="Answers"
        value={props.question.answer_count}
        prefix={<BulbOutlined />}
      />
    </div>
  );
};

export default QuestionStats;
