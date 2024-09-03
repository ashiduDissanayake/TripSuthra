import React from "react";
import { Link } from "@nextui-org/link";
import {
  FaFacebookF as FacebookIcon,
  FaInstagram as InstagramIcon,
  FaLinkedinIn as LinkedInIcon,
} from "react-icons/fa";
import img1 from "@/assets/white main.png";

const Footer = () => {
  return (
    <footer className="bg-teal-700 text-white py-16">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-8 px-4">
        {/* Logo & Description */}
        <div className="flex flex-col items-center justify-center text-center">
          <img src={img1} alt="Trip Suthra" className="w-16 mb-4" />
          <p className="text-sm max-w-xs">
            With lots of technology and experienced team we are here front you
            guiding to the wisdom.
          </p>
          <div className="flex gap-4 mt-4 justify-center">
            <Link href="https://facebook.com" isExternal>
              <FacebookIcon className="text-white hover:text-gray-300 transition-colors" />
            </Link>
            <Link href="https://instagram.com" isExternal>
              <InstagramIcon className="text-white hover:text-gray-300 transition-colors" />
            </Link>
            <Link href="https://linkedin.com" isExternal>
              <LinkedInIcon className="text-white hover:text-gray-300 transition-colors" />
            </Link>
          </div>
        </div>

        {/* Links Section */}
        <div className="flex flex-wrap justify-between w-full md:w-auto gap-8">
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about-us"
                  className="text-sm text-white hover:text-gray-400 transition-colors duration-300"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="text-sm text-white hover:text-gray-400 transition-colors duration-300"
                >
                  Contact us
                </Link>
              </li>
              <li>
                <Link
                  href="/faqs"
                  className="text-sm text-white hover:text-gray-400 transition-colors duration-300"
                >
                  FAQ’s
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className="text-sm text-white hover:text-gray-400 transition-colors duration-300"
                >
                  News
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Product</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/traveller-ai"
                  className="text-sm text-white hover:text-gray-400 transition-colors duration-300"
                >
                  Traveller.ai
                </Link>
              </li>
              <li>
                <Link
                  href="/book-me"
                  className="text-sm text-white hover:text-gray-400 transition-colors duration-300"
                >
                  Book Me
                </Link>
              </li>
              <li>
                <Link
                  href="/hire-me"
                  className="text-sm text-white hover:text-gray-400 transition-colors duration-300"
                >
                  Hire Me
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/personalising"
                  className="text-sm text-white hover:text-gray-400 transition-colors duration-300"
                >
                  Personalising
                </Link>
              </li>
              <li>
                <Link
                  href="/accommodation"
                  className="text-sm text-white hover:text-gray-400 transition-colors duration-300"
                >
                  Accommodation
                </Link>
              </li>
              <li>
                <Link
                  href="/food"
                  className="text-sm text-white hover:text-gray-400 transition-colors duration-300"
                >
                  Food
                </Link>
              </li>
              <li>
                <Link
                  href="/guides"
                  className="text-sm text-white hover:text-gray-400 transition-colors duration-300"
                >
                  Guides
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-sm text-white hover:text-gray-400 transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-conditions"
                  className="text-sm text-white hover:text-gray-400 transition-colors duration-300"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/return-policy"
                  className="text-sm text-white hover:text-gray-400 transition-colors duration-300"
                >
                  Return Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
