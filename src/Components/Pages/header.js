import { Box } from '@mui/material';
import React from 'react';

const Header = () => {
  return (
    <Box sx={{width: "100%", height:"50px",display:"flex",backgroundColor:"#000",justifyContent:"center",alignItems:"center"}}>
        <Box sx={{display:"flex",alignItems:"center", justifyContent:"center",width:"50%"}}>
        <Box sx={{color:"white",fontWeight:"bold",fontSize:"25px"}}>Investment Changes</Box>
        </Box>
    </Box>
  );
}

export default Header;