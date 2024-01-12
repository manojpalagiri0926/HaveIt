import React from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import FoodMenu from '../assets/Poori';
import '../styles/Home.css'


const SearchBar = () => {
  const handleSearch = () => {
    // Implement your search logic here
    console.log('Search button clicked');
  };

  return (
    <div>
    <div style={{ marginTop: '80px',marginBottom: '80px', marginLeft: '20%', width: '60%' }}>
    <TextField
      label="Search for restaurants"
      variant="outlined"
      fullWidth
      sx={{
        '& .MuiOutlinedInput-root': {
          borderRadius: '5px', // Adjust the border radius as needed
        },
      }}
      InputProps={{
        endAdornment: (
          <IconButton onClick={handleSearch}>
            <SearchIcon />
          </IconButton>
        ),
      }}
    />
  </div>
  <div style={{ marginLeft: '20%', width: '60%' }}>
  <hr className='hire'></hr>
    <p className="title">Popular Cuisines</p>
    <FoodMenu />
  </div>
    </div>
  );
};

export default SearchBar;
