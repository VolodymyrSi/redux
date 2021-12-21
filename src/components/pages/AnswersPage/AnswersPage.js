import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchAnswers } from "../../../ApiRequests/answersApi";
import { AnswerItem } from "../../items/AnswerItem/AnswerItem";
import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import LoadingSpinner from "../../features/LoadingSpinner";
import PageFooter from "../PageFooter";
import AnswersHeader from "./AnswersHeader";

export const AnswersPage = () => {
  const dispatch = useDispatch();
  const answers = useSelector((state) => state.answers.items);

  let { questionId } = useParams();

  useEffect(() => {
    if (!questionId) return;
    dispatch(fetchAnswers(questionId));
  }, []);

  return (
    <Layout className="layout">
      <AnswersHeader />
      {!answers.items && <LoadingSpinner />}
      {answers.items && (
        <Content style={{ padding: "0 50px", minHeight: "80vh" }}>
          <div style={{ margin: "16px 0" }} className="site-layout-content">
            {answers.items.map((answer) => (
              <AnswerItem data={answer} />
            ))}
          </div>
        </Content>
      )}
      <PageFooter />
    </Layout>
  );
};
