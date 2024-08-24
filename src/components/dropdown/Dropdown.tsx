import { useState, useEffect } from "react";
import { DropdownProps } from "./Dropdown.interface";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import "./Dropdown.scss";

const Dropdown: React.FC<DropdownProps> = ({ dropdownItem }) => {
  const [dropdownClicked, setDropdownClicked] = useState<boolean>(false);

//   const dropdownItem: DropdownItem = {
//     id: 1,
//     icon: <MessageIcon style={{ fontSize: "18px", color: "#99a1b3" }} />,
//     name: "Homixide",
//     items: [
//       {
//         icon: (
//           <ModeEditOutlineOutlinedIcon
//             style={{ fontSize: "18px", color: "#99a1b3" }}
//           />
//         ), // Coffee icon
//         name: "Edit",
//       },
//       {
//         icon: (
//           <DeleteOutlineOutlinedIcon
//             style={{ fontSize: "18px", color: "#99a1b3" }}
//           />
//         ),
//         name: "Delete",
//       },
//     ],
//   };

  const handleDropdownClick = () => {
    setDropdownClicked(!dropdownClicked);
    console.log("dropdown:", dropdownClicked);
  };

  const handleClickOutside = (event: MouseEvent) => {
    const dropdownListElement = document.getElementById('dropdown-list');
    const dropdownTitleElement = document.getElementById('dropdown-title');

    if (
      dropdownListElement &&
      !dropdownListElement.contains(event.target as Node) &&
      dropdownTitleElement &&
      !dropdownTitleElement.contains(event.target as Node)
    ) {
      setDropdownClicked(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="dropdown">
      <div id="dropdown-title" className="dropdown__title" onClick={handleDropdownClick}>
        <div className="dropdown__title__icon">{dropdownItem.icon}</div>
        <div className="dropdown__title__label">{dropdownItem.name}</div>
        <div className="dropdown__title__arrow-icon">
          
          { !dropdownClicked ? ( <KeyboardArrowDownOutlinedIcon
            style={{ fontSize: "18px", color: "#99a1b3" }}
          /> ) : ( <KeyboardArrowUpOutlinedIcon
            style={{ fontSize: "18px", color: "#99a1b3" }}
          /> ) }
        </div>
      </div>

      {dropdownClicked && (
        <div id="dropdown-list" className="dropdown__list">
          {dropdownItem.items?.map((items, index) => (
            <div key={index} className="dropdown__list__element">
            <div className="dropdown__list__element__icon">
              {items.icon}
            </div>
            <div className="dropdown__list__element__label">
            {items.name}
            </div>
          </div>
          ) )}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
