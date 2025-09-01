import React from "react";
import CourseCard from "@/components/courseCard";

const cardData = [
  {
    imageSrc: "/Low-Carbon-Xposium-page-thumbnail.png",
    imageAlt: "Low Carbon Xposium Thumbnail",
    title: "Low-Carbon Strategies for Achieving Net-Zero Targets",
    enrolledUser: "22",
    description:
      "Whether you’re a sustainability officer, a compliance manager, or a business leader, this webinar will provide you with the tools, insights, and strategies necessary to take tangible steps toward net-zero today.",
    link: "https://www.apexgloballearning.com/xposiums/low-carbon-strategies-for-achieving-net-zero-targets/",
  },
  {
    imageSrc: "/Low-Carbon-Xposium-page-thumbnail.png",
    imageAlt: "Sustainable Supply Chain Thumbnail",
    title: "Building a Sustainable Supply Chain",
    enrolledUser: "10",
    description:
      "Learn how to integrate sustainable practices into your supply chain to reduce environmental impact and improve efficiency.",
    link: "https://www.apexgloballearning.com/xposiums/sustainable-supply-chain/",
  },
  {
    imageSrc: "/Low-Carbon-Xposium-page-thumbnail.png",
    imageAlt: "Renewable Energy Webinar Thumbnail",
    title: "Transitioning to Renewable Energy Sources",
    enrolledUser: "15",
    description:
      "Explore the latest trends and technologies in renewable energy to power your business sustainably.",
    link: "https://www.apexgloballearning.com/xposiums/renewable-energy-sources/",
  },
];

const courseData = {
  imageSrc: "/bg.jpg",
  imageAlt: "Low Carbon Xposium Thumbnail",
  courseName: "Course Name",
  courseSubtitle: "Course Subtitle",
};

const coursesPage = () => {
  return (
    <div>
      <section
        className="relative flex items-center justify-center min-h-[500px] bg-gray-100 py-12 px-4"
        style={{
          backgroundImage: `url('${courseData.imageSrc}')`,
        }}
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-apex-blue-light opacity-50 z-0"></div>

        {/* Container */}
        <div className="relative container mx-auto max-w-7xl px-4 z-10">
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
