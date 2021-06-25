import { Component } from 'react';
import 'semantic-ui-css/semantic.min.css'
import NavBar from './NavBar/NavBar';
/*import RecommendedVideos from './RecommendedVideos/RecVideos';*/
import SearchBar from './SearchBar/SearchBar'; 
import { apikey } from '../apikey';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }
  render() {
    console.log(apikey)
    return (
    <div>
      <NavBar/>
      <SearchBar/>
    </div>
    )
  }
}

export default App;
