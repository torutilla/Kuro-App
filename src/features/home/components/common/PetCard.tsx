import { cn } from "@shared/index.ts";
import Button from "@shared/components/common/Button.tsx";
import LabeledIcon from "@shared/components/common/LabeledIcon.tsx";
import { DateRange, LocationOn } from "@mui/icons-material";
import samp from "@assets/sample.jpg";
import type { Pet } from "../../schema/petSchema.ts";
import PetBadge from "./PetBadge.tsx";
import { normalizeDatetime } from "@shared/utils/datetime.ts";
import Image from "@shared/components/common/SkeletonImg.tsx";
import Divider from "../../../../shared/components/common/Divider.tsx";
import { Link } from "react-router-dom";
type PetCardProps = {
  pet: Pet;
};

function PetCard({ pet }: PetCardProps) {
  return (
    <Link to={`/pets/${pet.id}`}>
      <div
        className={cn(
          "hover:scale-101 hover:border hover:border-primary transition-all",
          "rounded-xl grid overflow-clip border cursor-pointer",
          "border-neutral-300 bg-card border",
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
              <LabeledIcon
                icon={<LocationOn fontSize="inherit" />}
                label={pet.last_seen_location}
              />
              <LabeledIcon
                icon={<DateRange fontSize="inherit" />}
                label={normalizeDatetime(pet.date_lost).date}
              />
            </div>
            <div className="my-2">
              <Divider />
            </div>
            <p className="line-clamp-3 text-wrap min-h-12">{pet.description}</p>
          </div>
          {/* <Button variant="solid">View Details</Button> */}
        </div>
      </div>
    </Link>
  );
}

export default PetCard;
