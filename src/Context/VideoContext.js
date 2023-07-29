import { createContext, useContext, useState } from "react";
import { categories } from "../Data/Categories";
import { videos } from "../Data/Videos";

export const VideoContext = createContext();

export default function VideoProvider ({children}) {

    const [videoCategory, setVideoCategory] = useState(categories);
    const [selectedVideo, setSelectedVideo] = useState(videos);
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [watchLater, setWatchLater] = useState([]);
    const [playlist, setPlaylist] = useState([{
        title:"",
        description:"",
    }]);

    const addTitle = (event) => {
        setTitle(event.target.value);
    }

    const addDescription = (event) => {
        setDescription(event.target.value);
    }

    const createPlaylist = () => {
       setPlaylist((playlist) => [...playlist, {
        title:title,
        description:description 
          }])
    }

    const handleWatchLater = (video) => {
        if(watchLater.includes(video)){
            removeFromWatchLater(video)
        }else{
            addToWatchLater(video)
        }
    }


    function removeFromWatchLater(video){
        setWatchLater((watchLater) => watchLater.filter((videos) => videos._id !== video._id))
    }

    function addToWatchLater(video ){ 
        setWatchLater((watchLater) => [...watchLater, video]); 
    }


    return (
        <VideoContext.Provider value={{
            playlist,
            addTitle,
            addDescription,
            createPlaylist,
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