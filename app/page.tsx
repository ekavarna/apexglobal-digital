import React from "react";
import CoursesPage from "./courses/page";

const HomeLanding = () => {
  return (
    <section className="w-full h-full bg-amber-50 flex-center flex-col">
      {/* coursesPage */}
      <CoursesPage />
    </section>
  );
};

export default HomeLanding;
