import React from "react";
import CourseCard from "@/components/courseCard";
import cardData from "./coursesCard.json";

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
