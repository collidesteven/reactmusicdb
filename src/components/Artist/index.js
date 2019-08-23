import React from 'react';
import axios from 'axios';
import AlbumList from './albumList';


const REQ_URL = 'http://localhost:3004/artists';

class Artist extends React.Component{

state = {
  artist: ''
}

  componentDidMount(){
      axios.get(`${REQ_URL}/${this.props.match.params.artistid}`)
      .then(response => (
        this.setState({artist: response.data})
      ))
  }

  render(){

    const artistData = this.state.artist;

        return(
          <>
            <div className="artist_bio">
              <div className="avatar">
                <span style={{background: `url('/images/covers/${artistData.cover}.jpg') no-repeat`}}></span>
              </div>
              <div className="bio">
                <h3>{artistData.name}</h3>
                <div className="bio_text">{artistData.bio}</div>
                <AlbumList albumList={artistData.albums}/>
              </div>
            </div>
          </>
        )
  }
}

export default Artist;
