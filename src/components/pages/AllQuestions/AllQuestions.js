import { useDispatch, useSelector, connect } from "react-redux";
import { useEffect } from "react";
import { Layout } from "antd";

import QuestionItem from "./QuestionItem/QuestionItem";
import LoadingSpinner from "../../features/LoadingSpinner";
import PageFooter from "../PageFooter";
import CustomPagination from "../../features/CustomPagination";
import QuestionHeader from "./QuestionHeader";
import { fetchQuestions } from "../../../api/questionsApi";

const { Content } = Layout;

export const AllQuestions = (props) => {
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.questions.items);
  const isFetching = useSelector((state) => state.questions.isFetching);

  useEffect(() => {
    console.log(questions);
    dispatch(fetchQuestions());
    console.log(questions);
  }, []);

  return (
    <Layout className="layout">
      <QuestionHeader />
      {isFetching && <LoadingSpinner />}
      {!isFetching && (
        <div>
          <Content style={{ padding: "0 50px" }}>
            <div style={{ margin: "16px 0" }} className="site-layout-content">
              <div>
                {questions.items.map((question) => (
                  <QuestionItem
                    question={question}
                    key={question.question_id}
                  />
                ))}
              </div>
            </div>
          </Content>
          <CustomPagination />
        </div>
      )}
      <PageFooter />
    </Layout>
  );
};

const mapStateToProps = function (state) {
  return {
    questions: state.questions.items,
  };
};

export default connect(mapStateToProps)(AllQuestions);
