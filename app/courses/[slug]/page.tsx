"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import CourseNav from "@/components/courseNav";
import courses from "../courses.json";
import ModuleCard from "@/components/moduleCard";

// Utility function to slugify course names
const slugify = (text: string) => {
  if (!text) return "";
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
};

const Page = () => {
  const pathname = usePathname();
  const [sanitizedDescription, setSanitizedDescription] = useState<string>("");

  // Extract slug and handle trailing slashes
  const slug = pathname
    ? pathname.split("/").filter(Boolean).pop()?.toLowerCase()
    : "";

  // Find the course that matches the slug
  const course = courses.find((c) => slugify(c.courseName) === slug);

  // Split attendees into three columns dynamically, safely
  const attendees = course?.attendees ?? [];
  const itemsPerColumn = Math.ceil(attendees.length / 3);
  const columns = [
    attendees.slice(0, itemsPerColumn),
    attendees.slice(itemsPerColumn, itemsPerColumn * 2),
    attendees.slice(itemsPerColumn * 2),
  ];

  // Load and sanitize overview description client-side
  useEffect(() => {
    if (course?.overview.overviewDescription) {
      import("dompurify").then((DOMPurify) => {
        setSanitizedDescription(
          DOMPurify.default.sanitize(course.overview.overviewDescription)
        );
      });
    }
  }, [course]);

  // Handle hash navigation and scroll to top of section
  useEffect(() => {
    const handleHashChange = () => {
      // Get the hash from the URL
      const hash = window.location.hash;
      if (!hash) return;

      // Wait for a short delay to ensure DOM is ready
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          // Dynamically calculate nav height (sticky nav is top-20, ~80px)
          const navElement = document.querySelector(".sticky");
          const navHeight = navElement?.offsetHeight || 80; // Fallback to 80px

          // Calculate the target scroll position
          const elementPosition =
            element.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: elementPosition - navHeight,
            behavior: "smooth",
          });
        } else {
          console.warn(`Element with ID ${hash} not found`);
        }
      }, 100); // 100ms delay to ensure DOM updates
    };

    // Handle initial page load with hash
    if (window.location.hash) {
      handleHashChange();
    }

    // Add event listener for hash changes
    window.addEventListener("hashchange", handleHashChange);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  // Debugging: Log course data and nav items
  useEffect(() => {
    console.log("Course Data:", course);
    console.log("Nav Items:", course?.navItems);
  }, [course]);

  if (!course) {
    return (
      <>
        <section className="h-screen flex items-center justify-center bg-[#f7faf7]">
          <div className="relative bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 shadow-2xl rounded-lg py-10">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-900">
                Course Not Found
              </h1>
              <p className="text-gray-700 py-6">
                We couldn&apos;t find the course you&apos;re looking for.
                <br /> Please check the URL or return to the courses page.
              </p>
              <Link
                href="/courses"
                className="mt-4 inline-block global-button rounded-md"
                aria-label="Return to courses page"
              >
                Back to Courses
              </Link>
            </div>
          </div>
        </section>
      </>
    );
  }

  // Get the ID for the section from navItems[1].href
  const dynamicId =
    course.navItems[1]?.href.replace("#", "") || "default-section";

  return (
    <div>
      {/* Banner Section */}
      <section
        className="relative flex items-center mt-20 md:mt-6 md:min-h-[450px] bg-gray-100 py-12 px-4 bg-cover bg-center"
        style={{ backgroundImage: `url('${course.courseBannerImage}')` }}
      >
        <div className="absolute inset-0 bg-apex-blue-dark opacity-80 z-0"></div>
        <div className="relative container mx-auto max-w-7xl z-10">
          <div className="flex flex-col items-start text-left">
            <h1 className="text-xl md:text-5xl md:max-w-6/12 font-semibold text-white mb-4">
              {course.courseName}
            </h1>
            <h2 className="text-xl md:text-2xl text-white font-light mb-6">
              {course.courseSubtitle}
            </h2>
            <Link
              href="https://digitallms.apexgloballearning.com/landingpage/frontpage.php"
              target="_blank"
              className="inline-block global-button rounded-md"
              aria-label={`Enroll in ${course.courseName}`}
            >
              Enroll Now
            </Link>
          </div>
        </div>
      </section>

      {/* Navigation Section */}
      <section className="mx-auto px-4 sticky top-20 bg-white z-10 shadow-lg">
        <div className="container text-center mx-auto py-4">
          <CourseNav navItems={course.navItems} />
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" className="py-12 px-4 bg-[#f7faf7]">
        <div className="relative bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 shadow-xl rounded-lg py-8">
          <div className="absolute left-0 top-0 bg-gradient-to-r from-apex-green to-apex-blue-light text-white font-bold text-base px-4 py-2 rounded-tl-lg">
            OVERVIEW
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8 pt-12">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
                {course.overview.overviewTitle}
              </h2>
              <div
                className="text-base text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: sanitizedDescription }}
              />
            </div>
            <div className="relative">
              <Image
                src={course.overview.overviewImg}
                alt={`Illustration for ${course.courseName} overview`}
                width={400}
                height={400}
                className="object-cover rounded-lg w-full h-auto"
              />
            </div>
          </div>
          <div className="mt-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
              Key Highlights
            </h2>
            <ul className="list-disc pl-6 space-y-3 text-base text-gray-700">
              {course.keyHighlights.map((highlight, index) => (
                <li key={index} className="leading-relaxed li-highlight">
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Dynamic Content Section */}
      <section id={dynamicId} className="py-12 px-4 bg-[#f7faf7]">
        <div className="relative bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 shadow-xl rounded-lg py-8">
          <div className="absolute left-0 top-0 bg-gradient-to-r from-apex-green to-apex-blue-light text-white font-bold text-base px-4 py-2 rounded-tl-lg">
            {course.dynamicContent.title}
          </div>
          <div className="pt-12 space-y-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              {course.dynamicContent.title}
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              {course.dynamicContent.subInfo}
            </p>
            <ul className="list-disc pl-6 space-y-3 text-base text-gray-700">
              {course.dynamicContent.list.map((item, index) => (
                <li key={index} className="leading-relaxed li-highlight">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Who Should Attend Section */}
      {course.attendees && course.attendees.length > 0 ? (
        <section id="attendees" className="relative py-20 bg-apex-blue-dark">
          <div className="max-w-7xl mx-auto px-4 flex flex-col">
            <h2 className="text-3xl font-bold text-left mb-8 text-white">
              <span className="text-apex-green">Who</span> is it for?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
              {columns.map((column, index) => (
                <ul
                  key={index}
                  className="list-disc list-inside text-lg text-white font-light space-y-2"
                >
                  {column.map((item, itemIndex) => (
                    <li key={itemIndex} className="li-tick md:min-h-30 py-4">
                      {item}
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* Modules Section */}
      <section id="modules" className="py-12 px-4 bg-[#f7faf7]">
        <div className="relative max-w-7xl mx-auto py-5">
          {course.module && course.module.length > 0 ? (
            <>
              <div className="mx-auto text-center">
                <p className="inline-block px-4 py-2 text-base font-bold tracking-wide text-white bg-gradient-to-r from-apex-green to-apex-blue-light rounded-lg">
                  Course Outline
                </p>
              </div>
              <div className="grid grid-cols-1 mt-14 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {course.module.map((module, index) => (
                  <ModuleCard
                    key={index}
                    imageSrc={module.moduleImg}
                    imageAlt={module.moduleTitle}
                    title={module.moduleTitle}
                    description={module.moduleInfo}
                    moduleList={module.moduleList}
                  />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center">
              <p className="text-lg text-gray-700 max-w-7xl mx-auto py-20 shadow-2xl rounded-lg px-4 sm:px-6 lg:px-8">
                We are developing the modules, please be patient.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export const runtime = "edge";
export default Page;
