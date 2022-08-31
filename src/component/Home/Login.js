import React from 'react';
import { useForm } from "react-hook-form";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import {Link, useNavigate, useLocation} from 'react-router-dom'
import auth from '../../firebase.init';

const Login = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate()
  const location = useLocation()
  let from = location.state?.from?.pathname || "/";
  const { register, formState: { errors }, handleSubmit } = useForm();

  if(googleUser){
    navigate(from,{replace:true});
  }

  const onSubmit = data =>{
    console.log(data);
    signInWithEmailAndPassword(data.email, data.password);
    navigate('/')
  }


  return (
    <div className='flex justify-center items-center h-screen '>
      <div class="card w-96 bg-base-100 shadow-2xl">
        <div class="card-body items-center text-center">
          <h2 class="card-title font-bold text-3xl">Sign in</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
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
            <input className='btn btn-wide btn-success btn-outline' type="submit" value="Sign in" />
          </form>
          <p>New to website <Link to='/signUp'><span className='text-green-600'>SignUp</span></Link></p>
          <div class="divider">OR</div>
          <button
          onClick={()=>signInWithGoogle()}
          class="btn btn-wide btn-success btn-outline">Sign in with Google</button>
        </div>
      </div>
    </div>
  );
};

export default Login;