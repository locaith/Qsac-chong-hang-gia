import { cn } from "@/lib/utils";
import adLeaderboard1 from "@/assets/ad-leaderboard-1.jpg";
import adLeaderboard2 from "@/assets/ad-leaderboard-2.jpg";
import adLeaderboard3 from "@/assets/ad-leaderboard-3.jpg";
import adSidebar1 from "@/assets/ad-sidebar-1.jpg";
import adSidebar2 from "@/assets/ad-sidebar-2.jpg";
import adSidebar3 from "@/assets/ad-sidebar-3.jpg";
import adInline1 from "@/assets/ad-inline-1.jpg";
import adInline2 from "@/assets/ad-inline-2.jpg";

interface AdBannerProps {
  type: "leaderboard-top" | "sidebar-rect" | "skyscraper" | "inline" | "bottom";
  variant?: 1 | 2 | 3;
  className?: string;
}

const getAdImage = (type: string, variant: number = 1) => {
  if (type === "leaderboard-top" || type === "bottom") {
    return variant === 2 ? adLeaderboard2 : variant === 3 ? adLeaderboard3 : adLeaderboard1;
  }
  if (type === "sidebar-rect") {
    return variant === 2 ? adSidebar2 : variant === 3 ? adSidebar3 : adSidebar1;
  }
  if (type === "inline") {
    return variant === 2 ? adInline2 : adInline1;
  }
  return adLeaderboard1;
};

const adConfig = {
  "leaderboard-top": {
    aspectRatio: "aspect-[970/90]",
    sizes: "w-full max-w-[970px]"
  },
  "sidebar-rect": {
    aspectRatio: "aspect-[300/250]",
    sizes: "w-full max-w-[300px]"
  },
  "skyscraper": {
    aspectRatio: "aspect-[160/600]",
    sizes: "w-full max-w-[160px]"
  },
  "inline": {
    aspectRatio: "aspect-[728/90]",
    sizes: "w-full max-w-[728px]"
  },
  "bottom": {
    aspectRatio: "aspect-[970/90]",
    sizes: "w-full max-w-[970px]"
  }
};

const AdBanner = ({ type, variant = 1, className }: AdBannerProps) => {
  const config = adConfig[type];
  const adImage = getAdImage(type, variant);

  return (
    <div className={cn("flex justify-center items-center bg-muted/30 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow", className)}>
      <div className={cn(config.sizes, config.aspectRatio, "relative group cursor-pointer")}>
        <img 
          src={adImage}
          alt="Quảng cáo"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <div className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
          Quảng cáo
        </div>
      </div>
    </div>
  );
};

export default AdBanner;
