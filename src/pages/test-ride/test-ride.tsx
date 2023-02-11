import { Box, Grid, Paper, TextField, Typography } from '@mui/material';
import React from 'react'

function TestRide() {
  return (
<Box>
  <Grid container sm={12} >
    <Grid xs={6} >
      <Box>
        <img src={"https://www.tvsmotor.com/-/media/Feature/Book-A-Ride/bs-vi-range.jpg"} alt={"BookVehicles"}/>
      </Box>
    </Grid>
    <Grid xs={6} >
<Paper>
  <Typography>
 <h3> Book A Test Ride</h3> <br/>
To book your test ride now, kindly fill in your information below.
  </Typography>
  <TextField id="name" label="Name*" variant="standard" />
</Paper>
    </Grid>
  </Grid>
</Box>

  )
}

export default TestRide;