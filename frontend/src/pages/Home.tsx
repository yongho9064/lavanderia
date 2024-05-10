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
import Header from "../components/Common/Header";

const Home = () => {
  return (
    <>
      <Header />
      <section className="mt-4 font-roboto">
        {/* 광고 */}
        <article>
          <div>
            <img src={home} alt="Home" className="w-full" />
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
            <img
              src={gitImage}
              alt="dailywash"
              className="h-90 w-80 rounded-2xl"
            />
          </div>
        </article>

        {/* 두 번째 소개글 */}
        <article className="m-auto max-w-5xl">
          <div className="mb-16  mt-16 text-center">
            <span className="text-3xl text-blue-500">All In One</span>{" "}
            <span className="text-3xl"> 세탁 서비스</span>
            <p className="mt-4 text-base text-gray-500">
              수거에서 부터 세탁 및 새벽 배송까지
            </p>
          </div>
          {/* 카드*/}
          <div className="flex items-center justify-between pt-4">
            <div>
              <div>
                <img src={step1} alt="Home" className="mb-4 w-64" />
              </div>
              <div>
                <p className="mb-4 border-b-4 border-blue-500"></p>
                <h4 className="mb-2 text-2xl">수거</h4>
                <p className="text-sm text-gray-500">
                  박스나 비닐을 이용해 집앞에 세탁물을 <br />
                  놓아주시면 기사님이 픽업합니다.
                </p>
              </div>
            </div>
            {/* 카드 2*/}
            <div>
              <div>
                <img src={step2} className="mb-4 w-64" alt="Home" />
              </div>
              <div>
                <p className="mb-4 border-b-4 border-blue-500"></p>
                <h4 className="mb-2 text-2xl">검수/세탁</h4>
                <p className="text-sm text-gray-500">
                  박스나 비닐을 이용해 집앞에 세탁물을 <br />
                  놓아주시면 기사님이 픽업합니다.
                </p>
              </div>
            </div>
            {/* 카드 3*/}
            <div>
              <div>
                <img src={step3} className="mb-4 w-64" alt="Home" />
              </div>
              <div>
                <p className="mb-4 border-b-4 border-blue-500"></p>
                <h4 className="mb-2 text-2xl">배달</h4>
                <p className="text-sm text-gray-500">
                  박스나 비닐을 이용해 집앞에 세탁물을 <br />
                  놓아주시면 기사님이 픽업합니다.
                </p>
              </div>
            </div>
          </div>
        </article>

        {/* 세 번째 소개글*/}
        <article className="m-auto max-w-5xl">
          <div className="mt-60 flex flex-col items-center justify-between">
            {/* 지그재그 */}
            <div className="mb-16 mr-auto">
              <div>
                <img src={price} className="w-96" alt="Home" />
              </div>
              <div>
                <h4 className="mb-4 mt-4 text-2xl">합리적인 가격</h4>
                <p className="text-base text-gray-500">
                  업계 최대 최저가로 집에서 좋은 가성비로 깔끔하고 꺠끗한 세탁
                  서비스를 <br />
                  이용해 보세요.
                </p>
              </div>
            </div>

            <div className="mb-16 ml-auto">
              <div>
                <h4 className="mb-4 text-right text-2xl">드라이&물세탁</h4>
                <p className="mb-4 text-base text-gray-500">
                  라벤데리앙의 꼼꼼한 절차를 선정된 10년 이상의 경력을 보유한
                  전문가가 <br />
                  고퀄리티의 세탁 서비스를 완성합니다.
                </p>
              </div>
              <div>
                <img src={dry} className="ml-auto w-80" alt="Home" />
              </div>
            </div>

            <div className="mb-16 mr-auto">
              <div>
                <img src={drywarter} className="w-96" alt="Home" />
              </div>
              <div>
                <h4 className="mb-4 mt-4 text-2xl">침구류 물세탁</h4>
                <p className="text-base text-gray-500">
                  무거운 침구류를 이제 대신 세탁해드립니다. 깨끗하게 세탁 후{" "}
                  <br />
                  배송해드립니다.
                </p>
              </div>
            </div>

            <div className="mb-16 ml-auto">
              <div>
                <h4 className="mb-4 text-right text-2xl">새벽배송</h4>
                <p className="mb-4 text-base text-gray-500">
                  아침에 일어나서 바로 즉시 깨끗한 세탁물을 받을 수 있는 새벽
                  배송을 <br />
                  진행합니다.
                </p>
              </div>
              <div>
                <img src={delivery} className="ml-auto w-96" alt="Home" />
              </div>
            </div>

            <div className="mb-16 mr-auto">
              <div>
                <h4 className="mb-4 text-2xl">명품케어</h4>
                <p className="mb-4 text-base text-gray-500">
                  고가의 브랜드 제품의 경우에는 프리미엄 장인들의 꼼꼼한
                  세탁으로 <br />
                  진행하여 원단 손상은 최소화 깨끗함은 최대화로 완성됩니다.
                </p>
              </div>

              <div>
                <img src={luxury} className="w-96" alt="Home" />
              </div>
            </div>
          </div>
        </article>

        {/* 네 번쨰 소개글*/}
        <section className="m-auto max-w-5xl">
          <div className="mt-40">
            <h4 className="text-3xl">
              세탁으로 부터 찾는 나의 시간,
              <br />
              이제 <strong className="text-blue-500">라벤데리아에</strong>{" "}
              맡기세요
            </h4>
            <img src={story} className="w-full" alt="Home" />
          </div>
        </section>
      </section>
    </>
  );
};

export default Home;
