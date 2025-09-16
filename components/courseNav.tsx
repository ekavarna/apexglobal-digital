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

  // Handle scroll to section with offset for sticky nav
  const scrollToSection = (hash: string) => {
    if (!hash) return;

    setTimeout(() => {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        // Calculate sticky nav height (top-20 ~ 80px)
        const navElement = document.querySelector(".sticky");
        const navHeight =
          navElement instanceof HTMLElement ? navElement.offsetHeight : 80;
        const elementPosition =
          element.getBoundingClientRect().top + window.scrollY;

        window.scrollTo({
          top: elementPosition - navHeight - 40,
          behavior: "smooth",
        });
      } else {
        console.warn(`Element with ID "${id}" not found`);
      }
    }, 100); // Delay to ensure DOM is ready
  };

  useEffect(() => {
    // Set initial hash and scroll on page load
    const initialHash = window.location.hash || "";
    setActiveHash(initialHash);
    if (initialHash) {
      scrollToSection(initialHash);
    }

    // Handle hash changes (e.g., browser back/forward)
    const handleHashChange = () => {
      const newHash = window.location.hash || "";
      console.log("Hash changed to:", newHash); // Debug log
      setActiveHash(newHash);
      scrollToSection(newHash);
    };

    window.addEventListener("hashchange", handleHashChange);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const handleLinkClick = (href: string) => {
    // Update activeHash and trigger scroll
    setActiveHash(href);
    scrollToSection(href);
  };

  const getActiveClass = (href: string) => {
    return activeHash === href
      ? "text-white font-semibold bg-gradient-to-r from-apex-green to-apex-blue-light rounded-lg px-3 py-2"
      : "";
  };

  const getLinkClass = (href: string) => {
    return activeHash === href
      ? "text-white font-medium"
      : "text-apex-text font-medium hover:text-apex-blue-dark hover:underline decoration-2 hover:underline-offset-4";
  };

  return (
    <div className="w-full overflow-x-auto overflow-y-hidden scrollbar-hide">
      <ul className="flex flex-row justify-start md:justify-center items-center space-x-4 md:space-x-8 list-none px-4 md:p-0 whitespace-nowrap">
        {navItems.map((item, index) => (
          <li
            key={index}
            className={`menu-item flex-shrink-0 ${getActiveClass(item.href)}`}
          >
            <Link
              href={item.href}
              onClick={(e) => {
                e.preventDefault(); // Prevent browser default scroll
                handleLinkClick(item.href);
              }}
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
