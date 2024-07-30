import { Box } from '@mui/material';
import React, { useState } from 'react';
import Header from './header';
import Chance from './chance';
import { stockMarket, marketData } from '../Services/stockmarket';
import { numbers} from '../Services/stockmarket';

const MainPage = () => {
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [selectedStockMarket, setSelectedStockMarket] = useState(null);
  const [selectedVal, setSelectedVal] = useState('');


  const getRandomNumber = () => {
    const randomIndex = Math.floor(Math.random() * numbers.length);
    setSelectedNumber(numbers[randomIndex]);
  };

  const getRandomStockMarket = () => {
    const randomStock = stockMarket[Math.floor(Math.random() * stockMarket.length)];
    setSelectedStockMarket(randomStock);
    setSelectedVal('');  
};

const getRandomVal = () => {
    if (selectedStockMarket && marketData[selectedStockMarket]) {
        const randomVal = marketData[selectedStockMarket][Math.floor(Math.random() * marketData[selectedStockMarket].length)];
        setSelectedVal(randomVal);
    }
};


  return (
    <Box sx={{backgroundColor:"#00000" , height:"100%",width:"100%"}}>
           <Box sx={{ 
        position: "absolute", 
        left: 0, 
        width: "25%", 
        height: "100%", 
        backgroundImage: 'url("/btczar.jpeg")', 
        backgroundSize: "cover", 
        backgroundPosition: "center" 
      }}></Box>
      <Box sx={{ 
        position: "absolute", 
        right: 0, 
        width: "25%", 
        height: "100%", 
        backgroundImage: 'url("/btczar.jpeg")', 
        backgroundSize: "cover", 
        backgroundPosition: "center" 
      }}></Box>
      <Header/>
      <Chance getRandomNumber={getRandomNumber} selectedNumber={selectedNumber} getRandomStockMarket={getRandomStockMarket} selectedStockMarket={selectedStockMarket} getRandomVal={getRandomVal} selectedVal={selectedVal}/>
    </Box>
  );
}

export default MainPage;
