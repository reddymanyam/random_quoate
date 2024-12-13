import { Box, Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import axios from 'axios';

const QuoateGen = () => {
  const [quote, setQuote] = useState(null);
  const [color, setColor] = useState('');

  const getQuote = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/quotes");
      const quotesList = response.data.quotes;
      const randomQuote = quotesList[Math.floor(Math.random() * quotesList.length)];
      setQuote(randomQuote);

      const newColor = generateRandomColor();
      setColor(newColor);

    } catch (err) {
      alert(`Error fetching quote: ${err.message}`);
    }
  };

  const generateRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    
    return `rgb(${r},${g},${b})`;
  }


  useEffect(() => {
    getQuote();

  }, []);

  return (
    <Box
      sx={{
        bgcolor: color,
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection:"column",
        alignItems: "center",
        justifyContent: "center",
        transition: "1s ease-in-out"
      }}
    >
      <Box
        sx={{
          width: "450px",
          height: "auto",
          bgcolor: "white",
          padding: "40px",
          borderRadius: "7px",
        }}
      >
        {/* Display the quote */}
        {quote && (
          <Box sx={{ width: "100%", height: "auto", color: "black", marginBottom: "20px" }}>
            <h1 style={{ color: color,  transition: "1s ease-in-out" }}>{quote.quote}</h1>
            <Box
              sx={{
                width: "100%",
                height: "auto",
                color: "black",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                margin: "10px 0",
              }}
            >
              <h5 style={{ color: color,  transition: "1s ease-in-out" }}>- {quote.author}</h5>
            </Box>
          </Box>
        )}


        <Box
          sx={{
            width: "100%",
            height: "auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", gap: "10px" }}>
            <Button variant="contained" sx={{ bgcolor: color,  transition: "1s ease-in-out" }}>
              <TwitterIcon />
            </Button>
            <Button variant="contained" sx={{ bgcolor: color,  transition: "1s ease-in-out"}}>
              <InstagramIcon />
            </Button>
          </Box>
          <Box>
            <Button
              variant="contained"
              sx={{ bgcolor: color,  transition: "1s ease-in-out" }}
              onClick={getQuote}
            >
              New Quote
            </Button>
          </Box>
        </Box>
      </Box>
      <Typography variant='subtitle' component="body1" sx={{color:"white", marginTop:"25px", fontStyle:"italic"}}>-by Reddy Manyam</Typography>
    </Box>
  );
};

export default QuoateGen;
