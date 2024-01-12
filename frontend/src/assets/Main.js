import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import React, { useEffect, useState } from 'react';
import pa1 from '../Beckendimgs/pa1.jpg'
import pa2 from '../Beckendimgs/pa2.jpg'
import pa3 from '../Beckendimgs/pa3.jpg'
import pa4 from '../Beckendimgs/pa4.jpg'
import pa5 from '../Beckendimgs/pa5.jpg'
import pa6 from '../Beckendimgs/pa6.jpg'
import pa7 from '../Beckendimgs/pa7.jpg'



export default function Main() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const apiUrl = 'http://127.0.0.1:8000/api/data/';

    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('Fetched Data:', data);
        setData(data);
      })
      .catch(error => {
        console.error('Error fetching data from Django API:', error);
      });
  }, []);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', margin: 5 }}>
      {data.map((item, index) => (
        <Card key={index} sx={{ maxWidth: 390, margin: 3, borderRadius: 2 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              // Use the imported variable dynamically based on the item
              image={item.img === 'pa1' ? pa1 : item.img === 'pa2' ? pa2 : item.img === 'pa3' ? pa3 : item.img === 'pa4' ? pa4 : item.img === 'pa5' ? pa5 : item.img === 'pa6' ? pa6 : pa7}
              alt={item.altText}
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {item.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ₹ {item.price}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.details}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </div>
  );
}