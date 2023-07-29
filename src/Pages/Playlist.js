import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'
import { useVideos } from '../Context/VideoContext';
import AddCircleIcon from '@mui/icons-material/AddCircle';

function Playlist() {
    const { playlists, addPlaylist, removePlaylist, removeVideoFromPlaylist } = useVideos();

    // Local state to handle new playlist name input
    const [newPlaylistName, setNewPlaylistName] = useState('');
  
    // Load playlists data from localStorage when the component mounts
    useEffect(() => {
      const persistedData = localStorage.getItem('playlistsData');
      if (persistedData) {
        // setPlaylists(JSON.parse(persistedData));
      }
    }, []);
  
    // Save playlists data to localStorage whenever playlists change
    useEffect(() => {
      localStorage.setItem('playlistsData', JSON.stringify(playlists));
    }, [playlists]);
  
    const handleCreatePlaylist = () => {
      // Logic to create a new playlist with the entered name
      addPlaylist(newPlaylistName);
      setNewPlaylistName('');
    };
  
    const handleDeletePlaylist = (playlistId) => {
      // Logic to delete a playlist
      removePlaylist(playlistId);
    };
  
    const handleRemoveVideoFromPlaylist = (playlistId, videoId) => {
      // Logic to remove a video from a playlist
      removeVideoFromPlaylist(playlistId, videoId);
    };
  
    return (
        <>
        <Header/>
        <Sidebar/>
        <div>
      {/* Display all playlists with names and videos */}
      {playlists && playlists.map((playlist) => (
        <div key={playlist.id}>
          <h2>{playlist.name}</h2>
          {/* Display videos in the playlist */}
          <ul>
            {playlist.videos.map((video) => (
              <li key={video.id}>
                {video.title}{' '}
                <button onClick={() => handleRemoveVideoFromPlaylist(playlist.id, video.id)}>
                  Remove from playlist
                </button>
              </li>
            ))}
          </ul>
          {/* Button to delete the playlist */}
          <button onClick={() => handleDeletePlaylist(playlist.id)}>Delete Playlist</button>
        </div>
      ))}

      {/* Form to create a new playlist */}
      <div style={{
        display:'block',
        margin:'auto',
        marginTop:'50px'
      }}>
        <AddCircleIcon/>
        <h4>Create playlist</h4>
      </div>
    </div>
        </>
    )
}

export default Playlist


