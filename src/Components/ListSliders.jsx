import { Box, Link, Typography } from '@mui/material'
import React from 'react'
import Slider from 'react-slick'
const ListSliders = ({ posts }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 0,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          dots: false,
        },
      },
    ],
  }
  return (
    <Slider {...settings}>
      {posts.map((item) => (
        <Link href={item.link} sx={{ display: 'flex', textDecoration: 'none', color: '#212529' }}>
          <Box sx={{ paddingBottom: '10px' }}>
            <img src={item.image} width="165px" height="120px" alt="" />
          </Box>
          <Typography variant="p">{item.title}</Typography>
        </Link>
      ))}
    </Slider>
  )
}

export default ListSliders
