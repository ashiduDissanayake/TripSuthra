import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { useNavigate } from "react-router-dom";
import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import clsx from "clsx";
import img1 from "@/assets/11.png";
import { siteConfig } from "@/config/site"; // Ensure siteConfig is correctly defined


export const Navbar = ({ user }) => {
  const navigate = useNavigate();

  return (
    <NextUINavbar maxWidth="xl" position="sticky" className="flex justify-space-between">
      {/* Logo Section */}
      <NavbarContent className="flex justify-start">
        <NavbarBrand className="gap-3 max-w-fit">
          <Link className="flex justify-start items-center gap-1" color="foreground" href="/">
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
      {user ? (
        <NavbarContent className="flex justify-end items-center" data-justify="end">
          <NavbarItem>
            <img
              src={user.avatarUrl}
              alt="User Avatar"
              className="w-8 h-8 rounded-full cursor-pointer"
              onClick={() => {
                // Handle avatar click
                navigate("/user");
              }}
            />
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
