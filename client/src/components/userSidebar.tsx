// components/CollapsibleSidebar.js
import React, { useState } from "react";
import {
  FaHome as DashboardIcon,
  FaUserFriends as UsersIcon,
  FaCog as SettingsIcon,
  FaFileAlt as ReportsIcon,
  FaSignOutAlt as LogoutIcon,
} from "react-icons/fa";

import img_l from "../assets/white main.png";
import img_s from "../assets/short.png";

const UserSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => setIsCollapsed(!isCollapsed);

  return (
    <div
      className={`flex ${!isCollapsed ? "w-64" : "w-16"} h-screen bg-gray-800 text-white transition-width duration-300`}
    >
      {/* Sidebar Content */}
      <div className="flex flex-col w-full h-full">
        <div className="p-4 flex items-center justify-center">
          <div
            onClick={toggleCollapse}
            className="cursor-pointer flex items-center justify-center bg-gray-800 hover:bg-gray-800 mt-6"
          >
            <img
              src={isCollapsed ? img_s : img_l}
              alt="Logo"
              className={`flex ${isCollapsed ? "" : ""}`}
            />
          </div>
        </div>

        <div className="flex flex-col flex-grow mt-8">
          <a
            href="/dashboard"
            className={`flex items-center p-4 hover:bg-custom-teal ${isCollapsed ? "justify-center" : ""}`}
          >
            <DashboardIcon
              size={24}
              className={`${isCollapsed ? "" : "mr-4"}`}
            />
            <span className={`text-white ${isCollapsed ? "hidden" : "block"}`}>
              Dashboard
            </span>
          </a>
          <a
            href="/users"
            className={`flex items-center p-4 hover:bg-custom-teal ${isCollapsed ? "justify-center" : ""}`}
          >
            <UsersIcon size={24} className={`${isCollapsed ? "" : "mr-4"}`} />
            <span className={`text-white ${isCollapsed ? "hidden" : "block"}`}>
              Users
            </span>
          </a>

          <a
            href="/settings"
            className={`flex items-center p-4 hover:bg-custom-teal ${isCollapsed ? "justify-center" : ""}`}
          >
            <SettingsIcon
              size={24}
              className={`${isCollapsed ? "" : "mr-4"}`}
            />
            <span className={`text-white ${isCollapsed ? "hidden" : "block"}`}>
              Settings
            </span>
          </a>
          <a
            href="/reports"
            className={`flex items-center p-4 hover:bg-custom-teal ${isCollapsed ? "justify-center" : ""}`}
          >
            <ReportsIcon size={24} className={`${isCollapsed ? "" : "mr-4"}`} />
            <span className={`text-white ${isCollapsed ? "hidden" : "block"}`}>
              Reports
            </span>
          </a>
        </div>

        <div className="flex flex-col flex-grow mt-8">
        <a
            href="/logout"
            className={`flex items-center p-4 hover:bg-custom-teal ${isCollapsed ? "justify-center" : ""}`}
          >
            <LogoutIcon size={24} className={`${isCollapsed ? "" : "mr-4"}`} />
            <span className={`text-white ${isCollapsed ? "hidden" : "block"}`}>
              Logout
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserSidebar;
