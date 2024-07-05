import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../hooks/useAuth';

const Register = () => {

  
  const {handleSubmit, register, reset} = useForm();
  
  const submit = data => {
    useAuth('/users', data);
    reset({
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      phone: "",
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input {...register('firstName')} id='firstName' type="text" />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input {...register('lastName')} id='lastName' type="text" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input {...register('email')} id='email' type="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input {...register('password')} id='password' type="password" />
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input {...register('phone')} id='phone' type="number" />
        </div>
        <button>submit</button>
      </form>
    </div>
  )
}

export default Register;