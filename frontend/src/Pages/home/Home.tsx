import React, { useEffect, useState } from 'react';
import gitImage from "../../Assets/Img/home/af9e0e944df57d63d4eec5a60a89cfb2.gif";
import storyImage from "../../Assets/Img/home/story.png";
import CardComponent from "../../Components/Card/CardComponent";
import {Advertisement, CardsData, StepsData} from "../../Typings/Home/CardsData";
import CardStepsData from "../../Components/Card/CardStepsData";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import FloatingCartButton from "../../Components/floatingCart/FloatingCartButton";

const Home = () => {
    const [data, setData] = useState<{ cardsData: CardsData[]; stepsData: StepsData[]; advertisement: Advertisement[] }>({
        cardsData: [],
        stepsData: [],
        advertisement: [],
    });

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % data.advertisement.length);
    }

    const handlePrevious = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + data.advertisement.length) % data.advertisement.length);
    }

    useEffect(() => {
        fetch('/mock/home.json')
            .then(response => response.json())
            .then(setData)
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const getAdvertisementImageUrl = (imageUrl: string) => {
        try {
            return require(`../../Assets/Img/home/advertisement/${imageUrl}`);
        } catch (error) {
            console.error('Error loading image:', error);
            return '';
        }
    };

    const getImageUrl = (imageUrl: string) => {
        try {
            return require(`../../Assets/Img/home/card/${imageUrl}`);
        } catch (error) {
            console.error('Error loading image:', error);
            return '';
        }
    };

    const getStepImageUrl = (imageUrl: string) => {
        try {
            return require(`../../Assets/Img/home/step/${imageUrl}`);
        } catch (error) {
            console.error('Error loading image:', error);
            return '';
        }
    };

    useEffect(() => {
        const interval = setInterval(handleNext, 5000);

        return () => clearInterval(interval);
    }, [data.advertisement.length]);

    return (
        <section className="mt-4 font-roboto">
            {/* 광고 */}
            <article className="relative">
                <div>
                    {data.advertisement.length > 0 && (
                        <img
                            src={getAdvertisementImageUrl(data.advertisement[currentImageIndex].imgSrc)}
                            alt="Ad"
                            className="w-full h-56 sm:h-96"
                        />
                    )}
                </div>
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-4">
                    <div className="bg-[#2c323b] rounded-2xl opacity-30 absolute inset-0"></div>
                    <button
                        onClick={handlePrevious}
                        className="relative px-2 py-1 sm:px-2 sm:py-2 text-white text-sm sm:text-base"
                    >
                        <FaAngleLeft/>
                    </button>
                    <button
                        onClick={handleNext}
                        className="relative px-6 py-1 sm:px-6 sm:py-2 text-white text-sm sm:text-base"
                    >
                        <FaAngleRight/>
                    </button>
                </div>
            </article>

            {/* 첫 번쨰 소개글 */}
            <article className="m-auto max-w-5xl">
                <div className="mt-16 sm:mt-40 flex flex-col sm:flex-row items-center sm:justify-between pb-20">
                    <div className="sm:w-1/2 sm:mr-10 text-center sm:text-left sm:p-4">
                        <h4 className="mb-4 text-2xl text-blue-500">D A I L Y W A S H</h4>
                        <h1 className="mb-4 text-2xl sm:text-3x">
                            귀찮은 세탁을 간편하게
                            <br/>
                            모두를 위한 편리한
                            <br/>
                            세탁 서비스
                        </h1>
                    </div>
                    <img src={gitImage} alt="dailywash" className="h-90 w-80 rounded-2xl sm:w-1/2"/>
                </div>
            </article>

            {/* 두 번째 소개글 */}
            <article className="m-auto max-w-5xl">
                <div className="text-center  mb-16 mt-16">
                    <h1 className="text-3xl text-blue-500">All In One</h1>
                    <h1 className="text-3xl">Laundry Service</h1>
                    <p className="mt-4 text-base text-gray-500">수거부터 세탁, 새벽까지
                        배달</p>
                </div>
                {/* 카드 */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    {data.stepsData.map((step, index) => (
                        <CardStepsData
                            key={index}
                            title={step.title}
                            description={step.description}
                            imgSrc={getStepImageUrl(step.imgSrc)}
                        />
                    ))}
                </div>
            </article>


            {/* 세 번째 소개글 */}
            <article className="m-auto max-w-5xl">
                <div className="mt-40 flex flex-col items-center justify-between p-4">
                    {data.cardsData.map((card, index) => (
                        <CardComponent
                            key={index}
                            title={card.title}
                            description={card.description}
                            isReversed={card.isReversed}
                            imgSrc={getImageUrl(card.imgSrc)} // Use the dynamic image URL
                        />
                    ))}
                </div>
            </article>

            {/* 네 번쨰 소개글 */}
            <article className="m-auto max-w-5xl p-4 sm:p-0">
                <div className="mt-10 sm:mt-40">
                    <h4 className="text-lg sm:text-3xl  sm:text-left leading-relaxed sm:leading-snug">
                        세탁으로 부터 찾는 나의 시간,
                        <br/>
                        이제 <strong className="text-blue-500">라벤데리아에</strong> 맡기세요
                    </h4>
                    <img src={storyImage} className="w-full mt-4 sm:mt-8 object-cover" alt="Home"/>
                </div>
            </article>
            <FloatingCartButton/>
        </section>
    );
};

export default Home;
