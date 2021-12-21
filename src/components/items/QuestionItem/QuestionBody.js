import { Avatar, Comment } from "antd";

const QuestionBody = (props) => {
  return (
    <Comment
      author={<a>{props.question.owner.display_name}</a>}
      avatar={
        <Avatar
          src={props.question.owner.profile_image}
          alt={props.question.owner.display_name}
        />
      }
      content={<p style={{ fontSize: 18 }}>{props.question.title}</p>}
    />
  );
};

export default QuestionBody;
