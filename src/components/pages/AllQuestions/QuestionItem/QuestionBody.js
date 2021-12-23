import { Avatar, Comment } from "antd";

const QuestionBody = ({ question }) => {
  return (
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
  );
};

export default QuestionBody;
