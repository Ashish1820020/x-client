"use client";
import { IKVideo } from "imagekitio-next";
const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

type TVideo = {
  path: string;
  className?: string;
};
const Video = ({ path, className }: TVideo) => {
  return (
    <IKVideo 
    urlEndpoint={urlEndpoint} 
    path={path} 
    className={className} 
    transformation={[
        {width: "1920", height: "1080", q: "70"},
        { raw: "l-text,i-Ashish,fs-100,co-white,l-end" },
    ]}
    controls
    />
  );
};

export default Video;
