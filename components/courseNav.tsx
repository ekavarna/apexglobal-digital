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
      ? "text-white text-semibold bg-gradient-to-r from-apex-green to-apex-blue-light rounded-lg p-3.5"
      : "";
  };

  return (
    <ul className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 list-none">
      {navItems.map((item, index) => (
        <li key={index} className="menu-item">
          <Link
            href={item.href}
            onClick={() => handleLinkClick(item.href)}
            className={`text-apex-text text-lg pb-3 font-medium hover:text-apex-blue-dark hover:underline decoration-2 hover:underline-offset-4 transition-colors duration-200 ${getActiveClass(
              item.href
            )}`}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default CourseNav;
