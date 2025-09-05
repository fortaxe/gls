import { PrimaryButtonProps } from "@/app/types";
import { cn } from "@/lib/utils";

const variants = {
    primary: "bg-white text-[#1e1e1e] ",
    secondary: "bg-[#1e1e1e] text-white",
}

const PrimaryButton = ({ name, onClick, variant="primary" }: PrimaryButtonProps) => {
    return (
        <button 
        className={cn(
            variants[variant],
            " rounded-full text-[16px] font-medium",
            " tracking-[0] font-medium leading-[150%]",
            "px-6 py-3"
        )}
        onClick={onClick}>
            {name}
        </button>
    )
}

export default PrimaryButton;