import { Avatar, Box, Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';
import { useVideos } from '../Context/VideoContext';

function VideoListing() {
    const { category } = useParams();
    const navigate = useNavigate();

    const { selectedVideo, handleWatchLater, watchLater } = useVideos();

    const filteredVideos = selectedVideo.filter((video) => video.category === category)


    return (
        <div>
            <Header />
            <Sidebar />

            <Container sx={{ py: 1 }} maxWidth="lg">
                <h1 style={{ textAlign: 'left' }}>{category}</h1>
                <Grid container spacing={4}>
                    {
                        filteredVideos.map((video) => (
                            <Grid item key={video._id} xs={12} sm={6} md={3}>
                                <Card onClick={() => navigate(`/videos/${video._id}`)}
                                    sx={{ height: "100%", display: "flex", flexDirection: "column" }}
                                >
                                    <WatchLaterIcon sx={{ alignSelf: 'flex-end', position: 'absolute', color: watchLater.includes(video) ? 'skyblue' : 'black', bgcolor: 'white', p: 1 }} onClick={() => handleWatchLater(video)} />
                                    <CardMedia
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
        </div>
    )
}

export default VideoListing
