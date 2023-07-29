import React, { useState } from 'react'
import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'
import { useVideos } from '../Context/VideoContext';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Backdrop, Box, Button, Card, CardContent, CardMedia, Container, Fade, Grid, Modal, Typography } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    display:'flex',
    flexDirection:'column',
    gap:'20px',
    p: 4,
  };

function Playlist() {
    const [showPlaylist, setShowPlaylist] = useState(false);
    const { playlist, addTitle, addDescription, createPlaylist  } = useVideos();

    
    return (
        <>
        <Header/>
        <Sidebar/>
        <div>
      {/* Display all playlists with names and videos */}
      <Container sx={{ py: 8 }} maxWidth="lg">
        
        <Grid container spacing={4}>
      {
        playlist.map((playlist) => (
            (
                <Grid item key={playlist._id} xs={12} sm={6} md={3}>
                <Card 
                  sx={{ height: "100%", display: "flex", flexDirection: "column" }}
                >
                  <CardMedia 
                    component="img"
                    sx={{
                      alignSelf: "center",
                      // width: theme.spacing(30),
                      // height: theme.spacing(30),
                      objectFit: "contain",
                      // pt: theme.spacing(),
                    }}
                    image={playlist.thumbnail}
                    src={playlist.src ? playlist.src : "https://i.ytimg.com/vi/D6QM3Xed2J0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAf7CiFYfUks7dtieegGd3O_eK1hg"}  
                  />
                  <CardContent>
                  <Typography
                      variant="h5"
                      component="h2"
                      gutterBottom
                      sx={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "-webkit-box",
                        WebkitLineClamp: "1",
                        WebkitBoxOrient: "vertical",
                      }}
                    >
                      {playlist.title ? playlist.title : 'New Playlist'}
                    </Typography>
                    <Typography
                      variant="h6"
                      component="h4"
                      gutterBottom
                      sx={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "-webkit-box",
                        WebkitLineClamp: "1",
                        WebkitBoxOrient: "vertical",
                      }}
                    >
                      {playlist.description ? playlist.description : "All new Songs"}
                    </Typography>
                    
                    </CardContent>
                </Card>
              </Grid>
            )
        ))
      }

     

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={showPlaylist}
        onClose={() => setShowPlaylist(!showPlaylist)}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={showPlaylist}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Add To Playlist
            </Typography>
            <input placeholder='Enter title of the playlist'onChange={(event) => addTitle(event)}/>
            <input placeholder='Write a description'onChange={(event) => addDescription(event)}/>
            <Button variant="contained" onClick={() => {createPlaylist(); setShowPlaylist(!showPlaylist)}}>Create New Playlist</Button>
          </Box>
        </Fade>
      </Modal>

      <div style={{
        display:'block',
        margin:'auto',
        marginTop:'50px'
      }}>
        <AddCircleIcon onClick={() => setShowPlaylist(!showPlaylist)}/>
        <h4>Create playlist</h4>
      </div>
      </Grid>
      </Container>
    </div>

        </>
    )
}

export default Playlist


