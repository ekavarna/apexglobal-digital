"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Use usePathname instead of useRouter

// Define course data
const courses = [
  {
    title: "Sustainability Reporting Fundamentals",
    href: "/courses/sustainability-reporting-fundamentals/",
  },
  {
    title: "Business Continuity Management Systems",
    href: "/courses/business-continuity-management-systems/",
  },
];

const Nav: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname(); // Get current pathname

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Close dropdown when mobile menu is toggled
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  // Reset dropdown and mobile menu on pathname change
  useEffect(() => {
    setIsDropdownOpen(false);
    setIsMenuOpen(false);
  }, [pathname]); // Trigger when pathname changes

  // Shared dropdown menu component
  const renderDropdownMenu = (isMobile: boolean = false) => (
    <div
      className={`${
        isMobile
          ? "mt-2 space-y-2"
          : "absolute bg-white text-gray-900 shadow-lg rounded-md mt-1 w-64 left-0 z-50 transition-opacity duration-200 opacity-0 group-hover:opacity-100"
      } ${isDropdownOpen || isMobile ? "block opacity-100" : "hidden"}`}
      onMouseEnter={!isMobile ? () => setIsDropdownOpen(true) : undefined}
      onMouseLeave={!isMobile ? () => setIsDropdownOpen(false) : undefined}
    >
      {courses.map((course) => (
        <Link
          key={course.href}
          href={course.href}
          className={`block px-4 py-2 hover:bg-gray-100 ${
            isMobile ? "text-apex-blue-dark" : ""
          }`}
          onClick={() => {
            closeDropdown();
            if (isMobile) toggleMenu();
          }}
        >
          {course.title}
        </Link>
      ))}
    </div>
  );

  return (
    <header className="bg-white text-apex-blue-dark fixed w-full top-0 z-50 shadow-md">
      <input
        type="hidden"
        name="newtoken"
        id="newtoken"
        value="CYzQAFHkGNI9NedMDc98ZsZnRATHuMcw"
      />
      <input type="hidden" name="companyval" id="companyval" value="15" />
      <input
        type="hidden"
        name="sessionloginmsg"
        id="sessionloginmsg"
        value=""
      />
      <input
        type="hidden"
        name="loginsesskey"
        id="loginsesskey"
        value="Uz6oQNreeE"
      />

      <div className="container mx-auto px-4 py-4 flex justify-between items-center flex-wrap">
        {/* Left Logo and Dropdown */}
        <div className="flex items-center space-x-6">
          <Link href="https://digital.apexgloballearning.com/">
            <Image
              src="/apex-logo.png"
              alt="Apex Global Learning Logo"
              width={150}
              height={48}
              className="max-h-12 w-auto"
              priority
            />
          </Link>
          {/* Desktop Dropdown */}
          <div className="hidden md:block relative group">
            <button
              className="flex items-center bg-apex-blue-light p-3 rounded-lg text-white space-x-2 hover:text-gray-300 transition-colors"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <span>Courses</span>
              <svg
                width="15"
                height="8"
                viewBox="0 0 15 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.6854 1L7.62638 10L1.56738 1"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            {renderDropdownMenu()}
          </div>
        </div>

        {/* Hamburger Button for Mobile */}
        <button
          className="md:hidden flex items-center p-2 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="https://www.apexgloballearning.com/enterprise/custom-content-design/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-apex-blue-light transition-colors"
          >
            eLearning
          </a>
          <a
            href="https://www.apexgloballearning.com/about-us/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-apex-blue-light transition-colors"
          >
            About Us
          </a>
          <a
            href="https://www.apexgloballearning.com/contact-us/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent hover:bg-apex-blue-light text-apex-blue-light hover:text-white border-2 border-apex-blue-light px-4 py-2 rounded-md transition-colors"
          >
            Contact Us
          </a>
        </div>

        {/* Mobile Slide-in Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden z-50`}
        >
          <div className="flex flex-col p-4 space-y-4">
            {/* Close Button */}
            <button
              className="self-end p-2 focus:outline-none"
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Mobile Courses Menu */}
            <div className="border-b border-gray-200">
              <button
                className="flex items-center justify-between w-full p-2 text-left text-apex-blue-dark font-semibold"
                onClick={toggleDropdown}
              >
                Courses
                <svg
                  width="15"
                  height="8"
                  viewBox="0 0 15 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`${
                    isDropdownOpen ? "rotate-180" : ""
                  } transition-transform`}
                >
                  <path
                    d="M13.6854 1L7.62638 10L1.56738 1"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              {renderDropdownMenu(true)}
            </div>

            {/* Mobile Navigation Links */}
            <Link
              href="https://www.apexgloballearning.com/enterprise/custom-content-design/"
              target="_blank"
              rel="noopener noreferrer"
              className="block py-2 hover:text-apex-blue-light transition-colors"
              onClick={toggleMenu}
            >
              eLearning
            </Link>
            <Link
              href="https://www.apexgloballearning.com/about-us/"
              target="_blank"
              rel="noopener noreferrer"
              className="block py-2 hover:text-apex-blue-light transition-colors"
              onClick={toggleMenu}
            >
              About Us
            </Link>
            <Link
              href="https://www.apexgloballearning.com/contact-us/"
              target="_blank"
              rel="noopener noreferrer"
              className="block py-2 text-apex-blue-light border-2 border-apex-blue-light text-center rounded-md hover:bg-apex-blue-light hover:text-white transition-colors"
              onClick={toggleMenu}
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Overlay for Mobile Menu */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 pt-5 bg-black bg-opacity-50 md:hidden"
            onClick={toggleMenu}
          ></div>
        )}
      </div>
    </header>
  );
};

export default Nav;
