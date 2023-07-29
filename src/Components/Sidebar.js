import React from 'react'
import { NavLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ExploreIcon from '@mui/icons-material/Explore';

function Sidebar() {
    const getStyles = ({ isActive }) => ({
        
        color: isActive ? 'skyblue' : 'black',
        textDecoration: 'none'
      });
    return (
        <div>
        <div className='sidenav'>
            <ul className='navlist' >
                <li ><NavLink to="/" style={getStyles}>  < HomeIcon/> Home</NavLink></li>
                
                <li ><NavLink to="/playlist" style={getStyles}>  < PlaylistAddIcon/> Playlists</NavLink></li>
                
                <li ><NavLink to="/explore"style={getStyles}><ExploreIcon/> Explore</NavLink></li>
                
                <li ><NavLink to="/watchlater"style={getStyles}>< WatchLaterIcon/> WatchLater</NavLink></li>
                
            </ul>
        </div>
        </div>
    )
}

export default Sidebar
