"use client";

import Link from "next/link";
import { FC } from "react";
import { useState, useEffect } from "react";

// Define the shape of a single nav item
interface NavItem {
  href: string;
  label: string;
}

// Define the props interface for the CourseNav component
interface CourseNavProps {
  navItems: NavItem[];
}

const CourseNav: FC<CourseNavProps> = ({ navItems }) => {
  const [activeHash, setActiveHash] = useState<string>("");

  useEffect(() => {
    // Set initial hash
    setActiveHash(window.location.hash || "");

    // Handle hash changes
    const handleHashChange = () => {
      console.log("Hash changed to:", window.location.hash); // Debug log
      setActiveHash(window.location.hash || "");
    };

    window.addEventListener("hashchange", handleHashChange);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const handleLinkClick = (href: string) => {
    // Update activeHash when a link is clicked
    setActiveHash(href);
  };

  const getActiveClass = (href: string) => {
    return activeHash === href
      ? "text-white font-semibold bg-gradient-to-r from-apex-green to-apex-blue-light rounded-lg px-3 py-2 "
      : "";
  };
  const getLinkClass = (href: string) => {
    return activeHash === href
      ? "text-white font-medium" // No hover styles for active item
      : "text-apex-text font-medium hover:text-apex-blue-dark hover:underline decoration-2 hover:underline-offset-4";
  };

  return (
    <div className="w-full overflow-x-auto overflow-y-hidden scrollbar-hide">
      <ul className="flex flex-row justify-start md:justify-center items-center space-x-4 md:space-x-8 list-none px-4  md:p-0 whitespace-nowrap ">
        {navItems.map((item, index) => (
          <li
            key={index}
            className={`menu-item flex-shrink-0 ${getActiveClass(item.href)}`}
          >
            <Link
              href={item.href}
              onClick={() => handleLinkClick(item.href)}
              className={`text-lg transition-colors duration-200 ${getLinkClass(
                item.href
              )}`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseNav;
