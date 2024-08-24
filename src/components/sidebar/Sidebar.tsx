import {useState} from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import GridViewIcon from '@mui/icons-material/GridView';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';;

import "./Sidebar.scss";

interface SidebarItem {
  label: string;
  icon: React.ReactNode; // React component for the icon
}

const Sidebar = () => {
    const [sidebarCollapse, setSidebarCollapse] = useState<boolean>(false);

    console.log("Sidebar Collapse:", sidebarCollapse);

  const sidebarItems: SidebarItem[] = [
    {
      label: "Dashboard",
      icon: <GridViewIcon style={{ fontSize: "25px",  color: "#CECEE9" }} />,
    },
    { label: "Profile", icon: <PersonOutlineIcon style={{ fontSize: "25px", color: "#CECEE9" }} /> },
    { label: "Messages", icon: <ChatBubbleOutlineIcon style={{ fontSize: "25px", color: "#CECEE9" }} /> },
    { label: "Settings", icon: <SettingsOutlinedIcon style={{ fontSize: "25px", color: "#CECEE9" }} /> },
    { label: "Help", icon: <HelpOutlineOutlinedIcon style={{ fontSize: "25px", color: "#CECEE9" }} /> },
  ];

  const toggleSidebarCollapse = () => {
    setSidebarCollapse(!sidebarCollapse);
  };

  return (
    <div className="sidebar"
    style={{ width: sidebarCollapse ? '100px' : '300px' }}
    >
      <div className="sidebar__header"
      style={{
        gap: sidebarCollapse ? '10px' : '', 
      }}

      >
        <div className="sidebar__header__left">
          <div className="sidebar__header__left__app-icon">
            <TaskAltIcon style={{ fontSize: "40px", color: "#748EE9" }} />
          </div>
          {!sidebarCollapse && <div className="sidebar__header__left__app-name">Sxide</div>}
        </div>
        <div className="sidebar__header__right" onClick={toggleSidebarCollapse}>
          {!sidebarCollapse ? ( <ArrowBackIosIcon style={{ fontSize: "15px" }}
          className="arrow-back-icon"
          /> ) : <ArrowForwardIosIcon style={{ fontSize: "15px" }}
          className="arrow-back-icon"
          />}
        </div>
      </div>
      {/* <div className="sidebar__bar"></div> */}
      <div className="sidebar__content">
        {sidebarItems.map((item, index) => (
          <div  key={index} className="sidebar__content__element" style={{
            // width: sidebarCollapse ? '53%' : '', 
          }} >
            <div className="sidebar__content__element__icon">{item.icon}</div>
            {!sidebarCollapse && <div className="sidebar__content__element__label">{item.label}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
