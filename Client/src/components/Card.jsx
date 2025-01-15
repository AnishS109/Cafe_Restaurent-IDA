import React from 'react'
import { Box, Typography } from '@mui/material'

const Card = ({data}) => {

  const {name, rating, popularity, image} = data

  return (
  <>

  <Box className="h-65 w-52 text-black ml-11 mt-5">

    <img src={image} alt="Image" className='h-44 rounded-2xl brightness-75 min-w-48'/>

    <Typography className='font-cambay text-black text-sm mt-2 font-semibold'>
      Cafe Name: {name}
    </Typography>

    <Typography className='font-cambay text-black text-sm mt-2 font-semibold'>
      Cafe Rating {rating}
    </Typography>

    <Typography className='font-cambay text-black text-sm mt-2 font-semibold'>
      Cafe Popularity {popularity}
    </Typography>

  </Box>
  
  </>
  )
}

export default Card
