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
  const isDisabled = !description; // Check if description is empty

  return (
    <div
      className={`relative shadow-lg rounded-lg overflow-hidden transition-shadow duration-300 flex flex-col ${
        isDisabled
          ? "bg-gray-200 cursor-not-allowed"
          : "bg-white hover:shadow-xl"
      }`}
    >
      {/* Image Section */}
      <div className="relative">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={530}
          height={136}
          sizes="(max-width: 530px) 100vw, 800px"
          className={`w-full h-52 object-cover ${
            isDisabled ? "opacity-50" : ""
          }`}
        />
        <div className="absolute inset-0 bg-black opacity-10"></div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow">
        <h2
          className={`text-xl font-semibold min-h-12 mb-4 ${
            isDisabled ? "text-gray-500" : "text-apex-text"
          }`}
        >
          {title}
        </h2>

        {/* Divider */}
        <div className="border-t border-gray-200 my-4"></div>

        {/* Description */}
        <p
          className={`mb-6 flex-grow ${
            isDisabled ? "text-gray-500" : "text-apex-text"
          }`}
        >
          {description || "Coming Soon."}
        </p>

        {/* Button - Hidden if description is empty */}
        {!isDisabled && (
          <div className="w-full global-button rounded-md text-center mt-auto">
            <Link href={link} className="w-full block text-xl font-bold">
              Read More
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseCard;
