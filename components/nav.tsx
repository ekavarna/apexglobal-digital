"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

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

// Define enterprise dropdown data
const enterpriseDropdown = [
  {
    title: "Corporate Training",
    href: "https://www.apexgloballearning.com/enterprise/corporate-training/",
  },
  {
    title: "Custom Content Design",
    href: "https://www.apexgloballearning.com/enterprise/custom-content-design/",
  },
  {
    title: "Custom LMS",
    href: "https://www.apexgloballearning.com/enterprise/custom-lms/",
  },
  {
    title: "Managed Learning Services",
    href: "https://www.apexgloballearning.com/enterprise/managed-learning-services/",
  },
];

const Nav: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCourseDropdownOpen, setIsCourseDropdownOpen] = useState(false);
  const [isEnterpriseDropdownOpen, setIsEnterpriseDropdownOpen] =
    useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState(courses);
  const pathname = usePathname();
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsCourseDropdownOpen(false);
    setIsEnterpriseDropdownOpen(false);
  };

  const toggleCourseDropdown = () => {
    setIsCourseDropdownOpen(!isCourseDropdownOpen);
    setIsEnterpriseDropdownOpen(false);
  };

  const toggleEnterpriseDropdown = () => {
    setIsEnterpriseDropdownOpen(!isEnterpriseDropdownOpen);
    setIsCourseDropdownOpen(false);
  };

  const closeDropdowns = () => {
    setIsCourseDropdownOpen(false);
    setIsEnterpriseDropdownOpen(false);
  };

  // Handle Courses button click to redirect to /courses
  const handleCoursesClick = () => {
    router.push("/courses");
    closeDropdowns();
  };

  // Handle search input
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    if (query.trim() === "") {
      setSearchResults(courses);
    } else {
      const filtered = courses.filter((course) =>
        course.title.toLowerCase().includes(query)
      );
      setSearchResults(filtered);
    }
  };

  // Clear search
  const clearSearch = () => {
    setSearchQuery("");
    setSearchResults(courses);
  };

  // Reset dropdown and mobile menu on pathname change
  useEffect(() => {
    setIsCourseDropdownOpen(false);
    setIsEnterpriseDropdownOpen(false);
    setIsMenuOpen(false);
  }, [pathname]);

  // Render search dropdown
  const renderSearchDropdown = () => (
    <div className="absolute top-full left-0 mt-1 w-64 bg-white text-gray-900 shadow-lg rounded-md z-50 border border-gray-200">
      {searchResults.length > 0 ? (
        <div className="max-h-64 overflow-y-auto">
          {searchResults.map((course) => (
            <Link
              key={course.href}
              href={course.href}
              className="block px-4 py-3 hover:bg-gray-100 border-b border-gray-100 last:border-b-0 text-apex-blue-dark"
              onClick={() => {
                clearSearch();
                if (isMenuOpen) toggleMenu();
              }}
            >
              <div className="font-medium">{course.title}</div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="px-4 py-3 text-gray-500 text-sm">
          No courses found matching {searchQuery}
        </div>
      )}
      {searchQuery && searchResults.length > 0 && (
        <div className="px-4 py-2 bg-gray-50 border-t border-gray-200">
          <button
            onClick={clearSearch}
            className="text-xs text-gray-500 hover:text-apex-blue-dark underline"
          >
            Clear search
          </button>
        </div>
      )}
    </div>
  );

  // Shared dropdown menu component
  const renderDropdownMenu = (
    items: { title: string; href: string }[],
    isMobile: boolean = false,
    isCourseMenu: boolean = false
  ) => (
    <div
      className={`${
        isMobile
          ? "mt-2 space-y-2"
          : "absolute bg-white text-gray-900 shadow-lg rounded-md mt-1 w-64 left-0 z-50 transition-opacity duration-200 opacity-0 group-hover:opacity-100 border border-gray-200"
      } ${
        isMobile
          ? (isCourseMenu && isCourseDropdownOpen) ||
            (!isCourseMenu && isEnterpriseDropdownOpen)
            ? "block opacity-100"
            : "hidden"
          : isCourseMenu
          ? isCourseDropdownOpen
            ? "block opacity-100"
            : "hidden"
          : isEnterpriseDropdownOpen
          ? "block opacity-100"
          : "hidden"
      }`}
      onMouseEnter={
        !isMobile
          ? () => {
              if (isCourseMenu) setIsCourseDropdownOpen(true);
              else setIsEnterpriseDropdownOpen(true);
            }
          : undefined
      }
      onMouseLeave={!isMobile ? closeDropdowns : undefined}
    >
      {isMobile && (
        <Link
          href={isCourseMenu ? "/courses" : ""}
          className="block px-4 py-3 hover:bg-gray-100 border-b border-gray-100 text-apex-blue-dark font-semibold"
          onClick={() => {
            closeDropdowns();
            toggleMenu();
          }}
        >
          {isCourseMenu ? "All Courses" : ""}
        </Link>
      )}
      {items.map((item, index) => (
        <Link
          key={item.href}
          href={item.href}
          target={isCourseMenu ? undefined : "_blank"}
          rel={isCourseMenu ? undefined : "noopener noreferrer"}
          className={`block px-4 py-3 hover:bg-gray-100 border-b border-gray-100 last:border-b-0 ${
            isMobile ? "text-apex-blue-dark" : ""
          } ${index === 0 && !isMobile ? "rounded-t-md" : ""} ${
            index === items.length - 1 ? "rounded-b-md" : ""
          }`}
          onClick={() => {
            closeDropdowns();
            if (isMobile) toggleMenu();
          }}
        >
          {item.title}
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
        {/* Left Logo, Courses Dropdown, and Search Bar */}
        <div className="flex items-center space-x-6 lg:space-x-12">
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

          {/* Desktop Courses Dropdown */}
          <div className="hidden lg:block relative group">
            <button
              className="flex items-center bg-apex-blue-light py-3 px-6 rounded-lg text-white space-x-3 hover:text-gray-300 transition-colors cursor-pointer"
              onMouseEnter={() => setIsCourseDropdownOpen(true)}
              onMouseLeave={() => setIsCourseDropdownOpen(false)}
              onClick={handleCoursesClick}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 8 8"
                fill="none"
                strokeLinecap="round"
                className="w-6"
              >
                <path
                  d="m1 1H8M1 4H8M1 7H8"
                  stroke="#fff"
                  strokeDasharray="0,3"
                />
              </svg>
              <span className="block tracking-wide">eLearning</span>
            </button>
            {renderDropdownMenu(courses, false, true)}
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:block relative">
            <div className="relative">
              <input
                type="text"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={handleSearch}
                className="w-84 pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-apex-blue-light focus:border-transparent text-sm"
              />
              <svg
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              )}
              {searchQuery && renderSearchDropdown()}
            </div>
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
        <div className="hidden md:flex items-center space-x-12">
          <div className="relative group">
            <button
              className="flex items-center space-x-2 hover:text-apex-blue-light transition-colors py-2"
              onMouseEnter={() => setIsEnterpriseDropdownOpen(true)}
              onMouseLeave={() => setIsEnterpriseDropdownOpen(false)}
            >
              <span>Enterprise</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className={`${
                  isEnterpriseDropdownOpen ? "rotate-180" : ""
                } transition-transform`}
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                />
              </svg>
            </button>
            {renderDropdownMenu(enterpriseDropdown, false, false)}
          </div>

          <a
            href="https://www.apexgloballearning.com/about-us/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-apex-blue-light transition-colors py-2"
          >
            About Us
          </a>
          <a
            href="https://www.apexgloballearning.com/contact-us/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent hover:bg-apex-blue-light text-apex-blue-light border-2 border-apex-blue-light px-6 py-2 rounded-md transition-colors whitespace-nowrap"
          >
            Contact Us
          </a>
        </div>

        {/* Mobile Slide-in Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
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

            {/* Mobile Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={handleSearch}
                className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-apex-blue-light focus:border-transparent text-sm"
              />
              <svg
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              )}
              {searchQuery && (
                <div className="absolute top-full left-0 mt-1 w-full bg-white text-gray-900 shadow-lg rounded-md z-10 border border-gray-200 max-h-64 overflow-y-auto">
                  {searchResults.map((course) => (
                    <Link
                      key={course.href}
                      href={course.href}
                      className="block px-4 py-3 hover:bg-gray-100 border-b border-gray-100 last:border-b-0 text-apex-blue-dark"
                      onClick={() => {
                        clearSearch();
                        toggleMenu();
                      }}
                    >
                      <div className="font-medium">{course.title}</div>
                    </Link>
                  ))}
                  {searchResults.length === 0 && (
                    <div className="px-4 py-3 text-gray-500 text-sm">
                      No courses found matching {searchQuery}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Mobile Courses Menu */}
            <div className="border-b border-gray-200">
              <button
                className="flex items-center justify-between w-full p-2 text-left text-apex-blue-dark font-semibold"
                onClick={toggleCourseDropdown}
              >
                Courses
                <svg
                  width="15"
                  height="8"
                  viewBox="0 0 15 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`${
                    isCourseDropdownOpen ? "rotate-180" : ""
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
              {isCourseDropdownOpen && renderDropdownMenu(courses, true, true)}
            </div>

            {/* Mobile Enterprise Menu */}
            <div className="border-b border-gray-200">
              <button
                className="flex items-center justify-between w-full p-2 text-left text-apex-blue-dark font-semibold"
                onClick={toggleEnterpriseDropdown}
              >
                Enterprise
                <svg
                  width="15"
                  height="8"
                  viewBox="0 0 15 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`${
                    isEnterpriseDropdownOpen ? "rotate-180" : ""
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
              {isEnterpriseDropdownOpen &&
                renderDropdownMenu(enterpriseDropdown, true, false)}
            </div>

            {/* Mobile Navigation Links */}

            <Link
              href="https://www.apexgloballearning.com/about-us/"
              target="_blank"
              rel="noopener noreferrer"
              className="block py-3 hover:text-apex-blue-light transition-colors border-b border-gray-200"
              onClick={toggleMenu}
            >
              About Us
            </Link>
            <Link
              href="https://www.apexgloballearning.com/contact-us/"
              target="_blank"
              rel="noopener noreferrer"
              className="block py-3 text-apex-blue-light border-2 border-apex-blue-light text-center rounded-md hover:bg-apex-blue-light hover:text-white transition-colors"
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
