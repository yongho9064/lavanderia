import React from "react";
import { ServiceCardProps } from "../../Typings/Application/Applicattion";
import laundryWomen from "../../Assets/Img/laundry_women.png";
import premiumLaundry from "../../Assets/Img/premium_laundry.png";
import dailyLaundry from "../../Assets/Img/daily_laundry.png";
import clothesRepair from "../../Assets/Img/clothes_repair.png";
import clothesCollectionBox from "../../Assets/Img/clothes_collection_box.png";

const services = [
    {
        title: "맞춤 세탁",
        description: "케어라벨 확인 후 맞춤 세탁",
        details: "와이셔츠/의류, 신발, 침구/리빙, 카페트, 펫, 악세사리 등",
        image: laundryWomen,
    },
    {
        title: "프리미엄 세탁",
        description: "케어라벨 확인 후 맞춤 세탁",
        details: "와이셔츠/의류, 신발, 침구/리빙, 카페트, 펫, 악세사리 등",
        image: premiumLaundry,
    },
    {
        title: "생활 빨래",
        description: "케어라벨 확인 후 맞춤 세탁",
        details: "와이셔츠/의류, 신발, 침구/리빙, 카페트, 펫, 악세사리 등",
        image: dailyLaundry,
    },
    {
        title: "수선",
        description: "케어라벨 확인 후 맞춤 세탁",
        details: "와이셔츠/의류, 신발, 침구/리빙, 카페트, 펫, 악세사리 등",
        image: clothesRepair,
    },
    {
        title: "헌옷 수거",
        description: "케어라벨 확인 후 맞춤 세탁",
        details: "와이셔츠/의류, 신발, 침구/리빙, 카페트, 펫, 악세사리 등",
        image: clothesCollectionBox,
    },
];

const ServiceCard: React.FC<ServiceCardProps> = ({
                                                     title,
                                                     description,
                                                     details,
                                                     image,
                                                 }) => (
    <div className="flex h-full cursor-pointer flex-row items-center justify-between rounded-lg border border-gray-300 p-5 shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
        <div className="mt-0 flex h-full flex-grow flex-col ">
            <h2 className="mb-2 text-xl font-bold sm:text-2xl">{title}</h2>
            <p className="mb-2 text-left text-sm text-gray-500 sm:text-base">
                {description}
            </p>
            <p className="text-left text-xs text-blue-400 sm:text-sm">{details}</p>
        </div>
        <div className="flex h-full items-end">
            {image && (
                <img
                    src={image}
                    alt={title}
                    className={`ml-4 object-contain h-24 w-24 sm:h-28 sm:w-28 2xl:w-44 3xl:h-48 3xl:w-48`}
                />
            )}
        </div>
    </div>
);

const Application = () => {
    return (
        <div className="mx-auto mt-5 w-full lg:h-[500px] lg:w-2/3 lg:mt-8 lg:pr-0 3xl:h-[800px] 3xl:mt-10">
            <header className="mb-0 px-5 text-center lg:mb-5 lg:px-0">
                <h1 className="mb-3 flex justify-start text-xl font-bold lg:text-4xl">
                    오늘 밤 11시까지 신청하면
                </h1>
                <span className="flex justify-start text-sm text-gray-600 lg:text-lg">
                    04/29(월) 아침 7시까지 배송완료!
                </span>
            </header>

            <div className="grid h-full grid-cols-1 gap-x-5 gap-y-5 p-5 sm:grid-cols-2 lg:p-0">
                <div className="col-span-1 flex flex-col gap-5">
                    {services.slice(0, 2).map((service) => (
                        <ServiceCard
                            key={service.title}
                            title={service.title}
                            description={service.description}
                            details={service.details}
                            image={service.image}
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
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Application;
