import { Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { useVideos } from '../Context/VideoContext'
import { useNavigate } from 'react-router-dom';

function ListedCategories() {
    const{videoCategory} = useVideos()
    const navigate = useNavigate();
    return (
        <Container sx={{ py: 1 }} maxWidth="lg">
            <h1 style={{textAlign:'left'}}>Categories</h1>
        <Grid container spacing={4}>
          {videoCategory?.map(({ _id, category, thumbnail, src }) => (
            <Grid item key={_id} xs={12} sm={6} md={3}>
              <Card onClick={() => navigate(`/video/${category}`)}
                sx={{ height: "100%", display: "flex", flexDirection: "column" }}
              >
                <CardMedia onClick={() => navigate(`/video/${category}`)}
                  component="img"
                  sx={{
                    alignSelf: "center",
                    objectFit: "contain", 
                  }}
                  image={thumbnail}
                  src={src}
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
                    {category}
                  </Typography>
                  </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    )
}

export default ListedCategories
