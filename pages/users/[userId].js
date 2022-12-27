import { useRouter } from "next/router";

const UserDetails = ({ user }) => {
  const router = useRouter();

  const handleBack = () => {
    router.push("/users");
  };
  return (
    <div className="card  bg-primary text-primary-content">
      <div className="card-body">
        <h2 className="card-title">{user?.name}</h2>
        <p>{user?.email}</p>
        <div className="card-actions justify-end">
          <button onClick={handleBack} className="btn">
            Back To Users
          </button>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params?.userId}`
  );
  const data = await res.json();
  return {
    props: {
      user: data,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  const paths = users?.map((user) => {
    return {
      params: {
        userId: `${user.id}`,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export default UserDetails;
