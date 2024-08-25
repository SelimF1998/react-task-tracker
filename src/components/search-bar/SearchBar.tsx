import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import './SearchBar.scss'

const SearchBar = () => {
  return (
    <div className='search-bar' >
        <div className='search-bar__icon' ><SearchIcon  style={{ fontSize: "20px", color: "#C0C1C6" }} /></div>
        <input className='search-bar__search-input' type='text' placeholder='Search' /> 
    </div>
  )
}

export default SearchBar