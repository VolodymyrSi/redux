import { useDispatch, useSelector, connect } from "react-redux";
import { fetchQuestions } from "../../ApiRequests/questionsApi";
import { QuestionItem } from "../items/QuestionItem";
import { useEffect } from "react";

import { Layout, Menu, Breadcrumb } from "antd";
import LoadingSpinner from "../elements/LoadingSpinner";
import PageFooter from "../elements/PageFooter";
import CustomPagination from "../elements/CustomPagination";

const { Header, Content } = Layout;

export const AllQuestions = (props) => {
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.questions.items);

  useEffect(() => {
    dispatch(fetchQuestions());
  }, []);

  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal">
          StackOverflow recent questions
        </Menu>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}></Breadcrumb>
        <div className="site-layout-content">
          {questions ? (
            <div>
              {questions.items.map((question) => (
                <QuestionItem question={question} key={question.question_id} />
              ))}
            </div>
          ) : (
            <LoadingSpinner />
          )}
        </div>
      </Content>
      {questions && <CustomPagination />}
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
