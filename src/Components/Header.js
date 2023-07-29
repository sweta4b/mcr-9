import React from 'react'
import {AppBar, Toolbar, Typography} from "@mui/material"
import { styled } from "@mui/material/styles";
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)(({ theme }) => ({
    color: theme.palette.common.white,
    textDecoration: "none",
  }));
  

function Header() {
    return (
        <AppBar  position="sticky"
        sx={{
          py: 1,
        }}>
            <Toolbar sx={{ display: "flex", gap: 2 }}>
          <Typography variant="h6" color="inherit">
            <StyledLink to="/">Video Library App</StyledLink>
          </Typography>
        </Toolbar>
            </AppBar>
    )
}

export default Header
