import React from 'react';

export default function VideoItem(props){
    return (
        <li onClick={() => props.changeVid(props.video)} className='list-group-item'>
            <div className='video-list media'>
                <div className='media-left'>
                    <img className='media-object' src={props.src} width="120" height="90" alt='' />
                </div>
                <div className='media-body'>
                    <div className='media-heading'>
                        {props.title}
                    </div>
                </div>
            </div> 
        </li>
    )
}