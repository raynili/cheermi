import './App.css';
import Share from "./components/share/Share";
import Feed from './components/feed/Feed';
import RightSidebar from './components/sidebar/RightSidebar';
//import './custom.scss';
//import Button from 'react-bootstrap/Button';

import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <div className="App-header">
          <div className="title">cheermi</div>
          <button className="log-in-button">Log In</button>{' '}
        </div>
        <div className="homeContainer">
          <Share />
          <Feed />
          <RightSidebar />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
