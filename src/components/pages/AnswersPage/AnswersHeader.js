import { Header } from "antd/es/layout/layout";
import { Menu } from "antd";

const AnswersHeader = () => {
  return (
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal">
        Answers page
      </Menu>
    </Header>
  );
};

export default AnswersHeader;
