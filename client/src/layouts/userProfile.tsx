import React from "react";
import SideNavbar from "../components/sidebar-nav";
import UserSidebar from "@/components/userSidebar";
import ProtectedRoute from "./protectedRoute";

const UserLayout = ({ children }) => {
  return (
    <ProtectedRoute>
      <div className="flex h-screen">
        {/* Sidebar */}
        <UserSidebar />

        <div className="flex flex-col flex-grow">
          {/* Navbar */}
          <div className="bg-gray-200 text-white">
            <SideNavbar />
          </div>

          {/* Main Content */}
          <main className="flex-grow p-4">{children}</main>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default UserLayout;
