import React from 'react'
import {  useNavigate } from 'react-router-dom';
import { useVideos } from '../Context/VideoContext'

function MoreVideo() {
    const {selectedVideo} = useVideos();
    const navigate = useNavigate()
    return (
        <div style={{marginRight:'20px'}}>
        <div style={{display:'flex', flexDirection:'column', gap:'20px' , width:'500px'}}>
            <h2 style={{textAlign:'left'}}>More Videos:</h2>
           {
            selectedVideo.map((video) => (
                <div key={video._id} onClick={() => navigate(`/videos/${video._id}`)}
                style={{
                    display:'flex',
                    gap:'20px'
                }} 
                >
                    <img src={video.thumbnail} style={{width:'200px',}}></img>
                    <div style={{textAlign:'left', color:'skyblue'}}>
                    <p><b>{video.title}</b></p>
                    <p><b>{video.creator}</b></p>
                    </div>
                </div>
            ))
           }
        </div>
        </div>
    )
}

export default MoreVideo
