import React from "react";
import Image from "next/image";
import Link from "next/link";

type CourseCardProps = {
  imageSrc: string;
  imageAlt: string;
  title: string;
  enrolledUser: string;
  description: string;
  link: string;
};

const CourseCard = ({
  imageSrc,
  imageAlt,
  title,
  enrolledUser,
  description,
  link,
}: CourseCardProps) => {
  return (
    <div className="relative bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
      {/* Image Section */}
      <div className="relative">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={530}
          height={136}
          sizes="(max-width: 530px) 100vw, 800px"
          className="w-full h-52 object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-10"></div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow">
        <h2 className="text-xl font-semibold text-apex-text min-h-12 mb-4">
          {title}
        </h2>

        {/* Divider */}
        <div className="border-t border-gray-200 my-4"></div>

        {/* enrolledUser */}
        <div className="flex items-center mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 text-gray-700"
          >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
          <h4 className="text-apex-blue-dark text-xl font-medium pr-2">
            Enrolled Users:{" "}
          </h4>
          <p className="text-apex-blue-dark text-lg font-bold">
            {" "}
            {enrolledUser}
          </p>
        </div>

        {/* Description */}
        <p className="text-apex-text mb-6 flex-grow">{description}</p>

        {/* Button */}
        <div className="w-full global-button rounded-md text-center mt-auto">
          <Link href={link} className="w-full block text-xl font-bold">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
