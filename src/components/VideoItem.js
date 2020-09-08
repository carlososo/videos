import './VideoItem.css'
import React from "react";

const VideoItem = ({ video, onVideoSelect }) => {

    
  return (
    <div onClick={()=>onVideoSelect(video)} className='item video-item'>
      <img
        className='ui image'
        key={video.id}
        src={video.snippet.thumbnails.default.url}
        alt={video.snippet.title}
      />
      <div className='content'>
        <div className='header'>{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
