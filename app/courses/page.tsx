import React from "react";
import CourseCard from "@/components/courseCard";

const cardData = [
  {
    imageSrc:
      "/img/course/APEX-Global_course-cards_Basic-Occupational-Safety-and-Health.png",
    imageAlt: "Basic Occupational Safety and Health",
    title: "Basic Occupational Safety and Health",
    enrolledUser: "22",
    description:
      "Whether you’re a sustainability officer, a compliance manager, or a business leader, this webinar will provide you with the tools, insights, and strategies necessary to take tangible steps toward net-zero today.",
    link: "/courses/basic-occupational-safety-and-health/",
  },
  {
    imageSrc:
      "/img/course/APEX Global_course-cards_Business-Continuity-Management-Systems.png",
    imageAlt: "Business Continuity Management Systems",
    title: "Business Continuity Management Systems",
    enrolledUser: "10",
    description:
      "The Business Continuity Management 101 course provides a structured introduction to the principles, concepts and practices of Business Continuity Management. It is designed to build essential awareness and foundational competencies in understanding requirements of ISO 22301 Business Continuity Management System (BCMS), Business Continuity Lifecycle (Plan–Do–Check–Act) and its application in safeguarding critical operations and assets. ",
    link: "/courses/business-continuity-management-systems/",
  },
  {
    imageSrc: "/img/course/APEX Global_course-cards_Data-Privacy-Act.png",
    imageAlt: "Data Privacy Act",
    title: "Data Privacy Act",
    enrolledUser: "15",
    description:
      "Explore the latest trends and technologies in renewable energy to power your business sustainably.",
    link: "/courses/data-privacy-act/",
  },
  {
    imageSrc: "/img/course/APEX-Global_course-cards_GRI-Standards.png",
    imageAlt: "GRI Standards",
    title: "GRI Standards",
    enrolledUser: "15",
    description:
      "Explore the latest trends and technologies in renewable energy to power your business sustainably.",
    link: "/courses/gri-standards/",
  },

  {
    imageSrc: "/img/course/APEX-Global_course-cards_Integrated-Reporting.png",
    imageAlt: "Integrated Reporting",
    title: "Integrated Reporting",
    enrolledUser: "15",
    description:
      "Explore the latest trends and technologies in renewable energy to power your business sustainably.",
    link: "/courses/integrated-reporting/",
  },
  {
    imageSrc:
      "/img/course/APEX-Global_course-cards_International-Financial-Reporting-Standards.png",
    imageAlt: "International Financial Reporting Standards",
    title: "International Financial Reporting Standards",
    enrolledUser: "15",
    description:
      "Explore the latest trends and technologies in renewable energy to power your business sustainably.",
    link: "/courses/international-financial-reporting-standards/",
  },

  {
    imageSrc:
      "/img/course/APEX-Global_course-cards_Sustainability-Reporting-101.png",
    imageAlt: "Sustainability Reporting Fundamentals",
    title: "Sustainability Reporting Fundamentals",
    enrolledUser: "",
    description:
      "This course introduces the fundamentals of Sustainability reporting—its purpose, principles, popular global frameworks and challenges — equipping learners with the knowledge to set out on a credible, stakeholder-focused reporting journey that drives long-term value creation. ",
    link: "/courses/sustainability-reporting-fundamentals/",
  },
];

const courseData = {
  imageSrc: "/bg.jpg",
  imageAlt: "Course Background",
  courseName: "Courses",
  courseSubtitle: " ",
};

const coursesPage = () => {
  return (
    <div>
      <section
        className="relative flex items-center justify-center h-[250px] md:min-h-[500px] bg-gray-100 py-12 px-4"
        style={{
          backgroundImage: `url('${courseData.imageSrc}')`,
        }}
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-apex-blue-light opacity-50 z-0"></div>

        {/* Container */}
        <div className="relative container pt-16 md:pt-0 mx-auto max-w-7xl px-4 z-10">
          <div className="flex flex-col items-center text-center">
            {/* Heading 1 */}
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {courseData.courseName}
            </h1>

            {/* Heading 2 */}
            <h2 className="text-2xl md:text-3xl text-white">
              {courseData.courseSubtitle}
            </h2>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardData.map((card, index) => (
            <CourseCard
              key={index}
              imageSrc={card.imageSrc}
              imageAlt={card.imageAlt}
              title={card.title}
              enrolledUser={card.enrolledUser}
              description={card.description}
              link={card.link}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default coursesPage;
