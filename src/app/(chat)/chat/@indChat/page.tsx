"use client";

import Lottie from "lottie-react";
import React from "react";
import animationData from "../../../../../public/animations/chatPage.json";

const IndChat = () => {
  return (
    <div className="h-[100dvh] w-full flex justify-center items-center">
      <div className="w-[30%]">
        <Lottie className="w-full" animationData={animationData} autoplay />
        <h1 className="text-center text-3xl font-bold">Hi!, Welcome back</h1>
        <p className="text-center ">
          Ready to chat with everyone and join your favourite event this year?
          Let's chat with everyone.
        </p>
      </div>
    </div>
  );
};

export default IndChat;
