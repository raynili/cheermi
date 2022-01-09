import './App.css';
import Share from "./components/share/Share";
import Feed from './components/feed/Feed';
import RightSidebar from './components/sidebar/RightSidebar';

function App() {
  return (
    <div className="App">
      <div className="App-header">cheermi</div>
      <div className="homeContainer">
        <Share />
        <Feed />
        <RightSidebar />
      </div>
    </div>
  );
}

export default App;
