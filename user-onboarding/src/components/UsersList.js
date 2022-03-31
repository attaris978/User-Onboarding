const UsersList = (props) => {
  const { users } = props;
  return (
    <>
      {users.map((user) => {
        return <h4>{user.name}</h4>;
      })}
    </>
  );
};
export default UsersList;
