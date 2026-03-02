import { cn } from "@shared/index.ts";
import Button from "@shared/components/common/Button.tsx";
import LabeledIcon from "@shared/components/common/LabeledIcon.tsx";
import { DateRange, LocationOn } from "@mui/icons-material";
import samp from "@assets/sample.jpg";
import type { Pet } from "../../schema/petSchema.ts";
type PetCardProps = {
  pet: Pet;
};

function PetCard({ pet }: PetCardProps) {
  return (
    <div
      className={cn(
        "hover:scale-102 transition-transform",
        "rounded-xl grid overflow-clip border cursor-pointer",
        "border-neutral-200 bg-card",
      )}
    >
      <div>
        <img
          className={cn("w-full h-full object-cover aspect-4/3")}
          src={samp}
        />
      </div>
      <div className={cn("flex flex-col p-2 gap-2")}>
        <div>
          <p className={cn("font-bold text-lg text-primary")}>
            {pet.description}
          </p>
          <LabeledIcon icon={<LocationOn />} label={pet.last_seen_location} />
          <LabeledIcon icon={<DateRange />} label={pet.date_lost} />
        </div>
        <Button variant="solid">View in Map</Button>
      </div>
    </div>
  );
}

export default PetCard;
