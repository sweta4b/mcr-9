import { createContext, useContext, useState } from "react";
import { categories } from "../Data/Categories";
import { videos } from "../Data/Videos";

export const VideoContext = createContext();

export default function VideoProvider ({children}) {

    const [videoCategory, setVideoCategory] = useState(categories);
    const [selectedVideo, setSelectedVideo] = useState(videos);
    const [watchLater, setWatchLater] = useState([]);
    const [playlist, setPlaylist] = useState([]);

    


    const handleWatchLater = (video) => {
        if(watchLater.includes(video)){
            removeFromWatchLater(video)
        }else{
            addToWatchLater(video)
        }
        // setIsAdded(!isAdded)
    }


    function removeFromWatchLater(video){
        setWatchLater((watchLater) => watchLater.filter((videos) => videos._id !== video._id))
    }

    

    function addToWatchLater(video ){ 
        setWatchLater((watchLater) => [...watchLater, video]); 
    }


    return (
        <VideoContext.Provider value={{
           videoCategory,
           selectedVideo,
           handleWatchLater,
           removeFromWatchLater,
           setVideoCategory,
           setSelectedVideo,
           watchLater
        }}>
            {children}
        </VideoContext.Provider>
    )
}

export const useVideos = () => useContext(VideoContext);