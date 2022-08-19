import React, { useEffect, useState } from 'react';
import './App.css';
import UserTable from './components/User/UserTable';
import { UserEntity } from './model/User';
function App() {
  const [users, setUsers] = useState<UserEntity[]>([]);
  useEffect( () => {
    loadPlaceholderUsers();
  }, []);

  const loadPlaceholderUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users : UserEntity[] = await response.json();
    setUsers(users);
  }
  return (
    <div className="App">
      <UserTable users={users} />
      <div>
        <button>Clear</button>
      </div>
    </div>
  );
}

export default App;
