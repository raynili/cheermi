import '../App.css';

import Share from "../components/share/Share";
import Feed from '../components/feed/Feed';
import RightSidebar from '../components/sidebar/RightSidebar';

import { GlobalProvider } from '../context/GlobalState';

export default function Dashboard() {
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