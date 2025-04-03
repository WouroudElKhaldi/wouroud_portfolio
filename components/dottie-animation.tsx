import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const DottieAnimation = ({ src }: { src: string }) => {
  return (
    <div className="w-full flex min-h-screen bg-black text-white overflow-hidden items-center justify-center">
      <DotLottieReact src={src} loop autoplay />
    </div>
  );
};

export default DottieAnimation;
// https://lottie.host/0c2415f8-6300-4fdd-b6f6-0a5bb43de5be/AX8sYEu39U.lottie
