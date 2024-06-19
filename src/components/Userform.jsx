import './styles/userForm.css'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'


const Userform = ({createUser, update, updateUser, setUpdate, shown, setShown}) => {

    const {handleSubmit,register,reset} = useForm();

    useEffect(() => {
      reset(update);
    }, [update]);
    

    const submit = (data) => {
        if (update) {
            updateUser('/users', update.id, data);
            setUpdate();
        }   else {
            createUser('/users', data);
        }
        reset({
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            birthday: '',
        });
        setShown(false);
    }

    const handleClose = () => {
        reset({
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            birthday: '',
        });
        setShown(false);
        setUpdate();
    }

  return (
    <div className={`userForm ${shown && 'active'}`}>
        <form className='userForm_form' onSubmit={handleSubmit(submit)}>
            <div className='userForm_header'>
            <h2>
                {
                   update ?
                        'Edit User'
                        :
                        'New User'
                }
            </h2> 
            <button onClick={handleClose} className='userForm_close' type='button'>X</button>
            </div>
            <div className='userForm_item'>
                <label htmlFor="first_name">First name </label>
                <input {...register('first_name')} id='first_name' type="text" />
            </div>
            <div className='userForm_item'>
                <label htmlFor="last_name">Last name </label>
                <input {...register('last_name')}  id='last_name' type="text" />
            </div>
            <div className='userForm_item'> 
                <label htmlFor="email">Email </label>
                <input {...register('email')}  id='email' type="email" />
            </div>
            <div className='userForm_item'>
                <label htmlFor="password">Password </label>
                <input {...register('password')}  id='password' type="password" />
            </div>
            <div className='userForm_item'>
                <label htmlFor="birthday">Birthday </label>
                <input {...register('birthday')}  id='birthday' type="date" />
            </div>
            <button className='userForm_btn'>
                {
                    update ?
                        'Update user'
                        :
                        'Add new user'
                }
            </button>
        </form>
    </div>
  )
}

export default Userform