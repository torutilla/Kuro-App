import { cn } from "@shared/index.ts";
import Button from "@shared/components/common/Button.tsx";
import LabeledIcon from "@shared/components/common/LabeledIcon.tsx";
import { AccessTime, DateRange, LocationOn } from "@mui/icons-material";
import samp from "@assets/sample.jpg";
import type { Pet } from "../../schema/petSchema.ts";
import PetBadge from "./PetBadge.tsx";
import Image from "@shared/components/common/SkeletonImg.tsx";
import Divider from "@shared/components/common/Divider.tsx";
import { Link } from "react-router-dom";
import { useMapProvider } from "@features/map/components/MapProvider.tsx";
import { formatTimeAgo } from "@shared/utils/datetime.ts";
type PetCardProps = {
  pet: Pet;
};

function PetCard({ pet }: PetCardProps) {
  const { setFlyToTarget } = useMapProvider();
  const handleMapClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (pet.location_point) {
      setFlyToTarget([pet.location_point.lat, pet.location_point.lng]);
    }
  };
  return (
    <Link
      to={`/pets/${pet.id}`}
      className="group block transition-all duration-300 hover:-translate-y-1"
    >
      <div
        className={cn(
          "flex flex-col overflow-hidden rounded-2xl border bg-card text-card-foreground shadow-sm transition-colors",
          "border-neutral-200 group-hover:border-primary/50 group-hover:shadow-md",
        )}
      >
        <Image
          alt={pet.name}
          fallback={samp}
          className="w-full object-cover aspect-video"
          src={pet.image_url}
        />
        <div className="flex flex-col justify-between p-3 gap-2">
          <div className="grid grid-rows-[auto_auto_auto] gap-1">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-primary">{pet.name}</p>
              <PetBadge status={pet.status} />
            </div>
            <div className="text-sm text-neutral-600">
              <LabeledIcon icon={LocationOn} label={pet.last_seen_location} />
              <LabeledIcon
                icon={AccessTime}
                label={formatTimeAgo(pet.date_lost)}
              />
            </div>
            <div className="my-2">
              <Divider />
            </div>
            <p className="line-clamp-3 text-wrap min-h-12">{pet.description}</p>
          </div>
          <Button variant="solid" onClick={handleMapClick}>
            View in Map
          </Button>
        </div>
      </div>
    </Link>
  );
}

export default PetCard;
