import './styles/userCard.css';
import React from 'react';

const UserCard = ({user, deleteUser, setUpdate, shown, setShown}) => {
    const handleDelete = () => {
        deleteUser('/users', user.id);
    }

    const handleEdit = () => {
        setUpdate(user);
        setShown(true);
    }

    console.log(user)
  return (
   <article className='usercard'>
    <h2 className='usercard_name'>{user.first_name} {user.last_name} </h2>
    <hr />
    <ul className='usercard_list'>
        <li className='usercard_item'><span>Email: </span><span>{user.email}</span></li>
        <li className='usercard_item'><span>Birthday: </span><span>{user.birthday}</span></li>
    </ul>
    <hr />
    <div className='usercard_buttons'>
        <button className='usercard_btn delete' onClick={handleDelete}><i class='bx bx-trash'></i></button>
        <button className='usercard_btn edit' onClick={handleEdit}>Edit</button>
    </div>
   </article>
  )
}

export default UserCard