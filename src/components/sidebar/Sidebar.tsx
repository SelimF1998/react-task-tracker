import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import GridViewIcon from "@mui/icons-material/GridView";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";

import "./Sidebar.scss";
interface SidebarItem {
  path: string;
  label: string;
  icon: React.ReactNode; // React component for the icon
}

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const COLLAPSE_THRESHOLD = 1100;
  const [sidebarCollapse, setSidebarCollapse] = useState<boolean>(false);
  const [selectedSiderbarItem, setSelectedSiderbarItem] = useState<string>('');

  const handleItemClick = (path: string, label: string) => {
    console.log("Label:", label);
    setSelectedSiderbarItem(label);
    navigate(path);
  };

  useEffect(() => {
    const currentPath = location.pathname;
    console.log("Current Path:", currentPath);
    const item = sidebarItems.find(item => item.path === currentPath);
    if (item) {
      setSelectedSiderbarItem(item.label);
    } else {
      setSelectedSiderbarItem(''); // Reset if no match found
    }
  }, [location]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < COLLAPSE_THRESHOLD) {
        setSidebarCollapse(true);
      } else {
        setSidebarCollapse(false);
      }
    };

    window.addEventListener("resize", handleResize);
  
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleBeforeUnload = (event: BeforeUnloadEvent) => {
    
  };
  
  // Add the event listener for beforeunload
  window.addEventListener('beforeunload', handleBeforeUnload);

  const sidebarItems: SidebarItem[] = [
    {
      path: '/',
      label: "Board",
      icon: <GridViewIcon style={{ fontSize: "20px" }} />,
    },
    {
      path: '/profile',
      label: "Profile",
      icon: (
        <PersonOutlineIcon style={{ fontSize: "20px" }} />
      ),
    },
    {
      path: '/messages',
      label: "Messages",
      icon: (
        <ChatBubbleOutlineIcon style={{ fontSize: "20px" }} />
      ),
    },
    {
      path: '/settings',
      label: "Settings",
      icon: (
        <SettingsOutlinedIcon style={{ fontSize: "20px" }} />
      ),
    },
    {
      path: '/help',
      label: "Help",
      icon: (
        <HelpOutlineOutlinedIcon
          style={{ fontSize: "20px" }}
        />
      ),
    },
  ];

  const toggleSidebarCollapse = () => {
    setSidebarCollapse(!sidebarCollapse);
  };

  return (
    <div
      className="sidebar"
      style={{ width: sidebarCollapse ? "100px" : "300px" }}
    >
      <div
        className="sidebar__header"
        style={{
          gap: sidebarCollapse ? "10px" : "",
        }}
      >
        <div className="sidebar__header__left">
          <div className="sidebar__header__left__app-icon">
            <TaskAltIcon style={{ fontSize: "40px", color: "#748EE9" }} />
          </div>
          {!sidebarCollapse && (
            <div className="sidebar__header__left__app-name">Carti</div>
          )}
        </div>
        <div className="sidebar__header__right" onClick={toggleSidebarCollapse}>
          {!sidebarCollapse ? (
            <ArrowBackIosIcon
              style={{ fontSize: "15px", color: "#4a4a4a" }}
              className="arrow-back-icon"
            />
          ) : (
            <ArrowForwardIosIcon
              style={{ fontSize: "15px", color: "#4a4a4a" }}
              className="arrow-back-icon"
            />
          )}
        </div>
      </div>
      {/* <div className="sidebar__bar"></div> */}
      <div className="sidebar__content">
        {sidebarItems.map((item, index) => (
          <div
            key={index}
            className="sidebar__content__element"
            style={{
              // width: sidebarCollapse ? '53%' : '',
              justifyContent: sidebarCollapse ? "center" : "",
              background: item.label === selectedSiderbarItem ? '#3f3b3b' : ''
            }}
            onClick={() => handleItemClick(item.path, item.label)}
          >
            <div className="sidebar__content__element__icon" style={{
                color: item.label === selectedSiderbarItem ? 'white' : ''
              }} >{item.icon}</div>
            {!sidebarCollapse && (
              <div className="sidebar__content__element__label" style={{
                color: item.label === selectedSiderbarItem ? 'white' : ''
              }}>
                {item.label}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
