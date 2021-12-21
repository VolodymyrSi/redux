import parse from "html-react-parser";

import "antd/dist/antd.css";
import { Comment, Tooltip, Avatar } from "antd";
import {
  DislikeOutlined,
  LikeOutlined,
  DislikeFilled,
  LikeFilled,
} from "@ant-design/icons";

export const AnswerItem = ({ data }) => {
  return (
    <>
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
    </>
  );
};
