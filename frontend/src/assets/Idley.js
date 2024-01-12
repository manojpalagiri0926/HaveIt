import React from 'react';
import sc1 from '../media/sc1.png';
import sc2 from '../media/sc2.png';
import sc3 from '../media/sc3.png';
import sc4 from '../media/sc4.png';
import { styled } from '@mui/material/styles';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';

function Idley() {
  return (
    <Scroller>
      <ImageContainer>
        <CardItem>
          <CardMedia
            component="img"
            src={sc1}
            alt="Best offers"
            sx={{ width: '100%', height: '100%', borderRadius: '10%' }}
          />
        </CardItem>
        <CardItem>
          <CardMedia
            component="img"
            src={sc2}
            alt="Best offers"
            sx={{ width: '100%', height: '100%', borderRadius: '10%' }}
          />
        </CardItem>
        <CardItem>
          <CardMedia
            component="img"
            src={sc3}
            alt="Best offers"
            sx={{ width: '100%', height: '100%', borderRadius: '10%' }}
          />
        </CardItem>
        <CardItem>
          <CardMedia
            component="img"
            src={sc4}
            alt="Best offers"
            sx={{ width: '100%', height: '100%', borderRadius: '10%' }}
          />
        </CardItem>
      </ImageContainer>
    </Scroller>
  );
}

const Scroller = styled('div')({
  overflowX: 'auto',
  whiteSpace: 'nowrap', // Prevent wrapping of items to the next line
  '&::-webkit-scrollbar': {
    display: 'none', // Hide the scrollbar for webkit browsers
  },
  msOverflowStyle: 'none', // Hide scrollbar for Internet Explorer and Edge
  scrollbarWidth: 'none', // Hide scrollbar for Firefox
});

const ImageContainer = styled('div')({
  display: 'flex', // Use flexbox to arrange items in a row
  justifyContent: 'space-between', // Add space between the items
  maxWidth: '500px',
  margin: '10px',
  borderRadius: '15px', // Add border radius to the outer card container
});

const CardItem = styled(Card)({
  flex: '0 0 auto', // Do not allow items to grow, do not shrink, and set their initial size based on content
  width: '70%',
  height: '100%',
  borderRadius: '25px',
  margin: '0 8px', // Add margin to each card
});

export default Idley;
