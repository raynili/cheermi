import './Header.css';

import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="App-header">
        <div className="title">cheermi</div>
        <Link to='/login'>
            <button className="login-button">Log In</button>{' '}
        </Link>
        <Link to='/register'>
            <button className="register-button">Register</button>{' '}
        </Link>
    </header>
  )
}

