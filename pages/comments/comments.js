const comments = ({ comments }) => {
  console.log(comments);
  return <div></div>;
};

export default comments;
export const getServerSideProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/comments");
  const data = await res.json();

  return {
    props: {
      comments: data,
    },
  };
};
