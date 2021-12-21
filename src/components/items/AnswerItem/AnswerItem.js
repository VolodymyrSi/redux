import parse from "html-react-parser";
import { Comment, Avatar, Card } from "antd";

export const AnswerItem = ({ data }) => {
  return (
    <Card style={{ marginBottom: 20, cursor: "default" }}>
      <Comment
        author={<a>{data.owner.display_name}</a>}
        avatar={
          <Avatar
            src={data.owner.profile_image}
            alt={data.owner.display_name}
          />
        }
        content={<p>{parse(data.body)}</p>}
      />
    </Card>
  );
};
