import React from 'react'
import './Search.css'
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import { Button } from '@mui/material';

const Search = () => {
   const search=e=>{
    e.preventDefault();
   }

  return (
    <div className='search'> 
    <div className="search_input">
        <SearchIcon className="search_inputIcon" />
        <input  />
        <MicIcon/>
    </div>
    <div className="search_buttons">
        <Button onClick={search} variant='outlined'>Get Search</Button>
        <Button variant='outlined'>Feels Good</Button>
    </div>
    </div>
  )
}

export default Search