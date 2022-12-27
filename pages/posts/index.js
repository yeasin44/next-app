import Post from "../../Components/Post";

const Posts = ({ posts }) => {
  console.log(posts);
  return (
    <div>
      The number post is {posts.length}
      {posts.map((post) => (
        <Post post={post}></Post>
      ))}
    </div>
  );
};

export default Posts;

export const getStaticProps = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10"
  );
  const data = await res.json();

  return {
    props: {
      posts: data,
    },
  };
};
