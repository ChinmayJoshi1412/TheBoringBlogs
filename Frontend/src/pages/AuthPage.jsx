import { useState, useEffect } from "react";
import SignIn from "../components/SignIn.jsx";
import SignUp from "../components/SignUp.jsx";

const AuthPage = () => {
  const [curpage, setcurpage] = useState(true);
  const curpageclass = "bg-slate text-white";
  return (
    <div className="flex flex-col h-[530px] justify-center items-center p-4">
      <div className="flex flex-row w-1/2 text-2xl justify-center items-center mt-6">
        <div
          className={`border border-lightSlate rounded-l-xl p-4 cursor-pointer text-lg font-bold md:text-xl ${
            curpage ? curpageclass : "text-slate"
          }`}
          onClick={() => setcurpage(true)}
        >
          Sign In
        </div>
        <div
          className={`border border-lightSlate rounded-r-xl p-4 cursor-pointer text-lg font-bold md:text-xl ${
            !curpage ? curpageclass : "text-slate"
          }`}
          onClick={() => setcurpage(false)}
        >
          Sign Up
        </div>
      </div>
      <div className="flex flex-row w-full justify-center mt-4 space-x-4 transition-all duration-300">
        {curpage ? 
          <SignIn/>:<SignUp/>}
      </div>
    </div>
  );
};

export default AuthPage;
