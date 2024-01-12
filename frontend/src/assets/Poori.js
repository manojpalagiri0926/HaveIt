import React from 'react';
import idli from '../media/Idli.avif';
import Bath from '../media/Bath.avif';
import Bonda from '../media/Bonda.avif';
import Cakes from '../media/Cakes.avif';
import Chole from '../media/Chole_Bature.avif';
import Dosa from '../media/Dosa.avif';
import juice from '../media/Juice.avif';
import Khichdi from '../media/Khichdi.avif';
import ome from '../media/Omelette.avif';
import paratha from '../media/Paratha.avif';
import poha from '../media/Poha.avif';
import pongal from '../media/Pongal.avif';
import poori from '../media/Poori.avif';
import Salad from '../media/Salad.avif';
import sandwich from '../media/Sandwich.avif';
import Shakes from '../media/Shakes.avif';
import vada from '../media/Vada.avif';
import { styled } from '@mui/material/styles';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';

function FoodMenu() {
const menuItems = [
    paratha, poha, pongal, poori, Salad, sandwich, Shakes, vada,
    Bath, Bonda, Cakes, idli, Chole, Dosa, juice, Khichdi, ome
  ];

  return (
    <Scroller>
      <ImageContainer>
        {menuItems.map((item, index) => (
          <CardItem key={index}>
          <CardMedia
            component="img"
            src={item}
            alt="Best offers"
            sx={{ width: '100%', height: '100%', borderRadius: '10px' }}
          />
        </CardItem>
))}
      </ImageContainer>
    </Scroller>
  );
}

const Scroller = styled('div')({
  overflowX: 'auto',
  whiteSpace: 'nowrap',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
  msOverflowStyle: 'none',
  scrollbarWidth: 'none',
  scrollLeft: 0,
});

const ImageContainer = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  maxWidth: '14%', // Adjust the max width for better styling
  margin: '10px auto', // Center the container and add margin
  borderRadius: '15px',
  marginLeft: '-10px', // Add negative margin to the left side
});

const CardItem = styled(Card)({
  flex: '0 0 auto',
  width: '70%',
  height: '100%',
  borderRadius: '5px',
  margin: '0 8px',
});

export default FoodMenu;
