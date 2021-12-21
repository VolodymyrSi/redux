import parse from 'html-react-parser';


export const AnswerItem = ({ data }) => {
  return (
    <>
      <div>A single answer</div>
      <img src={data.owner.profile_image} />
      <p>{data.owner.display_name}</p>
      <p>{parse(data.body)}</p>
      <p>likes: {data.up_vote_count}</p>
    </>
  );
};
