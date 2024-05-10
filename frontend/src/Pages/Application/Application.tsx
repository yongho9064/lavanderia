import React from "react";

const Application = () => {
  return (
    <div className="mt-5 h-[700px]">
      <header>
        <h1>오늘 밤 11시까지 신청하면</h1>
        <span>04/29(월) 아침 7시까지 배송완료</span>
      </header>

      <div className="flex h-full items-center justify-between bg-slate-400 py-5">
        <div className="flex h-full w-2/5 flex-col gap-10">
          <div className="flex h-72 items-center justify-center rounded border border-cyan-400 bg-cyan-400">
            <span>asd</span>
          </div>
          <div className="flex h-72 items-center justify-center rounded border border-cyan-400 bg-cyan-400">
            <span>asd</span>
          </div>
        </div>

        <div className="flex h-full w-1/2 flex-col gap-10">
          <div className="flex h-44 items-center justify-center rounded border border-cyan-400 bg-cyan-400">
            <span>asd</span>
          </div>
          <div className="flex h-44 items-center justify-center rounded border border-cyan-400 bg-cyan-400">
            <span>asd</span>
          </div>
          <div className="flex h-44 items-center justify-center rounded border border-cyan-400 bg-cyan-400">
            <span>asd</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Application;
