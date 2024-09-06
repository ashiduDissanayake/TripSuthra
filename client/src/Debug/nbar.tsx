import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import clsx from "clsx";
import { useState } from "react"; // To handle login state
import { siteConfig } from "@/config/site";
import img1 from "@/assets/11.png";

export const Nbar = ({ user }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(user ? true : false); // Check if user is logged in based on user prop

  // Logout handler (you can customize this function based on your app's auth flow)
  const handleLogout = () => {
    // Perform logout logic (e.g., clear user token, redirect to login, etc.)
    setIsLoggedIn(false);
    // Redirect to home or login page
    window.location.href = "/";
  };

  return (
    <NextUINavbar
      maxWidth="xl"
      position="sticky"
      className="flex justify-space-between"
    >
      {/* Logo Section */}
      <NavbarContent className="flex justify-start">
        <NavbarBrand className="gap-3 max-w-fit">
          <Link
            className="flex justify-start items-center gap-1"
            color="foreground"
            href="/"
          >
            <img src={img1} alt="TripSuthra" className="w-16" />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      {/* Middle Section (Navigation Items) */}
      <NavbarContent className="flex justify-start">
        {siteConfig.navItems.slice(0, 4).map((item) => (
          <NavbarItem key={item.href}>
            <Link
              className={clsx(
                "px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ease-in-out",
                "text-gray-500 hover:text-black",
                "focus:outline-none focus:text-black",
                "data-[active=true]:text-black data-[active=true]:font-semibold"
              )}
              href={item.href}
            >
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* End Section (Avatar or Login & Signup) */}
      {isLoggedIn ? (
        <NavbarContent className="flex justify-end items-center">
          <NavbarItem>
            <img
              src={user.avatarUrl}
              alt="User Avatar"
              className="w-8 h-8 rounded-full cursor-pointer"
              onClick={() => {
                // Handle avatar click, e.g., toggle a dropdown menu
              }}
            />
          </NavbarItem>
          <NavbarItem>
            <Button
              className="ml-4 bg-red-500 hover:bg-red-600 text-white"
              onClick={handleLogout}
            >
              Log Out
            </Button>
          </NavbarItem>
        </NavbarContent>
      ) : (
        <NavbarContent className="flex justify-end" data-justify="end">
          <NavbarItem>
            <Link
              className={clsx(
                "px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ease-in-out",
                "text-gray-500 hover:text-black",
                "focus:outline-none focus:text-black"
              )}
              href="/login"
            >
              Log In
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className={clsx(
                "px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ease-in-out",
                "text-white bg-[#087E8B] hover:bg-[#065F65]"
              )}
              href="/signup"
            >
              Sign Up
            </Link>
          </NavbarItem>
        </NavbarContent>
      )}
    </NextUINavbar>
  );
};
