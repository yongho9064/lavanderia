import React from "react";
import Header from "../Components/Common/Header";
import home from "../Assets/Img/20230516021744012618.jpg";
import step1 from "../Assets/Img/step01.png";
import step2 from "../Assets/Img/step02.png";
import step3 from "../Assets/Img/step03.png";
import gitImage from "../Assets/Img/af9e0e944df57d63d4eec5a60a89cfb2.gif";
import price from "../Assets/Img/price.png";
import dry from "../Assets/Img/dry.png";
import drywarter from "../Assets/Img/drywater.png";
import delivery from "../Assets/Img/delivery.png";
import story from "../Assets/Img/story.png";
import luxury from "../Assets/Img/luxury.png";

const Home = () => {
    return (
        <>
            <Header/>
            <section className="mt-4 font-roboto">
                {/* 광고 */}
                <article>
                    <div>
                        <img src={home} alt="Home" className='w-full'/>
                    </div>
                </article>

                {/* 첫 번쨰 소개글 */}
                <article className='max-w-5xl m-auto'>
                    <div className='flex items-center justify-between mt-40 pb-20'>
                        <div>
                            <h4 className='text-blue-500 text-2xl mb-4'>D A I L Y W A S H</h4>
                            <h1 className='text-4xl mb-4'>귀찮은 세탁을 간편하게<br/>
                                모두를 위한 편리한 세탁 서비스
                            </h1>
                            <span className='text-base text-gray-500'>라벤데리아 웹으로 간편하게 <br/>
                            세탁을 예약하세요.</span>
                        </div>
                        <img
                            src={gitImage}
                            alt="Second Image"
                            className='w-80 h-90 rounded-2xl'
                        />
                    </div>
                </article>

                {/* 두 번째 소개글 */}
                <article className='max-w-5xl m-auto'>
                    <div className='text-center  mt-16 mb-16'>
                        <span className='text-blue-500 text-3xl'>All In One</span> <span
                        className='text-3xl'> 세탁 서비스</span>
                        <p className='text-gray-500 mt-4 text-base'>수거에서 부터 세탁 및 새벽 배송까지</p>
                    </div>
                    {/* 카드*/}
                    <div className='flex items-center justify-between pt-4'>
                        <div>
                            <div>
                                <img
                                    src={step1}
                                    alt="Home"
                                    className='w-64 mb-4'
                                />
                            </div>
                            <div>
                                <p className='border-b-4 border-blue-500 mb-4'></p>
                                <h4 className='text-2xl mb-2'>수거</h4>
                                <p className='text-sm text-gray-500'>
                                    박스나 비닐을 이용해 집앞에 세탁물을 <br/>
                                    놓아주시면 기사님이 픽업합니다.
                                </p>
                            </div>
                        </div>
                        {/* 카드 2*/}
                        <div>
                            <div>
                                <img
                                    src={step2}
                                    className='w-64 mb-4'
                                    alt="Home"
                                />
                            </div>
                            <div>
                                <p className='border-b-4 border-blue-500 mb-4'></p>
                                <h4 className='text-2xl mb-2'>검수/세탁</h4>
                                <p className='text-sm text-gray-500'>
                                    박스나 비닐을 이용해 집앞에 세탁물을 <br/>
                                    놓아주시면 기사님이 픽업합니다.
                                </p>
                            </div>
                        </div>
                        {/* 카드 3*/}
                        <div>
                            <div>
                                <img
                                    src={step3}
                                    className='w-64 mb-4'
                                    alt="Home"
                                />
                            </div>
                            <div>
                                <p className='border-b-4 border-blue-500 mb-4'></p>
                                <h4 className='text-2xl mb-2'>배달</h4>
                                <p className='text-sm text-gray-500'>
                                    박스나 비닐을 이용해 집앞에 세탁물을 <br/>
                                    놓아주시면 기사님이 픽업합니다.
                                </p>
                            </div>
                        </div>
                    </div>
                </article>

                {/* 세 번째 소개글*/}
                <article className='max-w-5xl m-auto'>
                    <div className='flex flex-col items-center justify-between mt-60'>
                        {/* 지그재그 */}
                        <div className='mr-auto mb-16'>
                            <div>
                                <img
                                    src={price}
                                    className='w-96'
                                    alt="Home"/>
                            </div>
                            <div>
                                <h4 className='text-2xl mb-4 mt-4'>합리적인 가격</h4>
                                <p className='text-base text-gray-500'>업계 최대 최저가로 집에서 좋은 가성비로 깔끔하고 꺠끗한 세탁 서비스를 <br/>
                                    이용해 보세요.
                                </p>
                            </div>
                        </div>

                        <div className='ml-auto mb-16'>
                            <div>
                                <h4 className='text-right text-2xl mb-4'>드라이&물세탁</h4>
                                <p className='text-base text-gray-500 mb-4'>
                                    라벤데리앙의 꼼꼼한 절차를 선정된 10년 이상의 경력을 보유한 전문가가 <br/>
                                    고퀄리티의 세탁 서비스를 완성합니다.
                                </p>
                            </div>
                            <div>
                                <img
                                    src={dry}
                                    className='w-80 ml-auto'
                                    alt="Home"/>
                            </div>
                        </div>

                        <div className='mr-auto mb-16'>
                            <div>
                                <img
                                    src={drywarter}
                                    className='w-96'
                                    alt="Home"/>
                            </div>
                            <div>
                                <h4 className='text-2xl mb-4 mt-4'>침구류 물세탁</h4>
                                <p className='text-base text-gray-500'>무거운 침구류를 이제 대신 세탁해드립니다. 깨끗하게 세탁 후 <br/>
                                    배송해드립니다.
                                </p>
                            </div>
                        </div>

                        <div className='ml-auto mb-16'>
                            <div>
                                <h4 className='text-right text-2xl mb-4'>새벽배송</h4>
                                <p className='text-base text-gray-500 mb-4'>
                                    아침에 일어나서 바로 즉시 깨끗한 세탁물을 받을 수 있는 새벽 배송을 <br/>
                                    진행합니다.
                                </p>
                            </div>
                            <div>
                                <img
                                    src={delivery}
                                    className='w-96 ml-auto'
                                    alt="Home"/>
                            </div>
                        </div>

                        <div className='mr-auto mb-16'>
                            <div>
                                <h4 className='text-2xl mb-4'>명품케어</h4>
                                <p className='text-base text-gray-500 mb-4'>고가의 브랜드 제품의 경우에는 프리미엄 장인들의 꼼꼼한 세탁으로 <br/>
                                    진행하여 원단 손상은 최소화 깨끗함은 최대화로 완성됩니다.
                                </p>
                            </div>

                            <div>
                                <img
                                    src={luxury}
                                    className='w-96'
                                    alt="Home"/>
                            </div>
                        </div>
                    </div>
                </article>

                {/* 네 번쨰 소개글*/}
                <section className='max-w-5xl m-auto'>
                    <div className='mt-40'>
                        <h4 className='text-3xl'>세탁으로 부터 찾는 나의 시간,
                            <br/>
                            이제 <strong className='text-blue-500'>라벤데리아에</strong> 맡기세요
                        </h4>
                        <img
                            src={story}
                            className='w-full'
                            alt="Home"/>
                    </div>
                </section>
            </section>
        </>
    );
};

export default Home;
