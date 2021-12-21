import { LoadingOutlined } from "@ant-design/icons";

const LoadingSpinner = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 60,
      }}
    >
      <LoadingOutlined />
    </div>
  );
};

export default LoadingSpinner;
