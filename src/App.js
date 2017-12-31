import React, { Component } from 'react';
import axios from 'axios'
import Search from './Search/search'
import Video from './Video/video'
import VideoList from './VideoList/videolist';
import VideoDetail from './VideoDetails/videodetail';


class App extends Component {

  state = {
    videolist: null,
    selectedVid: null,
    videoDetails: {
      title: '',
      description: ''
    }
  }

  componentDidMount(){
   this.search('cats')
  }

  search = term => {
    axios.get('https://www.googleapis.com/youtube/v3/search', {
      params:{
        part: 'snippet',
        type: 'video',
        q: term,
        key: 'AIzaSyAR7jWuBvZqIX9ZriIotk4ZhcTIip8arSo'
      }
    }).then(({data}) =>{
      if(data.items.length === 0){
        this.setState({
          videolist: [],
          selectedVid: 'TetN3li3Lfg',
          videoDetails: {
            title: '',
            description: ''
          }
        })
      }else{
      this.setState({
        videolist: data.items,
        selectedVid: data.items[0].id.videoId,
        videoDetails: {
          title: data.items[0].snippet.title,
          description: data.items[0].snippet.description
        }
      });
    }
    })
  }

  changeVid = vidId =>{
    const id = vidId.id.videoId;
    const videodetails = {
      title: vidId.snippet.title,
      description: vidId.snippet.description
    }

    this.setState({
      selectedVid: id,
      videoDetails: videodetails
    })  
  }

  render() {
    return (
      <div className="App">
        <Search search={this.search} time={600} />
        <Video selectedVid={this.state.selectedVid}>
          <VideoDetail {...this.state.videoDetails} />
        </Video>
        <VideoList videolist={this.state.videolist} changeVid={this.changeVid} />
      </div>
    );
  }
}

export default App;
