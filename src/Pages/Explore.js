import { Avatar, Box, Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'
import { useVideos } from '../Context/VideoContext'
import WatchLaterIcon from '@mui/icons-material/WatchLater';

function Explore() {
    const { selectedVideo, watchLater, handleWatchLater } = useVideos();
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("")

    const videoList = searchTerm === "" ? selectedVideo : selectedVideo.filter((video) => video.title.toLowerCase().includes(searchTerm.toLowerCase()))

    return (
        <>
            <Header />
            <Sidebar />
            <Container sx={{ py: 1 }} maxWidth="lg">
                <div style={{ display: 'flex', gap: '30px' }}>
                    <h1 style={{ textAlign: 'left' }}>Explore</h1>
                    <input onChange={(event) => setSearchTerm(event.target.value)}
                        placeholder='search by title..'
                        style={{
                            width: '500px',
                            marginBottom: '20px',
                            height: '2vh',
                            marginTop: '20px',
                            alignSelf: 'center'
                        }} />
                </div>
                <Grid container spacing={4}>
                    {
                        videoList.map((video) => (
                            <Grid item key={video._id} xs={12} sm={6} md={3}>
                                <Card
                                    sx={{ height: "100%", display: "flex", flexDirection: "column" }}
                                >
                                    <WatchLaterIcon sx={{ alignSelf: 'flex-end', position: 'absolute', color: watchLater.includes(video) ? 'skyblue' : 'black', bgcolor: 'white', p: 1 }} onClick={() => handleWatchLater(video)} />
                                    <CardMedia onClick={() => navigate(`/videos/${video._id}`)}
                                        component="img"
                                        sx={{
                                            alignSelf: "center",
                                            objectFit: "contain",
                                        }}
                                        image={video.thumbnail}
                                        src={video.src}
                                    />
                                    <CardContent>
                                        <Box sx={{
                                            display: 'flex',
                                            gap: '20px',
                                            justifyContent: 'center'
                                        }}>
                                            <Avatar src={video.thumbnail}></Avatar>
                                            <Typography
                                                component="h4"
                                                gutterBottom
                                                sx={{
                                                    overflow: "hidden",
                                                    WebkitLineClamp: "1",
                                                    WebkitBoxOrient: "vertical",
                                                    textAlign: 'left'
                                                }}
                                            >
                                                <b>{video.title}</b>
                                            </Typography>
                                        </Box>
                                        <Typography
                                            component="h4"
                                            gutterBottom
                                            sx={{
                                                overflow: "hidden",
                                                WebkitLineClamp: "1",
                                                WebkitBoxOrient: "vertical",
                                                textAlign: 'left',
                                            }}
                                        >
                                            <b>{video.category}</b>
                                        </Typography>

                                        <Box sx={{
                                            display: 'flex',
                                            gap: '20px',
                                            justifyContent: 'center'
                                        }}>
                                            <Typography
                                                component="h4"
                                                gutterBottom
                                                sx={{
                                                    overflow: "hidden",
                                                    WebkitLineClamp: "1",
                                                    WebkitBoxOrient: "vertical",
                                                }}
                                            >
                                                {video.views} views
                                            </Typography>

                                            <Typography
                                                component="h4"
                                                gutterBottom
                                                sx={{
                                                    overflow: "hidden",
                                                    WebkitLineClamp: "1",
                                                    WebkitBoxOrient: "vertical",
                                                }}
                                            >
                                                {video.creator}
                                            </Typography>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))
                    }
                </Grid>
            </Container>
        </>
    )
}

export default Explore
