import React, { useState } from 'react';
import { TextField, Button, Typography, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';

const HelpAndSupport = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [query, setQuery] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your logic to handle the form submission (e.g., send data to a server)

    // For this example, just setting a flag to indicate submission
    setSubmitted(true);
  };

  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '80vh',
        }}
      >
        <Paper
          elevation={3}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '70vh', // Adjusted to a percentage of viewport height
            marginY: '50px', // Increased top margin
            padding: '20px', // Adjusted padding
            textAlign: 'center',
            width: '70%', // Adjusted form width
            borderRadius: '20px', // Increased border radius
          }}
        >
          <Typography variant="h5" gutterBottom>
            Help and Support
          </Typography>

          {submitted ? (
            <Typography>
              Thank you for reaching out! We will get back to you soon.<br></br>
              <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
                <button
                  style={{
                    marginTop:'10px',
                    backgroundColor: 'orange',
                    color: 'white',
                    padding: '10px 20px',
                    fontSize: '1rem',
                    borderRadius: '20px',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  Back to Home
                </button>
              </Link>
            </Typography>
          ) : (
            <form onSubmit={handleSubmit}>
              <TextField
                label="Name"
                variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                fullWidth
                margin="normal"
              />
              <TextField
                label="Email"
                variant="outlined"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                fullWidth
                margin="normal"
              />
              <TextField
                label="Query/Issue"
                variant="outlined"
                multiline
                rows={4}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                required
                fullWidth
                margin="normal"
              />

              <Button type="submit" variant="contained" color="primary" size="large" sx={{ marginTop: 2 }}>
                Submit
              </Button>
            </form>
          )}
        </Paper>
      </div>
      <Footer/>
    </div>
  );
};

export default HelpAndSupport;
