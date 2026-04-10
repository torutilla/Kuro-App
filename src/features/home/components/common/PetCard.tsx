import { cn } from "@shared/index.ts";
import Button from "@shared/components/common/Button.tsx";
import LabeledIcon from "@shared/components/common/LabeledIcon.tsx";
import { AccessTime, LocationOn } from "@mui/icons-material";
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
        <div className="relative aspect-16/10 overflow-hidden">
          <Image
            alt={pet.name}
            src={pet.image_url}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute right-3 top-3">
            <PetBadge status={pet.status} />
          </div>
        </div>

        <div className="flex flex-1 flex-col p-4">
          {/* Info Section */}
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold tracking-tight text-primary">
                {pet.name}
              </h3>
            </div>

            <div className="flex flex-col gap-0.5 text-sm">
              <LabeledIcon icon={LocationOn} label={pet.last_seen_location} />
              <LabeledIcon
                icon={AccessTime}
                label={formatTimeAgo(pet.date_lost)}
              />
            </div>

            <div className="py-1">
              <Divider />
            </div>

            <p className="line-clamp-2 min-h-12 text-sm leading-relaxed text-neutral-600">
              {pet.description}
            </p>
          </div>

          {/* Action Section */}
          <div className="mt-2 flex justify-start">
            <Button onClick={handleMapClick}>Locate on Map</Button>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default PetCard;
