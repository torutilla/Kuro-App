import PetGrid from "./PetGrid.tsx";
import type { Pet } from "../../schema/petSchema.ts";
import Button from "@shared/components/common/Button.tsx";
import {
  ArrowBack,
  ArrowBackIos,
  ArrowForwardIos,
  Close,
  ExitToApp,
} from "@mui/icons-material";
import { useState } from "react";
import { cn } from "@shared/index.ts";

type PetDrawerProps = {
  pets: Pet[];
};
function PetDrawer({ pets }: PetDrawerProps) {
  const [isOpen, setOpen] = useState(false);
  const onButtonClick = () => {
    setOpen((o) => !o);
  };
  return (
    <div
      className={cn(
        `fixed top-0 right-0 h-full w-full lg:w-1/2 z-50
        flex flex-col transform transition-transform duration-300 shadow-lg bg-white`,
        `${isOpen ? "translate-x-0" : "translate-x-full"}`,
      )}
    >
      <div className="flex justify-end p-2 lg:hidden">
        <Button variant={"outline"} className="p-1" onClick={onButtonClick}>
          <Close />
        </Button>
      </div>
      <div className="absolute -left-9 top-1/2">
        <Button
          className="rounded-tr-none rounded-br-none pr-1 py-3 text-md"
          onClick={onButtonClick}
        >
          {isOpen ? (
            <ArrowForwardIos fontSize="inherit" />
          ) : (
            <ArrowBackIos fontSize="inherit" />
          )}
        </Button>
      </div>
      <div className="sticky top-0 bg-white z-10 p-2">
        <h1>Pet Listing</h1>
      </div>
      <div className={cn("overflow-y-auto flex-1 px-2 ")}>
        <PetGrid pets={pets} />
      </div>
    </div>
  );
}

export default PetDrawer;
