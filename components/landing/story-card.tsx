import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

interface StoryCardProps {
  name: string;
  title: string;
  
  image: string;
  videoUrl: string;
}


const StoryCard = ({
  name,
  title,

  image,
  videoUrl,
}: StoryCardProps) => {
    const router = useRouter();
  return (
    <div className="relative w-[623px] mx-auto rounded-2xl overflow-hidden bg-white ">
      <div className="relative ">
        <img
          src={image}
          alt="latest launch"
        className="w-[623px] h-[454px] object-cover"
        />
        <Dialog>
          <DialogTrigger asChild>
            <button className="absolute inset-0 flex items-center justify-center cursor-pointer  max-w-[600px]">
              <img 
                src="/play.png"
                alt="play"
                className="hover:scale-110 transition-transform duration-200"
              />
            </button>
          </DialogTrigger>
          <DialogContent className=" w-full p-0 border-none  shadow-none">
            <div className="relative w-full aspect-video rounded-lg overflow-hidden">
              <iframe
                src={videoUrl}
                title={`${name} - ${title}`}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </DialogContent>
        </Dialog>
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-12 ">
          <p className="text-white text-[32px] font-semibold leading-[110%] mb-3">
            {name}
          </p>
          <p className="text-white text-[16px] font-normal leading-[110%] max-w-[450px]">
            {title}
          </p>
        </div>
      
      </div>
    </div>
  );
};

export default StoryCard;
