import React from "react";
import ServiceCard from "./ServiceCard"; // Adjust the import path if needed
import laundryWomen from "../../Assets/Img/laundry_women.png";
import premiumLaundry from "../../Assets/Img/premium_laundry.png";
import dailyLaundry from "../../Assets/Img/daily_laundry.png";
import clothesRepair from "../../Assets/Img/clothes_repair.png";
import clothesCollectionBox from "../../Assets/Img/clothes_collection_box.png";

const services = [
    {
        title: "맞춤 세탁",
        description: "AI로 확인 하는 의류 맞춤형 세탁 ",
        details: "모든 의류를 넣어주세요!",
        image: laundryWomen,
        url: "imgApplication",
    },
    {
        title: "프리미엄 세탁",
        description: "더 섬세한 케어로 맞춤세탁",
        details: "모든 의류, 패션잡화 및 신발에 가능합니다!",
        image: premiumLaundry,
        url: "imgApplication",
    },
    {
        title: "생활 빨래",
        description: "소재/색깔 구분없이 일괄 물세탁",
        details: "수건,속옷 양말등",
        image: dailyLaundry,
        url: "applicationDetail",
    },
    {
        title: "수선",
        description: "의류 또는 신발 모두 수선 가능",
        details: "새로 사는 것보다 수선은 어떠신가요?",
        image: clothesRepair,
        url: "applicationDetail",
    },
    {
        title: "헌옷 수거",
        description: "신청하고 포인트 받기!",
        details: "여러가지 옷들을 넣어주세요!",
        image: clothesCollectionBox,
        url: "applicationDetail",
    },
];

const Application = () => {
    return (
      <div className="mx-auto mt-5 w-full">
          <header className="mb-0 px-5 text-center">
              <h1 className="mb-3 flex justify-start text-xl font-bold ">
                  오늘 밤 11시까지 신청하면
              </h1>
              <span className="flex justify-start text-sm font-bold ">
                    04/29(월) 아침 7시까지 배송완료!
                </span>
          </header>

          <div className="grid h-full grid-cols-1 gap-x-5 gap-y-5 p-5 ">
              <div className="col-span-1 flex flex-col gap-5">
                  {services.slice(0, 2).map((service) => (
                    <ServiceCard
                      key={service.title}
                      title={service.title}
                      description={service.description}
                      details={service.details}
                      image={service.image}
                      url={service.url}
                    />
                  ))}
              </div>

              <div className="col-span-1 grid grid-rows-3 gap-5">
                  {services.slice(2).map((service) => (
                    <ServiceCard
                      key={service.title}
                      title={service.title}
                      description={service.description}
                      details={service.details}
                      image={service.image}
                      url={service.url}
                    />
                  ))}
              </div>
          </div>
      </div>
    );
};

export default Application;
