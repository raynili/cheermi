import '../App.css';

import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
// useSelector is to select something from the initial state, to bring in i.e user, isloading
// useDispatch to use a function like register or asyncthunk
import { register, reset } from '../features/auth/authSlice';
import Spinner from '../components/Spinner';

// Get the state and dispatch to register()

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const {name, email, password, password2} = formData;

  // these are functions to call to navigate to diff route or dispatch to reducer
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

    if (password !== password2) {
      toast.error('Passwords do not match');
    } else {
      // Register user, by creating user object
      const userData = {
        name,
        email,
        password
      }

      dispatch(register(userData)); // empty thunkAPI field?
    }
  }

  if (isLoading) {
    return <Spinner />
  }

  return (
    <div className="page">
      <section className="heading">
        <h1>
          Register
        </h1>
        <p>Please create an account</p>
      </section>

      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input 
              type="text" 
              className="form-control" 
              id='name' 
              name='name'
              value={name} 
              placeholder='Enter your name' 
              onChange={onChange}
            />
          </div>

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
            <input 
              type="password" 
              className="form-control" 
              id='password2' 
              name='password2'
              value={password2} 
              placeholder='Confirm password' 
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

export default Register