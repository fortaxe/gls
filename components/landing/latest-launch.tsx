import { LatestLaunchCardProps } from "@/app/types";

const LatestLaunchCard = ({
  firstText,
  secondText,
  image,
}: LatestLaunchCardProps) => {
  return (
    <div className="relative w-[623px] mx-auto rounded-2xl overflow-hidden bg-white shadow">
      <div className="relative ">
        <img
          src={image}
          alt="latest launch"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-12 ">
          <p className="text-white text-[32px] font-semibold leading-[110%] mb-1">
            {firstText}
          </p>
          <p className="text-white text-[18px] font-normal leading-[110%] max-w-[450px]">
            {secondText}
          </p>
        </div>
        <button className="absolute bottom-12 right-12 text-white  hover:no-underline transition-all font-medium text-[18px]">
          See Details
        </button>
      </div>
    </div>
  );
};

export default LatestLaunchCard;
