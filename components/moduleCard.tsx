import React from "react";
import Image from "next/image";
type ModuleCardProps = {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  moduleList: string[];
};

const ModuleCard = ({
  imageSrc,
  imageAlt,
  title,
  description,
  moduleList,
}: ModuleCardProps) => {
  return (
    <div className="relative bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
      {/* Image Section */}
      <div className="relative">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={530}
          height={100}
          sizes="(max-width: 530px) 100vw, 800px"
          className="w-full h-34 object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-10"></div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow">
        <h2 className="text-xl font-semibold text-apex-text  mb-4">{title}</h2>

        {/* Divider */}
        <div className="border-t border-gray-200 mb-2"></div>

        {/* Description */}
        <p className="text-apex-text mb-6 flex-grow">{description}</p>

        {/* Module List */}
        <ul className="vertical-timeline">
          {moduleList.map((item, index) => (
            <li key={index} className="leading-relaxed  text-base font-light">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ModuleCard;
