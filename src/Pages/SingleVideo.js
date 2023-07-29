import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import EditNoteIcon from '@mui/icons-material/EditNote';
import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';
import { useVideos } from '../Context/VideoContext';
import MoreVideo from '../Components/MoreVideo';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import EditNote from '../Components/EditNote';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    p: 4,
};

function SingleVideo() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [editNote, setEditNote] = useState(false);
    const [showPlaylist, setShowPlaylist] = useState(false);
    const { videoId } = useParams();
    const { selectedVideo, handleWatchLater, watchLater, addTitle,
        addDescription,
        createPlaylist, playlist } = useVideos();
    const [notes, setNotes] = useState("");
    const [noteData, setNoteData] = useState([])

    const handleClick = () => {
        setNoteData((noteData) => [...noteData, notes])
        handleClose();
    }




    const deleteNote = (noteindex) => {

        setNoteData((noteData) => noteData.filter((note, index) => index !== noteindex))
    }


    const video = selectedVideo.find((video) => video._id === Number(videoId));


    return (
        <div>
            {
                editNote && <EditNote editNote={editNote} setEditNote={setEditNote} notes={notes} setNotes={setNotes} setNoteData={setNoteData} />
            }
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h6" component="h2">
                            Add Note
                        </Typography>
                        <input placeholder='add note' onChange={(event) => setNotes(event.target.value)} />
                        <Button variant="contained" onClick={() => handleClick()}>Add New Note</Button>
                    </Box>
                </Fade>
            </Modal>


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
                        {playlist.map(({ title }) => <Typography sx={{ cursor: 'pointer' }}>{title}</Typography>)}
                        <input placeholder='Enter title of the playlist' onChange={(event) => addTitle(event)} />
                        <input placeholder='Write a description' onChange={(event) => addDescription(event)} />
                        <Button variant="contained" onClick={() => { createPlaylist(); setShowPlaylist(!showPlaylist) }}>Create New Playlist</Button>
                    </Box>
                </Fade>
            </Modal>


            <Header />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Sidebar />
                <div key={video._id} style={{
                    marginTop: "20px",

                }} >
                    <div style={{
                        width: '100%',
                        margin: "1rem",
                        padding: "1rem"
                    }}>
                        <iframe src={video.src} title="video" style={{
                            width: '100%',
                            height: '500px',
                        }} />
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div>
                                <h3 style={{
                                    // padding:"5px",
                                    textAlign: 'left'
                                }}>{video.title}</h3>
                            </div>
                            <div style={{ display: 'flex', gap: '50px', marginTop: '10px' }}>
                                <WatchLaterIcon onClick={() => handleWatchLater(video)} sx={{
                                    color: watchLater.includes(video) ? 'skyblue' : 'black'
                                }} />
                                <PlaylistAddIcon onClick={() => setShowPlaylist(!showPlaylist)} />
                                <EditNoteIcon onClick={handleOpen} />
                            </div>
                        </div>
                    </div>
                    <div style={{
                        width: '100%',
                        display: 'block',
                        margin: 'auto',
                        margin: "1rem",
                        padding: "1rem"
                    }}>
                        <hr />
                        <h2 style={{ textAlign: 'left' }}>My Notes</h2>
                        {
                            noteData.map((note, index) => (
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div>
                                        <p style={{ textAlign: 'left' }}>{note}</p>
                                    </div>
                                    <div style={{ display: 'flex', gap: '20px' }}>
                                        <EditIcon onClick={() => setEditNote(!editNote)} />
                                        <DeleteIcon onClick={() => deleteNote(index)} />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <MoreVideo />
            </div>
        </div>
    )
}

export default SingleVideo
