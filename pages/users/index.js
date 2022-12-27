import User from "../../Components/User";

const Users = ({ users }) => {
  console.log(users);
  return (
    <div>
      {users?.map((user) => (
        <User user={user}></User>
      ))}
    </div>
  );
};

export default Users;

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: {
      users: data,
    },
  };
};
