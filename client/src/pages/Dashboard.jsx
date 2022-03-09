import '../App.css';

import Share from "../components/share/Share";
import Feed from '../components/feed/Feed';
import RightSidebar from '../components/sidebar/RightSidebar';

import { GlobalProvider } from '../context/GlobalState';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Dashboard() {
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate('/login'); // if not logged in, redirect to login page
    }
  }, [user, navigate]);

  return (
    <GlobalProvider>
        <div className="App">
          <div className="homeContainer">
            <Share />
            <Feed />
            <RightSidebar />
          </div>
        </div>
      </GlobalProvider>
  )
}