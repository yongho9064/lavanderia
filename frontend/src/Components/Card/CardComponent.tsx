// CardComponent.tsx
import React from 'react';

interface CardComponentProps {
    imgSrc: string;
    title: string;
    description: string;
    isReversed?: boolean;
}

const CardComponent: React.FC<CardComponentProps> = ({ imgSrc, title, description, isReversed = false }) => {
    return (
        <div className={`mb-16 ${isReversed ? 'ml-auto' : 'mr-auto'}`}>
            {isReversed ? (
                <>
                    <div>
                        <h4 className="mb-4  text-2xl sm:text-right text-center">{title}</h4>
                        <p className="mb-4 text-base text-gray-500">{description}</p>
                    </div>
                    <div>
                        <img src={imgSrc} className={`sm:w-96 w-full  ${isReversed ? 'ml-auto' : ''}`} alt={title} />
                    </div>
                </>
            ) : (
                <>
                    <div>
                        <img src={imgSrc} className="sm:w-96 w-full" alt={title} />
                    </div>
                    <div>
                        <h4 className="mb-4 mt-4 text-2xl sm:text-left text-center">{title}</h4>
                        <p className="text-base text-gray-500">{description}</p>
                    </div>
                </>
            )}
        </div>
    );
};

export default CardComponent;
