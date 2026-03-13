import { cn } from "@shared/index.ts";
import { PetSchema, type Pet } from "../../schema/petSchema.ts";
import PetCard from "../common/PetCard.tsx";

type PetGridProps = {
  pets: Pet[];
};
function PetGrid({ pets }: PetGridProps) {
  return (
    <div className="">
      <h1 className="m-2">Pet Listing</h1>
      <div
        className={cn(
          "grid gap-4",
          "grid-cols-[repeat(auto-fit,minmax(230px,1fr))] lg:grid-cols-[repeat(auto-fit,minmax(230px,300px))]",
        )}
      >
        {pets.map((pet, index) => {
          const validatedPet = PetSchema.parse(pet);
          return <PetCard key={validatedPet.id + index} pet={validatedPet} />;
        })}
      </div>
    </div>
  );
}

export default PetGrid;
