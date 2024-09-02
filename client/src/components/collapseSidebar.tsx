// components/CollapsibleSidebar.js
import React, { useState } from "react";
import {
  FaHome as DashboardIcon,
  FaUserFriends as UsersIcon,
  FaCog as SettingsIcon,
  FaFileAlt as ReportsIcon,
  FaSignOutAlt as LogoutIcon,
} from "react-icons/fa";
import { MdMenu as MenuIcon, MdClose as XIcon } from "react-icons/md";

import { Button } from "./ui/button";

const CollapsibleSidebar = () => {
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
          <Button onClick={toggleCollapse}>
            {/* Add your site logo here */}
            <img
              src="/logo.png"
              alt="Logo"
              className={`transition-transform ${isCollapsed ? "transform rotate-180" : ""}`}
            />
          </Button>
        </div>

        <div className="flex flex-col flex-grow mt-8">
          <a
            href="/dashboard"
            className={`flex items-center p-4 hover:bg-gray-700 ${isCollapsed ? "justify-center" : ""}`}
          >
            <DashboardIcon className={`${isCollapsed ? '' : 'mr-4'}`} />
            <span className={`text-white ${isCollapsed ? "hidden" : "block"}`}>
              Dashboard
            </span>
          </a>
          <a
            href="/users"
            className={`flex items-center p-4 hover:bg-gray-700 ${isCollapsed ? "justify-center" : ""}`}
          >
            <UsersIcon className={`${isCollapsed ? '' : 'mr-4'}`} />
            <span className={`text-white ${isCollapsed ? "hidden" : "block"}`}>
              Users
            </span>
          </a>

          <a
            href="/settings"
            className={`flex items-center p-4 hover:bg-gray-700 ${isCollapsed ? "justify-center" : ""}`}
          >
            <SettingsIcon className={`${isCollapsed ? '' : 'mr-4'}`} />
            <span className={`text-white ${isCollapsed ? "hidden" : "block"}`}>
              Settings
            </span>
          </a>
          <a
            href="/reports"
            className={`flex items-center p-4 hover:bg-gray-700 ${isCollapsed ? "justify-center" : ""}`}
          >
            <ReportsIcon className={`${isCollapsed ? '' : 'mr-4'}`} />
            <span className={`text-white ${isCollapsed ? "hidden" : "block"}`}>
              Reports
            </span>
          </a>
          <a
            href="/logout"
            className={`flex items-center p-4 hover:bg-gray-700 ${isCollapsed ? "justify-center" : ""}`}
          >
            <LogoutIcon className={`${isCollapsed ? '' : 'mr-4'}`} />
            <span className={`text-white ${isCollapsed ? "hidden" : "block"}`}>
              Logout
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CollapsibleSidebar;
