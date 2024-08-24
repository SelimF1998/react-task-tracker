import React from "react";
import SearchBar from "../search-bar/SearchBar";
import Dropdown from "../dropdown/Dropdown";
import { ReactNode } from "react";
import StickyNote2OutlinedIcon from '@mui/icons-material/StickyNote2Outlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import "./Navbar.scss";

interface NavbarItem {
  id: number;
  icon: ReactNode;
}

const Navbar = () => {

  const navbarItems: NavbarItem[] = [
    {
      id: 1,
      icon: <StickyNote2OutlinedIcon  style={{ fontSize: "25px",  color: "#99a1b3" }} />
    },
    {
      id: 2,
      icon: <BookmarkBorderOutlinedIcon style={{ fontSize: "25px",  color: "#99a1b3" }} />
    
    },
    {
      id: 3,
      icon: <NotificationsNoneOutlinedIcon style={{ fontSize: "25px",  color: "#99a1b3" }} />
    }
  ];

    const dropdownItem = {
    id: 1,
    icon: <StickyNote2OutlinedIcon style={{ fontSize: "18px", color: "#99a1b3" }} />,
    name: "Navbar",
    items: [
      {
        icon: (
          <ModeEditOutlineOutlinedIcon
            style={{ fontSize: "18px", color: "#99a1b3" }}
          />
        ), // Coffee icon
        name: "Edit",
      },
      {
        icon: (
          <DeleteOutlineOutlinedIcon
            style={{ fontSize: "18px", color: "#99a1b3" }}
          />
        ),
        name: "Delete",
      },
    ],
  };

  return (
    <div className="navbar">
      <div className="navbar__content">
        <div className="navbar__content__search-bar">
          <SearchBar />
        </div>

        <div className="navbar__content__right" >
          <div className="navbar__content__right__icons" >
            {navbarItems.map((item, index) => (
              <div key={index} className="navbar__content__right__icons__icon" >{item.icon}</div>
            ) )}
          </div>

          <div className="navbar__content__right__avatar" >
            <Dropdown dropdownItem={dropdownItem} />
          </div>

        </div>
      </div>

      {/* <div className="navbar__bar" ></div> */}
    </div>
    
  );
};

export default Navbar;
