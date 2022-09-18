import React from 'react';
import auth from '../../firebase.init';
import './SignUp.css'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import {useNavigate} from 'firebase/auth'


const SignUp = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    if(user){
        console.log(user);
    }
    return (
        <div>
            <form>
            <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Sign Up Now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        {/* <div className="form-control mt-6">
          <input type="submit" value='Sign Up' className="btn btn-primary"/>
        </div>
        <button className='btn'>Sign Up with<span className='g'> G</span><span className='o-1'>O</span><span className='o-2'>O</span><span className='g-2'>G</span><span className='l'>L</span><span className='e'>E</span></button> */}
        <div class="flex flex-col w-full border-opacity-50">
        <div className="form-control mt-6">
          <input type="submit" value='Sign Up' className="btn btn-primary"/>
        </div>
  <div class="divider">OR</div>
  <button onClick={() => signInWithGoogle()} className='btn'>Sign Up with<span className='g'> G</span><span className='o-1'>O</span><span className='o-2'>O</span><span className='g-2'>G</span><span className='l'>L</span><span className='e'>E</span></button>
</div>
      </div>
    </div>
  </div>
</div>
<div>
    
</div>
            </form>
        </div>
    );
};

export default SignUp;