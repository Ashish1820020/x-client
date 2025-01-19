"use client";

import React from "react";
import { IKImage } from "imagekitio-next";
const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;
interface IImage {
  path: string;
  h: number;
  w: number;
  alt: string;
  transform?: boolean,
  className?: string
}
const Image = ({ path, h, w, alt, transform, className }: IImage) => {
  return (
    <IKImage
      urlEndpoint={urlEndpoint}
      path={path}
      className={className}
      alt={alt}
      lqip={{active: true, quality: 20}}
      {
        ...(transform ?
        {transformation:[{ height: `${h}`, width: `${w}`}]}
        :
        {width: w, height: h}
        )
      }
    />
  );
};

export default Image;
