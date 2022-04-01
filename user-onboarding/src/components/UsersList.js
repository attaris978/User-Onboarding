const UsersList = (props) => {
  const { users } = props;
  return (
    <>
      {users.map((user) => {
        return <h4>{user.name} {user.email}</h4>;
      })}
    </>
  );
};
export default UsersList;
