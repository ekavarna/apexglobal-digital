import React from "react";
import CoursesPage from "./courses/page";
import HomePage from "./home/page";

const HomeLanding = () => {
  return (
    <section className="w-full h-full bg-amber-50 flex-center flex-col">
      {/* coursesPage */}
      <HomePage />
    </section>
  );
};

export default HomeLanding;
