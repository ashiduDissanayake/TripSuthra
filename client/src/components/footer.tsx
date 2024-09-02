import React from "react";
import { Link } from "@nextui-org/link";
import {
  FaFacebookF as FacebookIcon,
  FaInstagram as InstagramIcon,
  FaLinkedinIn as LinkedInIcon,
} from "react-icons/fa";
import img1 from "@/assets/11.png";

const Footer = () => {
  return (
    <footer className="bg-teal-700 text-white py-16">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-8 px-4">
        {/* Logo & Description */}
        <div className="flex flex-col items-start">
          <img
            src={img1}
            alt="Trip Suthra"
            className="w-32 mb-4"
          />
          <p className="text-sm max-w-xs">
            With lots of technology and experienced team we are here front you
            guiding to the wisdom.
          </p>
          <div className="flex gap-4 mt-4">
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
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about-us"
                  className="text-sm hover:text-gray-300 transition-colors"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="text-sm hover:text-gray-300 transition-colors"
                >
                  Contact us
                </Link>
              </li>
              <li>
                <Link
                  href="/faqs"
                  className="text-sm hover:text-gray-300 transition-colors"
                >
                  FAQ’s
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className="text-sm hover:text-gray-300 transition-colors"
                >
                  News
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/traveller-ai"
                  className="text-sm hover:text-gray-300 transition-colors"
                >
                  Traveller.ai
                </Link>
              </li>
              <li>
                <Link
                  href="/book-me"
                  className="text-sm hover:text-gray-300 transition-colors"
                >
                  Book Me
                </Link>
              </li>
              <li>
                <Link
                  href="/hire-me"
                  className="text-sm hover:text-gray-300 transition-colors"
                >
                  Hire Me
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/personalising"
                  className="text-sm hover:text-gray-300 transition-colors"
                >
                  Personalising
                </Link>
              </li>
              <li>
                <Link
                  href="/accommodation"
                  className="text-sm hover:text-gray-300 transition-colors"
                >
                  Accommodation
                </Link>
              </li>
              <li>
                <Link
                  href="/food"
                  className="text-sm hover:text-gray-300 transition-colors"
                >
                  Food
                </Link>
              </li>
              <li>
                <Link
                  href="/guides"
                  className="text-sm hover:text-gray-300 transition-colors"
                >
                  Guides
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-sm hover:text-gray-300 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-conditions"
                  className="text-sm hover:text-gray-300 transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/return-policy"
                  className="text-sm hover:text-gray-300 transition-colors"
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
