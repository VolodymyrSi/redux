import "antd/dist/antd.css";
import { Pagination, Select } from "antd";
import { fetchQuestions } from "../../ApiRequests/questionsApi";
import { useDispatch, useSelector } from "react-redux";
import { Option } from "antd/es/mentions";

const CustomPagination = () => {
  const dispatch = useDispatch();

  const questionsNumber = useSelector((state) => state.questions.items.total);

  const handleChange = (page, pageSize, sort) => {
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
        defaultCurrent={1}
        onChange={handleChange}
        pageSizeOptions={[5, 10, 15, 20]}
      />
      <Select
        defaultValue="activity"
        style={{ width: 120, marginLeft: 10 }}
        onChange={handleChange}
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
