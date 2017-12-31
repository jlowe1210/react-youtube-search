import React from 'react';
import VideoItem from '../VideoItem/videoitem'


export default function VideoList(props){
    const {videolist, changeVid} = props
    let videos = <p>Loading</p>;
    if(videolist && videolist.length !== 0){
        videos = 
        <ul className='col-md-4 list-group'>
            {videolist.map(video => <VideoItem key={video.etag} title={video.snippet.title} src={video.snippet.thumbnails.default.url}  changeVid={changeVid} video={video} />)}
        </ul>
    }else{
        videos = <p>No Videos found</p>
    }
    return(
       <div>
           {videos}
        </div>
    )
}