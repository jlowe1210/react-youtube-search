import React from 'react';


export default function Video(props) {
    const url = `https://www.youtube.com/embed/${props.selectedVid}`
    return(
        <div className='video-detail col-md-8'>
            <div className='embed-responsive embed-responsive-16by9'>
                <iframe className='embed-responsive-item' width="560" title={props.selectedVid} height="315" src={url} frameBorder="0" gesture="media" allow="encrypted-media" allowFullScreen></iframe>
            </div>
             {props.children}
        </div>
    )
}