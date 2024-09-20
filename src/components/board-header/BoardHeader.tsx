import React, { useState } from 'react'
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import Dropdown from '../dropdown/Dropdown';
import './BoardHeader.scss'

export const BoardHeader = () => {

    const [favsClicked, setFavsClicked] = useState(false);

    const favsHandleClick = () => {
        setFavsClicked(!favsClicked);
    }

    const handleFilter1 = () => {
        console.log("Filter 1!")
      }
    
      const handleFilter2 = () => {
        console.log("Filter 2")
      }

    const dropdownItem = {
        id: 1,
        icon: < FilterListOutlinedIcon style={{ fontSize: "18px" }} />,
        name: "Filter",
        items: [
          {
            name: "Option 1",
            onClick: handleFilter1 
          },
          {
            name: "Option 2",
            onClick: handleFilter2 
          },
        ],
      };


  return (
    <div className="board-header" >
        <div className='board-header__title' >My Tasks</div>
        <div className='board-header__content' >
            <div className='board-header__content__left' >tasks avatars</div>
            <div className='board-header__content__right' >
                <div onClick={favsHandleClick}  className='board-header__content__right__favs'>
                    { !favsClicked ? <StarBorderOutlinedIcon style={{ fontSize: "18px" }} /> : <StarOutlinedIcon style={{ fontSize: "18px", color: "#2667e7" }}  />     }
                </div>

                <div className='board-header__content__right__filter-dropdown' >
                    <Dropdown dropdownItem={dropdownItem} />
                </div> 

                <div className="board-header__content__right__add-task-button" >
                    <span className='add-task-label' >Add Task</span>
                </div>
            </div>

            
        </div>
    </div>
  )
}
