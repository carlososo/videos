import React, {useState, useEffect} from 'react';
import SearchBar from  './SearchBar'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'
import useVideos from '../hooks/useVideos'
// const KEY ='AIzaSyAFl3T4fkExgnE0P8f8lYU7IfccTnTYv5A'

const App =()=>{

    const [videos, search]=useVideos('ReactJS')
    const [selectedVideos, setSelectedVideos]=useState(null);

    useEffect(()=>{
        setSelectedVideos(videos[0])
    },[videos])
    
    

    
        


    return (
      <div className="ui container">
        <SearchBar onTermSubmit={search} />
        <div className="ui grid">
          <div className="ui row">
            <div className=" eleven wide column">
              <VideoDetail video={selectedVideos} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={setSelectedVideos}
                videos={videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
};


export default App;