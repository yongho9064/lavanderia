import React, { useEffect, useState } from 'react';
import homeImage from "../../Assets/Img/home/20230516021744012618.jpg";
import gitImage from "../../Assets/Img/home/af9e0e944df57d63d4eec5a60a89cfb2.gif";
import storyImage from "../../Assets/Img/home/story.png";
import CardComponent from "../../Components/Card/CardComponent";
import { CardsData, StepsData } from "../../Typings/Home/CardsData";
import CardStepsData from "../../Components/Card/CardStepsData";
import FloatingCartButton from "../../Components/floatingCart/FloatingCartButton";

const Home = () => {
    const [data, setData] = useState<{ cardsData: CardsData[]; stepsData: StepsData[] }>({
        cardsData: [],
        stepsData: [],
    });

    useEffect(() => {
        fetch('/mock/home.json')
            .then(response => response.json())
            .then(setData)
            .catch(error => console.error('Error fetching data:', error));
    }, []);

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


    return (
        <section className="mt-4 font-roboto">
            {/* 광고 */}
            <article>
                <div>
                    <img src={homeImage} alt="Home" className="w-full" />
                </div>
            </article>

            {/* 첫 번쨰 소개글 */}
            <article className="m-auto max-w-5xl">
                <div className="mt-40 flex items-center justify-between pb-20">
                    <div>
                        <h4 className="mb-4 text-2xl text-blue-500">D A I L Y W A S H</h4>
                        <h1 className="mb-4 text-4xl">
                            귀찮은 세탁을 간편하게
                            <br />
                            모두를 위한 편리한 세탁 서비스
                        </h1>
                        <span className="text-base text-gray-500">
                            라벤데리아 웹으로 간편하게 <br />
                            세탁을 예약하세요.
                        </span>
                    </div>
                    <img src={gitImage} alt="dailywash" className="h-90 w-80 rounded-2xl" />
                </div>
            </article>

            {/* 두 번째 소개글 */}
            <article className="m-auto max-w-5xl">
                <div className="mb-16 mt-16 text-center">
                    <span className="text-3xl text-blue-500">All In One</span>{" "}
                    <span className="text-3xl"> 세탁 서비스</span>
                    <p className="mt-4 text-base text-gray-500">수거에서 부터 세탁 및 새벽 배송까지</p>
                </div>
                {/* 카드*/}
                <div className="flex items-center justify-between pt-4">
                    {data.stepsData.map((step, index) => (
                       <CardStepsData key={index} title={step.title} description={step.description} imgSrc={getStepImageUrl(step.imgSrc)}/>
                    ))}
                </div>
            </article>

            {/* 세 번째 소개글 */}
            <article className="m-auto max-w-5xl">
                <div className="mt-60 flex flex-col items-center justify-between">
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
            <article className="m-auto max-w-5xl">
                <div className="mt-40">
                    <h4 className="text-3xl">
                        세탁으로 부터 찾는 나의 시간,
                        <br />
                        이제 <strong className="text-blue-500">라벤데리아에</strong> 맡기세요
                    </h4>
                    <img src={storyImage} className="w-full" alt="Home" />
                </div>
            </article>
            <FloatingCartButton/>
        </section>
    );
};

export default Home;
