import './App.css';
import Feed from './components/feed/Feed';
import Menu from './components/menu/Menu';
import Circles from './components/circles/Circles';

function App() {
  return (
    <div className="App">
      <div className="App-header">cheermi</div>
      <div className="homeContainer">
        <Menu />
        <Feed />
        <Circles />
      </div>
    </div>
  );
}

export default App;
