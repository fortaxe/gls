import { PrimaryButtonProps } from "@/app/types";
import { cn } from "@/lib/utils";

const PrimaryButton = ({ name, onClick }: PrimaryButtonProps) => {
    return (
        <button 
        className={cn(
            "bg-white text-black rounded-full text-[16px] font-medium",
            " tracking-[0] font-medium leading-[150%]",
            "px-6 py-3"
        )}
        onClick={onClick}>
            {name}
        </button>
    )
}

export default PrimaryButton;