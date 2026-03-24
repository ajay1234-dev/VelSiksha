"use client";

import Image, { ImageProps } from "next/image";
import React from "react";

interface ProtectedImageProps extends Omit<ImageProps, "src"> {
  src: string;
  alt: string;
  className?: string;
  width?: number | `${number}`;
  height?: number | `${number}`;
  unoptimized?: boolean;
}

export default function ProtectedImage({
  src,
  alt,
  className = "",
  ...props
}: ProtectedImageProps) {
  const handleContextMenu = (e: React.MouseEvent<HTMLImageElement>) => {
    e.preventDefault();
    return false;
  };

  const handleDragStart = (e: React.DragEvent<HTMLImageElement>) => {
    e.preventDefault();
    return false;
  };

  return (
    <Image
      {...(props as any)}
      src={src}
      alt={alt}
      className={`protected-image ${className}`}
      onContextMenu={handleContextMenu}
      onDragStart={handleDragStart}
      draggable={false}
      unoptimized={true}
    />
  );
}
