import React from "react";
import SearchBar from "../search-bar/SearchBar";
import Dropdown from "../dropdown/Dropdown";
import Avatar from "../avatar/Avatar";
import { ReactNode } from "react";
import StickyNote2OutlinedIcon from "@mui/icons-material/StickyNote2Outlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
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
      icon: (
        <StickyNote2OutlinedIcon
          style={{ fontSize: "25px", color: "#95A1B0" }}
        />
      ),
    },
    {
      id: 2,
      icon: (
        <BookmarkBorderOutlinedIcon
          style={{ fontSize: "25px", color: "#95A1B0" }}
        />
      ),
    },
    {
      id: 3,
      icon: (
        <NotificationsNoneOutlinedIcon
          style={{ fontSize: "25px", color: "#95A1B0" }}
        />
      ),
    },
  ];

  const user = {
    id: 1,
    name: "Selim Ferroukhi",
    email: "selim.ferroukhi7@gmail.com",
    profileImg:
      "https://cdn.sortiraparis.com/images/80/104172/981129-le-musee-de-la-marine-a-paris-et-ses-collections-permanentes-tour-eiffel-trocadero.jpg",
  };

  const dropdownItem = {
    id: 1,
    icon: <Avatar user={user} />,
    name: "Yessine Karoui",
    items: [
      {
        icon: (
          <ModeEditOutlineOutlinedIcon
            style={{ fontSize: "18px", color: "#95A1B0" }}
          />
        ), // Coffee icon
        name: "Edit",
      },
      {
        icon: (
          <DeleteOutlineOutlinedIcon
            style={{ fontSize: "18px", color: "#95A1B0" }}
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

        <div className="navbar__content__right">
          <div className="navbar__content__right__icons">
            {navbarItems.map((item, index) => (
              <div key={index} className="navbar__content__right__icons__icon">
                {item.icon}
              </div>
            ))}
          </div>

          <div className="navbar__content__right__avatar">
            <Dropdown dropdownItem={dropdownItem} />
          </div>
        </div>
      </div>

      {/* <div className="navbar__bar" ></div> */}
    </div>
  );
};

export default Navbar;
