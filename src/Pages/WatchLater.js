import { Avatar, Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'
import { useVideos } from '../Context/VideoContext'

function WatchLater() {
    const {removeFromWatchLater, watchLater} = useVideos()

    return (
        <>
        <Header/>
        <Sidebar/>
        <Container sx={{ py: 1 }} maxWidth="lg">
            <h1 style={{textAlign:'left'}}>Watch Later </h1>
        <Grid container spacing={4}>
            {watchLater.map((video) =>(
               <Grid item key={video._id} xs={12} sm={6} md={3}>
               <Card 
                 sx={{ height: "100%", display: "flex", flexDirection: "column" }}
               >

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
                     display:'flex',
                     gap:'20px',
                     justifyContent:'center'
                   }}>
                     <Avatar src={video.thumbnail}></Avatar>
                   <Typography
                     component="h4"
                     gutterBottom
                     sx={{
                       overflow: "hidden",
                       WebkitLineClamp: "1",
                       WebkitBoxOrient: "vertical",
                       textAlign:'left'
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
                       textAlign:'left',
                     }}
                   >
                     <b>{video.category}</b>
                   </Typography>
 
                   <Box sx={{
                     display:'flex',
                     gap:'20px',
                     justifyContent:'center'
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
                   <CardActions sx={{
                  alignSelf: "center",
                }}>
                  <Button variant="contained" onClick={() => removeFromWatchLater(video)}>
                    Remove from watchLater
                  </Button>
                </CardActions>
               </Card>
             </Grid>
            ))}
        </Grid>
        </Container>
        </>
    )
}

    


export default WatchLater
