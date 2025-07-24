import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const isInView = useInView(videoRef, {
    amount: 0.2, // 20% of video is in user's view point
  });

  useEffect(() => {
    if (isInView) {
      videoRef.current?.play();
    } else {
      videoRef.current?.pause();
    }
  }, [isInView]);

  return (
    <main className="relative w-full h-screen overflow-hidden">
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover bg-[#021526]"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source
          src="http://localhost:5000/api/v1/video/get-hero-section"
          type="video/mp4"
        />
        Your browser does not support the video
      </video>
    </main>
  );
}
