import { Component } from 'react';
import axios from 'axios';
import 'semantic-ui-css/semantic.min.css'
import { Container, Divider, Icon } from 'semantic-ui-react'
import NavBar from './NavBar/NavBar';
import Comments from './Comments/Comments';
/*import RecommendedVideos from './RecommendedVideos/RecVideos';*/
import SearchBar from './SearchBar/SearchBar'; 
import { apikey } from '../apikey';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      videoId: 'MRIMT0xPXFI',
      videoTitle: '',
      videoDescription: '',
    }
  }

  componentDidMount() {
  }


  render() {
    console.log(apikey)
    return (
    <div>
      <Container>
      <Divider />
      <NavBar/>
      <SearchBar/>
      <h1>Youtube Clone <Icon name='video' size='small' /></h1>
      <Divider />
      <h1>{this.state.videoTitle}</h1>
      <iframe className="iframe" title="title" id="ytplayer" type="text/html" width="640" height="360"
        src={`https://www.youtube.com/embed/${this.state.videoId}?`}
          frameBorder="0"><br/>
      </iframe>
      <h3>{this.state.videoDescription} Video Description Goes here</h3>
      <Comments/>
      </Container>
    </div>
    )
  }
}

export default App;
