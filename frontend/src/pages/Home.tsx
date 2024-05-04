import React from "react";
import Header from "../Components/Common/Header";
import home from "../Assets/Img/20230516021744012618.jpg";
import step1 from "../Assets/Img/step01.png";
import step2 from "../Assets/Img/step02.png";
import step3 from "../Assets/Img/step03.png";
import gitImage from "../Assets/Img/af9e0e944df57d63d4eec5a60a89cfb2.gif";

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
                    <div className='flex flex-col items-center justify-between mt-12'>
                        {/* 지그재그 */}
                        <div className='mr-auto'>
                            <div>
                                <img
                                    src='https://flexible.img.hani.co.kr/flexible/normal/960/960/imgdb/resize/2019/0121/00501111_20190121.JPG'
                                    className='w-8'
                                    alt="Home"/>
                            </div>
                            <div>
                                <h4>합리적인 가격</h4>
                                <p>업계 최대 최저가로 집에서 좋은 가성비로 깔끔하고 꺠끗한 세탁 서비스를 <br/>
                                    이용해 보세요.
                                </p>
                            </div>
                        </div>

                        <div className='ml-auto'>
                            <div>
                                <h4 className='text-right'>명품 케어</h4>
                                <p>
                                    고가의 브랜드 제품의 경우에는 프리미엄 장인들의 꼼꼼한 세탁으로 <br/>
                                    진행하여 원단 손상은 최소화 깨끗함은 최대화로 완성됩니다
                                </p>
                            </div>
                            <div>
                                <img
                                    src='https://flexible.img.hani.co.kr/flexible/normal/960/960/imgdb/resize/2019/0121/00501111_20190121.JPG'
                                    className='w-8 ml-auto'
                                    alt="Home"/>
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
