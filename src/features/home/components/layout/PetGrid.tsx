import { cn } from "@shared/index.ts";
import type { Pet } from "../../schema/petSchema.ts";
import PetCard from "../common/PetCard.tsx";
type PetGridProps = {
  pets: Pet[];
};
function PetGrid({ pets }: PetGridProps) {
  return (
    <div
      className={cn(
        "grid gap-4",
        "grid-cols-[repeat(auto-fit,minmax(230px,1fr))] lg:grid-cols-[repeat(auto-fit,minmax(230px,320px))]",
      )}
    >
      {pets.map((pet, index) => (
        <PetCard key={pet.id + index} pet={pet} />
      ))}
    </div>
  );
}

export default PetGrid;
