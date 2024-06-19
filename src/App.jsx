
import { useEffect, useState } from 'react';
import './App.css'
import useCRUD from './hooks/useCRUD'
import UserCard from './components/UserCard';
import Userform from './components/Userform';

function App() {

  const [update, setUpdate] = useState();

  const [shown, setShown] = useState(false);

  const [users, getUsers, createUser, deleteUser, updateUser] = useCRUD();

  useEffect(() => {
   getUsers('/users');
  }, [])
  
  /* console.log(users); */

  const handleForm = () => {
    setShown(true)
  }
  
  return (
    <div className='app'>
      <div className='app_header'>
        <h1 className='app_header-name'>CRUD Users</h1>
        <button className='app_header-btn' onClick={handleForm}> + Create User</button>
      </div>
      <Userform
        createUser={createUser} 
        update={update}
        updateUser={updateUser}
        setUpdate={setUpdate}
        shown={shown}
        setShown={setShown}
      />
      <div className='app_container'>
        {
          users?.map((user) => (
            <UserCard
              key={user.id}
              user={user}
              deleteUser={deleteUser}
              setUpdate={setUpdate}
              shown={shown}
              setShown={setShown}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
