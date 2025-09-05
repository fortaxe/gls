export interface PrimaryButtonProps {
   name: string;
   onClick: () => void;
   variant: "primary" | "secondary";
}

export interface LatestLaunchCardProps {
  firstText: string;
  secondText: string;
  image: string;
  link: string;
}