"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import CourseNav from "@/components/courseNav";
import courses from "../courses.json";

const Page = () => {
  const pathname = usePathname();
  const slug = pathname.split("/").pop();
  const course = courses.find(
    (c) => c.courseName.toLowerCase().replace(/ /g, "-") === slug
  );

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div>
      <section
        className="relative flex items-center justify-center min-h-[500px] bg-gray-100 py-12 px-4"
        style={{
          backgroundImage: `url('${course.courseBannerImage}')`,
        }}
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-apex-blue-dark opacity-80 z-0"></div>

        {/* Container */}
        <div className="relative container mx-auto max-w-7xl px-4 z-10">
          <div className="flex flex-col items-center text-center">
            {/* Heading 1 */}
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {course.courseName}
            </h1>

            {/* Heading 2 */}
            <h2 className="text-2xl  text-white font-light mb-3 ">
              {course.courseSubtitle}
            </h2>

            <Link
              href="/courses"
              className="mt-4 text-lg inline-block global-button rounded-md"
            >
              Enroll Now
            </Link>
          </div>
        </div>
      </section>

      <section className=" mx-auto px-4 py-4 sticky top-20 bg-white z-10 shadow-lg">
        <div className="container text-center mx-auto py-4">
          <CourseNav />
        </div>
      </section>

      {/* overview Section */}
      <section id="overview" className="py-18 bg-[#f7faf7] ">
        <div className="relative bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 shadow-2xl rounded-lg py-5">
          {/* Overview Heading */}
          <p className="text-base font-bold tracking-wide text-white mb-8 absolute left-0 top-0 bg-transparent  bg-gradient-to-r from-apex-green to-apex-blue-light rounded-tl-lg p-3.5">
            {course.overview.overviewTitle}
          </p>

          {/* Inner Section with Columns */}
          <div className="grid grid-cols-1 md:grid-cols-[7fr_3fr] gap-12 pt-18">
            {/* First Column: Text Content */}
            <div className="space-y-6 ">
              <h2 className="text-2xl md:text-3xl font-normal leading-snug text-gray-900">
                {course.overview.overviewTitle}
              </h2>
              <p className="text-base text-gray-700">
                {course.overview.overviewDescription}
              </p>
            </div>

            {/* Third Column: Image */}
            <div className="relative">
              <Image
                src={course.overview.overviewImg}
                alt={course.overview.overviewTitle}
                width={800}
                height={800}
                className="object-cover rounded-lg"
                priority
              />
            </div>
          </div>

          {/* Key Highlights Section */}
          <div className="mt-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Key Highlights
            </h2>
            <ul className="list-disc pl-5 space-y-4 text-base text-gray-700">
              {course.keyHighlights.map((highlight, index) => (
                <li key={index} className="li-highlight">
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Pre-requisites Section */}
      <section id="pre-requisites" className="py-18 bg-[#f7faf7] ">
        <div className="relative bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 shadow-2xl rounded-lg py-5">
          {/* Pre-requisites Heading */}
          <p className="text-base font-bold tracking-wide text-white mb-8 absolute left-0 top-0 bg-transparent  bg-gradient-to-r from-apex-green to-apex-blue-light rounded-tl-lg p-3.5">
            {course.prerequisites.title}
          </p>

          {/* Inner Section with Columns */}
          <div className="grid grid-cols-1  gap-12 pt-18">
            {/* First Column: Text Content */}
            <div className="space-y-6 ">
              <h2 className="text-2xl md:text-3xl font-normal leading-snug text-gray-900">
                {course.prerequisites.title}
              </h2>
              <p className="text-base text-gray-700">
                {course.prerequisites.subInfo}
              </p>

              <ul className="list-disc pl-5 space-y-4 text-base text-gray-700">
                {course.prerequisites.list.map((item, index) => (
                  <li key={index} className="li-highlight">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};


export default page;
