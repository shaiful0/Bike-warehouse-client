import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import {Link, useNavigate} from 'react-router-dom'
import auth from '../../firebase.init';

const SignUp = () => {
  const [signInWithGoogle, googleuUser, googleLoading, googleError] = useSignInWithGoogle(auth);
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const { register, formState: { errors }, handleSubmit } = useForm();


  const onSubmit = (data) =>{
    // console.log(data);
    createUserWithEmailAndPassword(data.email, data.password);
    navigate('/');
  }
  
  return (
    <div className='flex justify-center items-center h-screen'>
    <div class="card w-96 bg-base-100 shadow-2xl">
      <div class="card-body items-center text-center">
        <h2 class="card-title font-bold text-3xl">Please Sign Up</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div class="form-control w-full max-w-xs">
            <label class="label">
              <span class="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Type here your name "
              class="input input-info w-96 max-w-xs"
              {...register("test",
                {
                  required: {
                    value: true,
                    message: 'Name is required'
                  }
                })}
            />
            <label class="label">
              {errors.test?.type === 'required' &&  <span class="label-text-alt text-red-600">{errors.test.message}</span>}
            </label>
          </div>
          <div class="form-control w-full max-w-xs">
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Type here Email"
              class="input input-info w-96 max-w-xs"
              {...register("email",
                {
                  required: {
                    value: true,
                    message: 'Email is required'
                  },
                  pattern: {
                    value: /[A-Za-z]{3}/,
                    message: 'Provide a valid email'
                  }
                })}
            />
            <label class="label">
              {errors.email?.type === 'required' &&  <span class="label-text-alt text-red-600">{errors.email.message}</span>}
              {errors.email?.type === 'pattern' &&  <span class="label-text-alt text-red-600">{errors.email.message}</span>}
            </label>
          </div>
          <div class="form-control w-full max-w-xs">
            <label class="label">
              <span class="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Type here password"
              class="input input-bordered input-info w-full max-w-xs"
              {...register("password",
                {
                  required: {
                    value: true,
                    message: 'password is required'
                  },
                  minLength:{
                    value: 6,
                    message:'Must 6 characters or longer'
                  }
                })}
            />
            <label class="label">
              {errors.password?.type === 'required' &&  <span class="label-text-alt text-red-600">{errors.password.message}</span>}
              {errors.password?.type === 'MinLength' &&  <span class="label-text-alt text-red-600">{errors.password.message}</span>}
            </label>
          </div>
          <input className='btn btn-wide btn-success btn-outline' type="submit" value="Sign Up" />
        </form>
        <p>Already have an account please <Link to='/login'><span className='text-green-600'>Sign in</span></Link></p>
        <div class="divider">OR</div>
        <button 
        onClick={()=> signInWithGoogle()} class="btn btn-wide btn-success btn-outline">Sign in with Google</button>
      </div>
    </div>
  </div>
  );
};

export default SignUp;