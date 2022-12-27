import Link from "next/link";

const Post = ({ post }) => {
  return (
    <div className="card mt-10 bg-base-100 shadow-xl">
      <div className="card-body items-center text-center">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions">
          <Link href={`/posts/${post?.id}`}>
            <button className="btn btn-primary">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Post;
