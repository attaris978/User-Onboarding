import './App.css';
import Form from './components/Form';
import {useState} from 'react';
import UsersList from './components/UsersList';

function App() {
const [users,setUsers] = useState([{name:"firstName",email:"first@email.com"}]);

const addUser = (user) => {
  setUsers([...users,user]);
}

  return (
    <>
    <Form addUser={addUser}/>
    <UsersList users={users} />
    </>
  );
}

export default App;
