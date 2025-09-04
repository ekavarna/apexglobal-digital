"use client";
import React from "react";
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
  // Extract slug and handle trailing slashes
  const slug = pathname
    ? pathname
        .split("/")
        .filter(Boolean) // Remove empty segments
        .pop()
        ?.toLowerCase()
    : "";

  // Debugging: Log the slug and courses to verify
  console.log("Pathname:", pathname);
  console.log("Slug:", slug);
  console.log("Courses:", courses);

  // Find the course that matches the slug
  console.log(
    "Courses with Slugs:",
    courses.map((c) => ({
      name: c.courseName,
      slug: slugify(c.courseName),
    }))
  );

  const course = courses.find((c) => slugify(c.courseName) === slug);
  if (!course) {
    return (
      <>
        {/* Pre-requisites Section */}
        <section className="h-screen flex items-center justify-center bg-[#f7faf7]">
          <div className="relative  bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 shadow-2xl rounded-lg py-10 ">
            {/* Content */}
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
  // Debugging: Log the course data to verify it's loaded
  console.log("Course Data:", course);

  return (
    <div>
      {/* Banner Section */}
      <section
        className="relative flex items-center justify-center min-h-[400px] bg-gray-100 py-12 px-4 bg-cover bg-center"
        style={{ backgroundImage: `url('${course.courseBannerImage}')` }}
      >
        <div className="absolute inset-0 bg-apex-blue-dark opacity-80 z-0"></div>

        <div className="relative container mx-auto max-w-7xl px-4 z-10">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              {course.courseName}
            </h1>
            <h2 className="text-xl md:text-2xl text-white font-light mb-6">
              {course.courseSubtitle}
            </h2>

            <Link
              href="/courses"
              className="inline-block text-lg text-white bg-apex-green px-6 py-2 rounded-md hover:bg-apex-blue-light transition-colors"
              aria-label={`Enroll in ${course.courseName}`}
            >
              Enroll Now
            </Link>
          </div>
        </div>
      </section>

      {/* Navigation Section */}
      <section className=" mx-auto px-4 py-4 sticky top-20 bg-white z-10 shadow-lg">
        <div className="container text-center mx-auto py-4">
          <CourseNav />
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" className="py-12 bg-[#f7faf7]">
        <div className="relative bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 shadow-xl rounded-lg py-8">
          <div className="absolute left-0 top-0 bg-gradient-to-r from-apex-green to-apex-blue-light text-white font-bold text-base px-4 py-2 rounded-tl-lg">
            OVERVIEW
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8 pt-12">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
                {course.overview.overviewTitle}
              </h2>
              <p className="text-base text-gray-700 leading-relaxed">
                {course.overview.overviewDescription}
              </p>
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

      {/* Pre-requisites Section */}
      <section id="pre-requisites" className="py-12 bg-[#f7faf7]">
        <div className="relative bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 shadow-xl rounded-lg py-8">
          <div className="absolute left-0 top-0 bg-gradient-to-r from-apex-green to-apex-blue-light text-white font-bold text-base px-4 py-2 rounded-tl-lg">
            PRE-REQUISITES
          </div>
          <div className="pt-12 space-y-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              {course.prerequisites.title}
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              {course.prerequisites.subInfo}
            </p>
            <ul className="list-disc pl-6 space-y-3 text-base text-gray-700">
              {course.prerequisites.list.map((item, index) => (
                <li key={index} className="leading-relaxed li-highlight">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Modules Section */}

      <section id="modules" className="py-12 bg-[#f7faf7]">
        <div className="relative max-w-7xl mx-auto py-5">
          <div className="mx-auto text-center">
            <p className="inline-block px-4 py-2 text-base font-bold tracking-wide text-white bg-gradient-to-r from-apex-green to-apex-blue-light rounded-lg">
              Curriculum
            </p>
          </div>
          <div className="grid grid-cols-1 mt-14 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {course.module?.map((module, index) => (
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
        </div>
      </section>
    </div>
  );
};

export default Page;
