import React from "react";

const Application = () => {
  return (
    <div className="mt-12 h-full md:h-[600px]">
      <header className="mb-0 px-5 text-center md:mb-5 md:px-0">
        <h1 className="mb-3 flex justify-start text-3xl font-bold md:text-4xl">
          오늘 밤 11시까지 신청하면
        </h1>
        <span className="flex justify-start text-sm text-gray-600 md:text-base">
          04/29(월) 아침 7시까지 배송완료!
        </span>
      </header>

      <div className="grid h-full grid-cols-1 gap-x-5 gap-y-5 p-5 md:grid-cols-2 md:p-0">
        <div className="col-span-1 flex grid-rows-3 flex-col gap-5 md:col-span-1">
          <div className="flex h-full flex-col items-start justify-start rounded-lg border border-gray-300 p-5 shadow-md">
            <h2 className="mb-2 text-xl font-bold">맞춤 세탁</h2>
            <p className="mb-2 text-left text-sm text-gray-500">
              케어라벨 확인 후 맞춤 세탁
            </p>
            <p className="text-left text-xs text-blue-400">
              와이셔트/의류, 신발, 침구/리빙, 카페트, 펫, 악세사리 등
            </p>
          </div>
          <div className="flex h-full flex-col items-start justify-start rounded-lg border border-gray-300 p-5 shadow-md">
            <h2 className="mb-2 text-xl font-bold">생활 빨래</h2>
            <p className="mb-2 text-left text-sm text-gray-500">
              케어라벨 확인 후 맞춤 세탁
            </p>
            <p className="text-left text-xs text-blue-400">
              와이셔트/의류, 신발, 침구/리빙, 카페트, 펫, 악세사리 등
            </p>
          </div>
        </div>

        <div className="col-span-1 grid grid-rows-3 gap-5 md:col-span-1 ">
          <div className="flex h-full flex-col items-start justify-start rounded-lg border border-gray-300 p-5 shadow-md">
            <h2 className="mb-2 text-xl font-bold">프리미엄 세탁</h2>
            <p className="mb-2 text-left text-sm text-gray-500">
              케어라벨 확인 후 맞춤 세탁
            </p>
            <p className="text-left text-xs text-blue-400">
              와이셔트/의류, 신발, 침구/리빙, 카페트, 펫, 악세사리 등
            </p>
          </div>
          <div className="flex h-full flex-col items-start justify-start rounded-lg border border-gray-300 p-5 shadow-md">
            <h2 className="mb-2 text-xl font-bold">수선</h2>
            <p className="mb-2 text-left text-sm text-gray-500">
              케어라벨 확인 후 맞춤 세탁
            </p>
            <p className="text-left text-xs text-blue-400">
              와이셔트/의류, 신발, 침구/리빙, 카페트, 펫, 악세사리 등
            </p>
          </div>
          <div className="flex h-full flex-col items-start justify-start rounded-lg border border-gray-300 p-5 shadow-md">
            <h2 className="mb-2 text-xl font-bold">헌옷 수거</h2>
            <p className="mb-2 text-left text-sm text-gray-500">
              케어라벨 확인 후 맞춤 세탁
            </p>
            <p className="text-left text-xs text-blue-400">
              와이셔트/의류, 신발, 침구/리빙, 카페트, 펫, 악세사리 등
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Application;
