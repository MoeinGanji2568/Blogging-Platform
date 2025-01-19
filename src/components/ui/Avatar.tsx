import manPicture from "../../../public/man-pic.webp";
function Avatar({
  src,
  width = 24,
  height = 24,
}: {
  src: string | null;
  width?: number;
  height?: number;
}) {
  return (
    <img
      src={src || manPicture}
      width={width}
      height={height}
      className="rounded-full ring-1 ring-secondary-300 ml-2"
      alt={src || "/images/avatar.png"}
    />
  );
}
export default Avatar;
