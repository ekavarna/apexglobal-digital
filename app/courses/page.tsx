import React from "react";

const coursesPage = () => {
  return (
    <section className="relative flex items-center justify-center min-h-[500px] bg-gray-100 py-12 px-4">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-20 z-0"></div>

      {/* Container */}
      <div className="relative container mx-auto max-w-7xl px-4 z-10">
        <div className="flex flex-col items-center text-center">
          {/* Heading 1 */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Xposiums
          </h1>

          {/* Heading 2 */}
          <h2 className="text-2xl md:text-3xl text-gray-700">
            APEX Globals webinars: One spot for The Web Chalk Talk
          </h2>
        </div>
      </div>
    </section>
  );
};

export default coursesPage;
