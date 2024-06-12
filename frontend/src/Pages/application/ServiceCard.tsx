import React from "react";
import { useNavigate } from "react-router-dom";
import { ServiceCardProps } from "../../Typings/Application/Applicattion";

const ServiceCard: React.FC<ServiceCardProps> = ({
                                                   title,
                                                   description,
                                                   details,
                                                   image,
                                                   url,
                                                 }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    console.log(url)
    navigate(`/${url}`, { state: { title } });
  };

  return (
    <button
      className="flex h-full w-full cursor-pointer flex-row items-center justify-between rounded-lg border border-gray-300 p-5 shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg focus:outline-none"
      onClick={handleCardClick}
    >
      <div className="mt-0 flex h-full flex-grow flex-col ">
        <h2 className="flex mb-2 text-xl font-bold sm:text-2xl ">{title}</h2>
        <p className="mb-2 text-left text-sm text-gray-500 sm:text-base">
          {description}
        </p>
        <p className="text-left text-xs text-blue-400 sm:text-sm">{details}</p>
      </div>
      <div className="flex h-full items-end">
        {image && (
          <img
            src={image}
            alt={title}
            className={`ml-4 object-contain h-24 w-24 sm:h-28 sm:w-28 2xl:w-44 3xl:h-48`}
          />
        )}
      </div>
    </button>
  );
};

export default ServiceCard;
