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

const Home = () => {
    return (
        <>
            <Header/>
            <section className="mt-4 font-roboto">
                {/* 광고 */}
                <article>
                    <div>
                        <img src={home} alt="Home"/>
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
                                    className='w-80'
                                    alt="Home"/>
                            </div>
                            <div>
                                <h4 className='text-2xl mb-4'>합리적인 가격</h4>
                                <p className='text-base text-gray-500'>업계 최대 최저가로 집에서 좋은 가성비로 깔끔하고 꺠끗한 세탁 서비스를 <br/>
                                    이용해 보세요.
                                </p>
                            </div>
                        </div>

                        <div className='ml-auto mb-16'>
                            <div>
                                <h4 className='text-right text-2xl mb-4'>드라이&물세탁</h4>
                                <p className='text-base text-gray-500'>
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
                                    className='w-80'
                                    alt="Home"/>
                            </div>
                            <div>
                                <h4 className='text-2xl mb-4'>침구류 물세탁</h4>
                                <p className='text-base text-gray-500'>무거운 침구류를 이제 대신 세탁해드립니다. 깨끗하게 세탁 후 <br/>
                                    배송해드립니다.
                                </p>
                            </div>
                        </div>
                    </div>
                </article>

                {/* 네 번쨰 소개글*/}
                <section className='max-w-5xl m-auto'>
                    <div className='mt-12'>
                        <h4>귀찮은 빨래는 라벤데리아에 맞기고,
                            <br/>
                            이제부터 여러분의 <strong>소중한 시간을</strong> 챙기세요.
                        </h4>
                        <img
                            src='https://flexible.img.hani.co.kr/flexible/normal/960/960/imgdb/resize/2019/0121/00501111_20190121.JPG'
                            className='w-full'
                            alt="Home"/>
                    </div>
                </section>
            </section>
        </>
    );
};

export default Home;
