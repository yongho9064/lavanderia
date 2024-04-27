import React from "react";

const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-[500px] h-[700px] bg-white flex flex-col  items-center text-center border border-black">
        <div className="flex justify-center items-center w-full h-32 bg-slate-400">
          <span className="text-3xl">lavanderia</span>
        </div>
        <div className="w-full h-32 bg-[yellow]">
          lavanderia
        </div>
        <div className="w-full h-32 bg-[green]">
          lavanderia
        </div>
        <div className="w-full h-32 bg-[blue]">
          lavanderia
        </div>
      </div>
    </div>
  );
};

export default Login;