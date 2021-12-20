export const AnswerItem = ({ data }) => {
  return (
    <>
      <div>A single answer</div>
      <div>{data.owner.display_name}</div>
    </>
  );
};
