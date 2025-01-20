import ReactLoadingSkeleton from "react-loading-skeleton";

import "react-loading-skeleton/dist/skeleton.css";

const Skeleton = ({ ...rest }) => {
  return (
    <ReactLoadingSkeleton
      baseColor={undefined}
      highlightColor={undefined}
      {...rest}
    />
  );
};

export { Skeleton };
