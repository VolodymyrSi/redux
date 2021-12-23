import "antd/dist/antd.css";
import { Pagination, Select } from "antd";
import { fetchQuestions } from "../../api/questionsApi";
import { useDispatch, useSelector } from "react-redux";
import { Option } from "antd/es/mentions";
import {
  setCurrentPage,
  setQuestionsPerPage,
} from "../../store/questionsReducer";

const CustomPagination = () => {
  const dispatch = useDispatch();

  const questionsNumber = useSelector((state) => state.questions.items.total);
  const currentPageNumber = useSelector((state) => state.questions.currentPage);
  const pageSize = useSelector((state) => state.questions.questionsPerPage);

  const handleChange = (page, pageSize, sort) => {
    dispatch(setCurrentPage(page));
    dispatch(setQuestionsPerPage(pageSize));
    dispatch(fetchQuestions(page, pageSize, sort));
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Pagination
        style={{ textAlign: "center" }}
        total={questionsNumber}
        showTotal={(total, range) =>
          `${range[0]}-${range[1]} of ${total} items`
        }
        defaultPageSize={20}
        pageSize={pageSize}
        defaultCurrent={1}
        onChange={handleChange}
        current={currentPageNumber}
        pageSizeOptions={[5, 10, 15, 20]}
      />
      <Select
        defaultValue="activity"
        style={{ width: 120, marginLeft: 10 }}
        onChange={(value) => handleChange(1, pageSize, value)}
      >
        <Option value="activity">Activity</Option>
        <Option value="votes">Votes</Option>
        <Option value="creation">Creation</Option>
        <Option value="hot">Hot</Option>
        <Option value="week">Week</Option>
        <Option value="month">Month</Option>
      </Select>
    </div>
  );
};

export default CustomPagination;
