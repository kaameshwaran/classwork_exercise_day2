import React from "react";
import { Box } from "@mui/material";
import { BottomNavigation,BottomNavigationAction } from "@material-ui/core";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";


function Footer() {
    return (
    <Container>
    <BottomNavigation >
      <BottomNavigationAction icon={<FacebookRoundedIcon />} />
      <BottomNavigationAction icon={<TwitterIcon/>}/>
      <BottomNavigationAction icon={<InstagramIcon />} />
    </BottomNavigation><br/>
    <Box textAlign={"center"}>
    <Typography variant="caption">Come back!❤️</Typography>
    </Box>
  </Container>
);
}




export default Footer;