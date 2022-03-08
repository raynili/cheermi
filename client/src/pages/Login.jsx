import '../App.css';

import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
// useSelector is to select something from the initial state, to bring in i.e user, isloading
// useDispatch to use a function like register or asyncthunk
import { login, reset } from '../features/auth/authSlice';
import Spinner from '../components/Spinner';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const {email, password} = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth)

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess || user) {
      navigate('/');
    }

    // reset the state after checking everything
    dispatch(reset()); 

  }, [user, isError, isSuccess, message, navigate, dispatch]); // [] is a dependency array, it will fire off if any of it changes

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
    // parentheses then curly braces, setting form data to an object
  }

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    dispatch(login(userData));
  }

  if (isLoading) {
    return <Spinner />
  }

  return (
    <div className="page">
      <section className="heading">
        <h1>
          Login
        </h1>
        <p>Login here to view your dashboard</p>
      </section>

      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input 
              type="email" 
              className="form-control" 
              id='email' 
              name='email'
              value={email} 
              placeholder='Enter your email' 
              onChange={onChange}
            />
          </div>

          <div className="form-group">
            <input 
              type="password" 
              className="form-control" 
              id='password'
              name='password' 
              value={password} 
              placeholder='Enter your password' 
              onChange={onChange}
            />
          </div>

          <div className="form-group">
            <button type="submit" className='btn btn-block'>
              Submit
            </button>
          </div>
        </form>
      </section>
    </div>
  )
}

export default Login