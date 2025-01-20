import blankThumbnail from "../../../public/notFoundImg.webp";
import { Skeleton } from "./Skeleton";

const CourseItemSkeleton = () => {
  return (
    <div className="mt-10 w-[90%] lg:w-[296px] pb-3 lg:pb-0 lg:h-[389px] rounded-[24px] shadow-primaryShadow px-4 ">
      <img src={blankThumbnail} className="courseItemImage" />

      <Skeleton width="80%" height="7px" className="mt-5 mb-5 mr-1" />
      <Skeleton width="95%" height="7px" className="mr-1" count={5} />
    </div>
  );
};

export { CourseItemSkeleton };
