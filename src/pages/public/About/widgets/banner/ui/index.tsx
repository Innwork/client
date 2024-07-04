import {FC, ReactNode} from "react";
import cls from "@src/pages/public/About/widgets/banner/styles/banner.module.scss";
import {SkeletonImageLoader} from "@src/shared/ui/skeleton/Skeleton";

export interface IBanner {
  src: string
  children: ReactNode
}

export const Banner:FC<IBanner> = ({children, src}) => {
  return (
    <div className={cls.banner_container}>
      <div className={cls.banner_content}>{children}</div>
      <div className={cls.banner_gradient}></div>
      <SkeletonImageLoader className={cls.banner_img} src={src}/>
    </div>
  );
};
