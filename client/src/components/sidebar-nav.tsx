import React, { useState, useRef, useEffect } from "react";
import {
  Bell,
  CheckCircle as CheckIcon,
  LogOut as LogoutIcon,
} from "lucide-react";

const SideNavbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, message: "New order received!" },
    { id: 2, message: "Your order has been shipped!" },
  ]);
  const [showNotifications, setShowNotifications] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const notificationsRef = useRef(null);

  const handleNotificationClick = () => {
    setShowNotifications(!showNotifications);
  };

  const handleMarkAsRead = () => {
    setFadeOut(true);
    setTimeout(() => {
      setNotifications([]);
      setFadeOut(false); // Reset fadeOut state for future notifications
    }, 300); // Match the duration of the fade-out animation
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        notificationsRef.current &&
        !notificationsRef.current.contains(event.target)
      ) {
        setShowNotifications(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Inline styles
  const notificationItemStyle = {
    transition: "opacity 0.3s ease-in-out",
    opacity: fadeOut ? 0 : 1,
  };

  return (
    <div className="flex items-center justify-end p-4">
      <div
        className={`flex items-center ${isCollapsed ? "justify-center" : ""}`}
      >
        <div className="relative" ref={notificationsRef}>
          <Bell
            size={isCollapsed ? 20 : 24}
            className="text-gray-800 cursor-pointer"
            onClick={handleNotificationClick}
          />
          {notifications.length > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
              {notifications.length}
            </span>
          )}
          {showNotifications && (
            <div className="absolute right-0 mt-2 w-64 bg-gray-800 text-white shadow-lg rounded-lg">
              <div className="p-2 border-b border-gray-700 font-semibold text-lg flex items-center justify-between">
                <span>Notifications</span>
                <button
                  className="bg-green-500 text-white p-1 rounded-lg hover:bg-green-600 flex items-center"
                  onClick={handleMarkAsRead}
                >
                  <CheckIcon size={20} />
                </button>
              </div>
              <ul>
                {notifications.map((notification) => (
                  <li
                    key={notification.id}
                    style={notificationItemStyle}
                    className="notification-item p-3 border-b border-gray-700 flex items-center text-sm"
                  >
                    <Bell className="mr-2 text-yellow-400" size={16} />
                    {notification.message}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SideNavbar;
