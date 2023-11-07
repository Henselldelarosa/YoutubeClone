import React from 'react'
import {Stack} from '@mui/material'
import { Link } from 'react-router-dom'
import {logo} from '../utils/constants'

const Navbar = () => {
  return (
    <Stack
    direction='row'
    alignItems='center'
    p={2}
    sx={{position:'sticky', backgroundColot:'#000', top:'0', justifyContent:'space-between'}}>

    </Stack>
  )
}

export default Navbar
