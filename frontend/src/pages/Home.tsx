import React from "react";
import Header from "../Components/Common/Header";
import home from "../Assets/Img/homeImg.jpg";

const Home = () => {
  return (
    <>
      <Header />
      <section className="mt-4">
        {/* 광고 */}
        <article className="m-auto max-w-5xl">
          <div className="flex items-center justify-center">
            <img src={home} className="mt-36px" alt="Home" />
          </div>
        </article>

        {/* 첫 번쨰 소개글 */}
        <article className="m-auto max-w-5xl">
          <div className="mt-4 flex items-center justify-between">
            <div>
              <h4>DAILY WASH</h4>
              <h1>
                귀찮은 세탁을 간편하게
                <br />
                모두를 위한 편리한 세탁 서비스
              </h1>
              <span>
                라벤데리아 웹으로 간편하게 <br />
                세탁을 예약하세요.
              </span>
            </div>
            <img
              src="https://flexible.img.hani.co.kr/flexible/normal/960/960/imgdb/resize/2019/0121/00501111_20190121.JPG"
              alt="Second Image"
              className="w-8"
            />
          </div>
        </article>

        {/* 두 번째 소개글 */}
        <article className="m-auto max-w-5xl">
          <div className="mt-12 text-center">
            <h3>
              <strong>All In One</strong> 세탁 서비스
            </h3>
            <p>수거에서 부터 세탁 및 새벽 배송까지</p>
          </div>
          {/* 카드*/}
          <div className="mt-12 flex items-center justify-between">
            <div>
              <div>
                <img
                  src="https://flexible.img.hani.co.kr/flexible/normal/960/960/imgdb/resize/2019/0121/00501111_20190121.JPG"
                  className="w-8"
                  alt="Home"
                />
              </div>
              <div>
                <span>----------</span>
                <h4>수거 1</h4>
                박스나 비닐을 이용해 집앞에 세탁물을 <br />
                놓아주시면 기사님이 픽업합니다.
              </div>
            </div>
            {/* 카드 2*/}
            <div>
              <div>
                <img
                  src="https://flexible.img.hani.co.kr/flexible/normal/960/960/imgdb/resize/2019/0121/00501111_20190121.JPG"
                  className="w-8"
                  alt="Home"
                />
              </div>
              <div>
                <span>----------</span>
                <h4>수거 1</h4>
                박스나 비닐을 이용해 집앞에 세탁물을 <br />
                놓아주시면 기사님이 픽업합니다.
              </div>
            </div>
            {/* 카드 3*/}
            <div>
              <div>
                <img
                  src="https://flexible.img.hani.co.kr/flexible/normal/960/960/imgdb/resize/2019/0121/00501111_20190121.JPG"
                  className="w-8"
                  alt="Home"
                />
              </div>
              <div>
                <span>----------</span>
                <h4>수거 1</h4>
                박스나 비닐을 이용해 집앞에 세탁물을 <br />
                놓아주시면 기사님이 픽업합니다.
              </div>
            </div>
          </div>
        </article>

        {/* 세 번째 소개글*/}
        <article className="m-auto max-w-5xl">
          <div className="mt-12 flex flex-col items-center justify-between">
            {/* 지그재그 */}
            <div className="mr-auto">
              <div>
                <img
                  src="https://flexible.img.hani.co.kr/flexible/normal/960/960/imgdb/resize/2019/0121/00501111_20190121.JPG"
                  className="w-8"
                  alt="Home"
                />
              </div>
              <div>
                <h4>합리적인 가격</h4>
                <p>
                  업계 최대 최저가로 집에서 좋은 가성비로 깔끔하고 꺠끗한 세탁
                  서비스를 <br />
                  이용해 보세요.
                </p>
              </div>
            </div>

            <div className="ml-auto">
              <div>
                <h4 className="text-right">명품 케어</h4>
                <p>
                  고가의 브랜드 제품의 경우에는 프리미엄 장인들의 꼼꼼한
                  세탁으로 <br />
                  진행하여 원단 손상은 최소화 깨끗함은 최대화로 완성됩니다
                </p>
              </div>
              <div>
                <img
                  src="https://flexible.img.hani.co.kr/flexible/normal/960/960/imgdb/resize/2019/0121/00501111_20190121.JPG"
                  className="ml-auto w-8"
                  alt="Home"
                />
              </div>
            </div>
          </div>
        </article>

        {/* 네 번쨰 소개글*/}
        <section className="m-auto max-w-5xl">
          <div className="mt-12">
            <h4>
              귀찮은 빨래는 라벤데리아에 맞기고,
              <br />
              이제부터 여러분의 <strong>소중한 시간을</strong> 챙기세요.
            </h4>
            <img
              src="https://flexible.img.hani.co.kr/flexible/normal/960/960/imgdb/resize/2019/0121/00501111_20190121.JPG"
              className="w-full"
              alt="Home"
            />
          </div>
        </section>
      </section>
    </>
  );
};

export default Home;
