import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchAnswers } from "../../ApiRequests/answersApi";
import { AnswerItem } from "../items/AnswerItem/AnswerItem";
import { Breadcrumb, Layout, Menu } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import LoadingSpinner from "../elements/LoadingSpinner";
import PageFooter from "../elements/PageFooter";

export const AnswersPage = () => {
  const dispatch = useDispatch();
  const answers = useSelector((state) => state.answers.items);

  let { questionId } = useParams();

  useEffect(() => {
    console.log("insideUseEffect");
    console.log(questionId);
    if (!questionId) return;
    dispatch(fetchAnswers(questionId));
    console.log(answers);
  }, []);

  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal">
          Answers page
        </Menu>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}></Breadcrumb>
        <div className="site-layout-content">
          {answers?.items?.map((answer) => (
            <AnswerItem data={answer} />
          ))}
          {!answers.items && <LoadingSpinner />}
        </div>
      </Content>
      <PageFooter />
    </Layout>
  );
};
