import React from 'react';

interface CardComponentProps {
    imgSrc: string;
    title: string;
    description: string;
    isReversed?: boolean;
}

const CardStepsData: React.FC<CardComponentProps> = ({title, description, imgSrc}) => {
    return (
    <div className="p-4 flex flex-col items-center text-center">
        <img src={imgSrc} alt={title} className="mb-4 md:h-96 w-full md:w-full sm:w-auto lg:h-56 object-cover"/>
        <div className="w-full md:w-full  sm:w-64">
            <p className="mb-4 border-b-4 border-blue-500  "></p>
            <h4 className="mb-2 text-left text-2xl">{title}</h4>
            <p className="text-sm text-left text-gray-500">{description}</p>
        </div>
    </div>

)
    ;
};

export default CardStepsData;