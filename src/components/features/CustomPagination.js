import "antd/dist/antd.css";
import { Pagination, Select } from "antd";
import { fetchQuestions } from "../../api/questionsApi";
import { useDispatch, useSelector } from "react-redux";
import { Option } from "antd/es/mentions";
import {
  setCurrentPage,
  setQuestionsPerPage,
} from "../../store/questionsReducer";
import {
  DEFAULT_ITEMS_PER_PAGE,
  DEFAULT_PAGE,
  PAGE_SIZE_OPTIONS,
} from "../../constants";

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
        defaultPageSize={DEFAULT_ITEMS_PER_PAGE}
        pageSize={pageSize}
        defaultCurrent={DEFAULT_PAGE}
        onChange={handleChange}
        current={currentPageNumber}
        pageSizeOptions={PAGE_SIZE_OPTIONS}
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
