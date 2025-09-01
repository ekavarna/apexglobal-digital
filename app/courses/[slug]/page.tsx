import React from "react";
import Image from "next/image";
import Link from "next/link";
import CourseNav from "@/components/courseNav";

const cardData = [
  {
    imageSrc: "/Low-Carbon-Xposium-page-thumbnail.png",
    imageAlt: "Low Carbon Xposium Thumbnail",
    title: "Low-Carbon Strategies for Achieving Net-Zero Targets",
    enrolledUser: "22",
    description:
      "Whether you’re a sustainability officer, a compliance manager, or a business leader, this webinar will provide you with the tools, insights, and strategies necessary to take tangible steps toward net-zero today.",
    link: "/courses/low-carbon-strategies-for-achieving-net-zero-targets/",
  },
  {
    imageSrc: "/Low-Carbon-Xposium-page-thumbnail.png",
    imageAlt: "Sustainable Supply Chain Thumbnail",
    title: "Building a Sustainable Supply Chain",
    enrolledUser: "10",
    description:
      "Learn how to integrate sustainable practices into your supply chain to reduce environmental impact and improve efficiency.",
    link: "/courses/sustainable-supply-chain/",
  },
  {
    imageSrc: "/Low-Carbon-Xposium-page-thumbnail.png",
    imageAlt: "Renewable Energy Webinar Thumbnail",
    title: "Transitioning to Renewable Energy Sources",
    enrolledUser: "15",
    description:
      "Explore the latest trends and technologies in renewable energy to power your business sustainably.",
    link: "/courses/renewable-energy-sources/",
  },
];

const courseData = {
  imageSrc: "/bg.jpg",
  imageAlt: "Low Carbon Xposium Thumbnail",
  courseName: "Course Name",
  courseSubtitle: "Course Subtitle",
};

const page = () => {
  return (
    <div>
      <section
        className="relative flex items-center justify-center min-h-[500px] bg-gray-100 py-12 px-4"
        style={{
          backgroundImage: `url('${courseData.imageSrc}')`,
        }}
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-apex-blue-dark opacity-80 z-0"></div>

        {/* Container */}
        <div className="relative container mx-auto max-w-7xl px-4 z-10">
          <div className="flex flex-col items-center text-center">
            {/* Heading 1 */}
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {courseData.courseName}
            </h1>

            {/* Heading 2 */}
            <h2 className="text-2xl  text-white font-light mb-3 ">
              {courseData.courseSubtitle}
            </h2>

            <Link
              href="/courses"
              className="mt-4 text-lg inline-block bg-apex-blue-dark uppercase tracking-wide text-white hover:text-white hover:bg-transparent  border-2 border-apex-blue-dark px-8 py-2  rounded-md transition-colors"
            >
              Enroll Now
            </Link>
          </div>
        </div>
      </section>

      <section className=" mx-auto px-4 py-4 sticky top-20 bg-white z-10 shadow-lg">
        <div className="container mx-auto py-4">
          <CourseNav />
        </div>
      </section>

      {/* overview Section */}
      <section id="overview" className="py-18 bg-[#f7faf7] ">
        <div className="relative bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 shadow-2xl rounded-lg py-5">
          {/* Overview Heading */}
          <p className="text-base font-bold tracking-wide text-white mb-8 absolute left-0 top-0 bg-transparent  bg-gradient-to-r from-apex-green to-apex-blue-light rounded-tl-lg p-3.5">
            Overview
          </p>

          {/* Inner Section with Columns */}
          <div className="grid grid-cols-1 md:grid-cols-[7fr_3fr] gap-12 pt-18">
            {/* First Column: Text Content */}
            <div className="space-y-6 ">
              <h2 className="text-2xl md:text-3xl font-normal leading-snug text-gray-900">
                Why you should go for BCMLI?
              </h2>
              <p className="text-base text-gray-700">
                A Business Continuity Management System, if not developed and
                managed properly, can be seen as the proverbial millstone around
                an organization’s neck. By properly implementing your BCMS, the
                organization will enjoy the benefits of a management system
                which has been developed to meet its specific needs.
              </p>
            </div>

            {/* Third Column: Image */}
            <div className="relative">
              <Image
                src="/BCMLI.jpg"
                alt="BCMLI Overview"
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
              <li className="li-highlight">
                Designed in partnership with the International Consortium for
                Organizational Resilience (ICOR), this 3-day training serves as
                a solid “how to” guide for building a business continuity
                program for all types of organizations.
              </li>
              <li className="li-highlight">
                Student activities are included throughout the course and are
                designed as knowledge checks to reinforce lesson materials.
              </li>
              <li className="li-highlight">
                Globally – Recognized Certification Program
              </li>
              <li className="li-highlight">
                BCMLI courses are conducted by certified ICOR instructors who
                will help you master a structured curriculum supplemented with
                industry relevant examples.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Training Options Section */}

      <section id="training" className="py-14  bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          {/* Section Heading */}
          <h2 className="text-2xl text-center md:text-3xl font-bold text-gray-900 mb-8">
            <span className="text-apex-blue-light ">Training </span>Options
          </h2>

          {/* Inner Section with Columns */}
          <div className="grid pt-4 grid-cols-1 md:grid-cols-2 gap-12 md:mx-[12%]">
            {/* First Column: Virtual Instructor-Led Training */}
            <div className="space-y-6 border-4 rounded-lg border-solid border-apex-green shadow-xl p-[35px_25px_85px_25px]">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 text-center">
                Virtual Instructor-Led
                <br />
                Training
              </h3>
              <div className="border-t border-gray-300 w-full"></div>
              <ul className="list-disc pl-5 space-y-2 text-base text-gray-700">
                <li className="li-highlight">Self-Paced Learning</li>
                <li className="li-highlight">
                  Live, online classroom training by top instructors and
                  practitioners
                </li>
                <li className="li-highlight">
                  Lifetime access to high-quality self-paced elearning content
                  curated by industry experts
                </li>
                <li className="li-highlight">
                  24×7 learner assistance and support
                </li>
              </ul>

              <div className="w-full bg-apex-blue-light px-4 py-3 text-center text-white font-semibold rounded-md hover:bg-apex-blue-dark transition-colors duration-300 mt-auto">
                <Link href="#talkLa" className="w-full block text-xl font-bold">
                  Enroll Now
                </Link>
              </div>
            </div>

            {/* Second Column: Corporate Training */}
            <div className="space-y-6 border-4 rounded-lg border-solid border-apex-green shadow-xl p-[35px_25px_85px_25px]">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 text-center">
                CORPORATE
                <br />
                TRAINING
              </h3>
              <div className="border-t border-gray-300 w-full"></div>
              <ul className="list-disc pl-5 space-y-2 text-base text-gray-700">
                <li className="li-highlight">
                  Customized learning delivery model (self-paced and/or
                  instructor-led)
                </li>
                <li className="li-highlight">Flexible pricing options</li>
                <li className="li-highlight">
                  Enterprise-grade learning management system (LMS)
                </li>
                <li className="li-highlight">
                  Enterprise dashboards for individuals and teams
                </li>
                <li className="li-highlight">
                  24×7 learner assistance and support
                </li>
              </ul>
              <p className="text-base font-bold text-gray-900">
                Contact us right away and get a quote!
              </p>
              <div className="w-full bg-apex-blue-light px-4 py-3 text-center text-white font-semibold rounded-md hover:bg-apex-blue-dark transition-colors duration-300 mt-auto">
                <Link href="#talkLa" className="w-full block text-xl font-bold">
                  Contact us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
