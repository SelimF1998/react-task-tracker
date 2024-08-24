import React from "react";
import SearchBar from "../search-bar/SearchBar";
import Dropdown from "../dropdown/Dropdown";
import { ReactNode } from "react";
import MessageIcon from '@mui/icons-material/Message';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import NotificationsIcon from '@mui/icons-material/Notifications';
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
      icon: <MessageIcon  style={{ fontSize: "25px",  color: "#99a1b3" }} />
    },
    {
      id: 2,
      icon: <BookmarkIcon style={{ fontSize: "25px",  color: "#99a1b3" }} />
    
    },
    {
      id: 3,
      icon: <NotificationsIcon style={{ fontSize: "25px",  color: "#99a1b3" }} />
    }
  ];

    const dropdownItem = {
    id: 1,
    icon: <MessageIcon style={{ fontSize: "18px", color: "#99a1b3" }} />,
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
