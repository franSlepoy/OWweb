import { Typography } from '@mui/material'
import React from 'react'

const TextoTituloCard = (props) => {
  return (
    <>
    
    <Typography sx={{textAlign:"center", mt:3, mb:3}}>
    {props.titulo}
    </Typography>
    </>
  )
}

export default TextoTituloCard
