import React from 'react';
import axios from 'axios';
import Banner from './banner';
import ArtistsList from './artistsList'

const URL_ARTIST = 'http://localhost:3004/artists';

class Home extends React.Component{

  state = {
    artists:''
  }

  componentDidMount(){
    axios.get(URL_ARTIST)
    .then((response)=>{this.setState({artists:response.data})
    })

  }

  render(){

    return(
      <>
        <Banner/>
        <ArtistsList allArtists = {this.state.artists}/>
        <div>Home Class</div>
      </>
    )
  }
}






export default Home;
