import React from "react";
import Image from "next/image";

const Nav: React.FC = () => {
  return (
    <header className="bg-white text-apex-blue-dark fixed w-full top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center flex-wrap">
        {/* Left Logo and Dropdown */}
        <div className="flex items-center space-x-6">
          <Image
            className="h-12 w-auto"
            src="/apex-logo.png"
            alt="Apex Global Learning Logo"
            width={150}
            height={48}
          />

          <div className="relative group">
            <button className="flex items-center bg-apex-blue-light p-3 rounded-lg text-white space-x-2 hover:text-gray-300 transition-colors">
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
            <div className="absolute hidden group-hover:block bg-white text-gray-900 shadow-lg rounded-md mt-2 w-64">
              <a
                href="/local/tenant/coursedetails.php?catname=Sustainability Reporting Fundamentals"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Sustainability Reporting Fundamentals
              </a>
              <a
                href="/local/tenant/coursedetails.php?catname=Business Continuity Management 101"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Business Continuity Management Systems
              </a>
            </div>
          </div>
        </div>

        {/* Right Menu */}
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <a
            href="https://www.apexgloballearning.com/enterprise/custom-content-design/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-apex-blue-light transition-colors"
          >
            eLearning
          </a>
          <a
            href="/local/tenant/viewflowpage.php#aboutus"
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
      </div>
    </header>
  );
};

export default Nav;
