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

import { siteConfig } from "@/config/site";
import img1 from "@/assets/11.png";

export const Navbar = () => {
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

      {/* End Section (Login & Signup) */}

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
              "text-white bg-primary hover:bg-primary-dark"
            )}
            href="/signup"
          >
            Sign Up
          </Link>
        </NavbarItem>
      </NavbarContent>
    </NextUINavbar>
  );
};
