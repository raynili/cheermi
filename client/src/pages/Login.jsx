import '../App.css';

import { useState, useEffect } from 'react';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const {email, password} = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
    // parentheses then curly braces, setting form data to an object
  }

  const onSubmit = (e) => {
    e.preventDefault();
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