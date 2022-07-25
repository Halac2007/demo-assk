import { Box } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import ListPost from '../Components/ListPost'
import ListSliders from '../Components/ListSliders'
import TopPost from '../Components/TopPost'

const DataPost = () => {
  const [mainPosts, setMainPosts] = useState([])
  const [mainTopPosts, setTopMainPosts] = useState([])
  const [mainCatePosts, setCatePosts] = useState([])
  const [MorePosts, setMorePosts] = useState([])
  const [postSlider, setpostSlider] = useState([])

  useEffect(() => {
    const url = `https://crawlassk.herokuapp.com/`

    axios.get(url).then((res) => {
      const data = res.data.map((item) => ({
        title: item.title,
        link: item.link,
        image: item.image,
        imagetop: item.imageTop,
      }))
      setMainPosts(data.slice(16, 25))
      setTopMainPosts(data.slice(4, 5))
      setCatePosts(data.slice(6, 9))
      setMorePosts(data.slice(9, 16))
      setpostSlider(data.slice(1, 16))
    })
  }, [])
  return (
    <Box m={0} p={0}>
      <Header />

      <TopPost toppost={mainTopPosts} catepost={mainCatePosts} mainmore={MorePosts} />

      <ListPost maincate={mainPosts} />

      <Box maxWidth="900px" m="auto">
        <ListSliders posts={postSlider} />
      </Box>

      <ListPost maincate={mainPosts} />
      <Footer sx={{ backgroundColor: '#fsfdsaf' }} />
    </Box>
  )
}

export default DataPost
