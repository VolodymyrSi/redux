import { Menu } from "antd";
import { Header } from "antd/es/layout/layout";

const QuestionHeader = () => {
  return (
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal">
        StackOverflow questions & answers
      </Menu>
    </Header>
  );
};

export default QuestionHeader;
