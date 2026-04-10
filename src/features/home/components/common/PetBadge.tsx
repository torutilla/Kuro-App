import { cn } from "@shared/index.ts";

type PetBadgeProps = {
  status: "lost" | "found" | "sighted";
};
function PetBadge({ status }: PetBadgeProps) {
  const colors = {
    lost: cn("bg-error"),
    found: cn("bg-success"),
    sighted: cn("bg-amber-400"),
  }[status];
  return (
    <div>
      <p className={cn(" rounded-2xl px-3 text-sm  text-white", colors)}>
        {status.replace(status.charAt(0), status.charAt(0).toUpperCase())}
      </p>
    </div>
  );
}

export default PetBadge;
