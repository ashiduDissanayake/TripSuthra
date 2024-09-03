import { Button } from "@nextui-org/button";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import clsx from "clsx";
import { Avatar } from "@nextui-org/avatar"; // Assuming this is available or you can use a custom avatar component

import { siteConfig } from "@/config/site";
import img1 from "@/assets/11.png";

export const LogNavbar = ({ user }) => {
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

      {/* End Section (Avatar & Profile Options) */}
      <NavbarContent className="flex justify-end items-center">
        {user ? (
          <>
            <NavbarItem className="flex items-center gap-2">
              <Avatar
                src={user.avatarUrl}
                alt="User Avatar"
                className="w-8 h-8"
              />
              <div className="flex flex-col items-end">
                <span className="text-sm font-medium text-gray-700">{user.name}</span>
                <Button
                  auto
                  light
                  color="error"
                  onClick={() => {/* handle logout */}}
                >
                  Logout
                </Button>
              </div>
            </NavbarItem>
          </>
        ) : (
          <>
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
          </>
        )}
      </NavbarContent>
    </NextUINavbar>
  );
};
