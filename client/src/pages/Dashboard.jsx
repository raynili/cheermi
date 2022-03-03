import '../App.css';

import Header from '../components/header/Header';
import Share from "../components/share/Share";
import Feed from '../components/feed/Feed';
import RightSidebar from '../components/sidebar/RightSidebar';

import { GlobalProvider } from '../context/GlobalState';

export default function Dashboard() {
  return (
    <GlobalProvider>
        <div className="App">
          <Header />
          <div className="homeContainer">
            <Share />
            <Feed />
            <RightSidebar />
          </div>
        </div>
      </GlobalProvider>
  )
}