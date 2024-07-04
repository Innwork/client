import React, { FC, useState, useEffect } from 'react';
import classes from "@src/shared/ui/skeleton/Skeleton.module.scss";
import Skeleton from "react-loading-skeleton";
import { useClass } from "@src/shared/hooks";

interface SkeletonProps {
  className?: string;
  src: string;
  rounded?: boolean;
}

export const SkeletonImageLoader: FC<SkeletonProps> = ({ src, className, rounded = false }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const image = new Image();
    image.src = src;
    image.onload = function () {
      if (isMounted) {
        setIsLoading(false);
      }
    };

    return () => {
      isMounted = false;
    };
  }, [src]);

  return (
    <div className={classes.skeletonContainer}>
      {isLoading ? (
        <Skeleton className={useClass([classes.skeletonItem, rounded ? "" : classes['square']])} />
      ) : (
        <img className={className} src={src} alt="" loading="lazy" />
      )}
    </div>
  );
};
