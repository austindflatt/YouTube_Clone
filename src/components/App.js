import 'semantic-ui-css/semantic.min.css'
import NavBar from './NavBar/NavBar';
import RecommendedVideos from './RecommendedVideos/RecVideos';
import SearchBar from './SearchBar/SearchBar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="Container">
      <NavBar />
      <SearchBar />
    </div>
      </div>
  );
}

export default App;
