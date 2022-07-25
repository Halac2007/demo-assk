import { Box, Grid, Link, Typography } from '@mui/material'
import React from 'react'

const ListPost = (props) => {
  return (
    <Grid container spacing={2} maxWidth="900px" m="auto">
      <Grid item xs={12} sm={12} md={8} spacing={2}>
        {props.maincate.map((item) => (
          <Link href={item.link} sx={{ display: 'flex', textDecoration: 'none', color: '#212529' }}>
            <Box sx={{ paddingBottom: '10px' }}>
              <img src={item.image} width="150px" height="100px" alt="" />
            </Box>
            <Typography variant="p" sx={{ paddingLeft: '10px', marginLeft: '10px' }}>
              {item.title}
            </Typography>
          </Link>
        ))}
      </Grid>
      <Grid item display={{ xs: 'none', sm: 'none', md: 'block' }} md={4}>
        <img src="https://sunglasshutusa.com/hinh-anh-bat-dong-san-dep/imager_20_2109_700.jpg"></img>
      </Grid>
    </Grid>
  )
}

export default ListPost
