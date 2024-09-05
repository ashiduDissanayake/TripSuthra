import React from 'react';
import CollapsibleSidebar from "../components/collapseSidebar";
import SideNavbar from "../components/sidebar-nav";

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <CollapsibleSidebar />

      <div className="flex flex-col flex-grow">
        {/* Navbar */}
        <div className="bg-gray-200 text-white">
        <SideNavbar />
        </div>

        {/* Main Content */}
        <main className="flex-grow p-4">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
