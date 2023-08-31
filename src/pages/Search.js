import React,{useState} from 'react'
import './Search.css'
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import { Button } from '@mui/material';
import { Link, useNavigate} from "react-router-dom"
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';

const Search = ({hideButtons =false}) => {
    const [{},dispatch]=useStateValue()
    const [input , setInput]=useState("")
    const navigate=useNavigate()
      
   const search=e=>{
    e.preventDefault();
    dispatch({
        type: actionTypes.SET_SEARCH_TERM,
        term:input
    })
    navigate('/search')
   }

//    const clicked=()=>{
//     <Link to="https://www.youtube.com/watch?v=AWEm4tA2hMc"></Link>
//    }

  return (
    <form className='search'> 
    <div className="search_input">
        <SearchIcon className="search_inputIcon" />
        <input value={input} onChange={e=>setInput(e.target.value)} />
        <MicIcon/>
    </div>

    {!hideButtons ?(
    <div className="search_buttons">
        <Button type='submit' onClick={search} variant='outlined'>Get Search</Button>
        <Button variant='outlined'>Feels Good</Button>
    </div>):(
    <div className="search_buttons">
        <Button className='search_buttonsHidden' type='submit' onClick={search} variant='outlined'>Get Search</Button>
        <Button className='search_buttonsHidden'  variant='outlined'>Feels Good</Button>
    </div>)}
    
    </form>
  )
}

export default Search