import './Header.css';

import { Link, useNavigate } from 'react-router-dom';
// access state to get the user
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../../features/auth/authSlice';

export default function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth); // define which part of the state we want this from, the auth


  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());

    navigate('/');

  }

  return (
    <header className="App-header">
        <div className="title">cheermi</div>
        <div>
          {user ? (<Link to='/login'>
            <button className="login-button" onClick={onLogout}>Log Out</button>{' '}
            </Link>) : (<>
            <Link to='/login'>
            <button className="login-button">Log In</button>{' '}
            </Link>
            <Link to='/register'>
                <button className="register-button">Register</button>{' '}
            </Link>
            </>
          )}
        </div>
    </header>
  )
}

