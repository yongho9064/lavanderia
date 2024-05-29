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
                        <h4 className="mb-4 text-right text-2xl">{title}</h4>
                        <p className="mb-4 text-base text-gray-500">{description}</p>
                    </div>
                    <div>
                        <img src={imgSrc} className={`w-96 ${isReversed ? 'ml-auto' : ''}`} alt={title} />
                    </div>
                </>
            ) : (
                <>
                    <div>
                        <img src={imgSrc} className="w-96" alt={title} />
                    </div>
                    <div>
                        <h4 className="mb-4 mt-4 text-2xl">{title}</h4>
                        <p className="text-base text-gray-500">{description}</p>
                    </div>
                </>
            )}
        </div>
    );
};

export default CardComponent;
