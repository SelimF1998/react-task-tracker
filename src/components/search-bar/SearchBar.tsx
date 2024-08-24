import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import './SearchBar.scss'

const SearchBar = () => {
  return (
    <div className='search-bar' >
        <div className='search-bar__icon' ><SearchIcon  style={{ fontSize: "20px", color: "#99a1b3" }} /></div>
        <input className='search-bar__search-input' type='text' placeholder='Search' /> 
    </div>
  )
}

export default SearchBar