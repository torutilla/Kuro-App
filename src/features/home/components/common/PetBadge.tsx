import { cn } from "@shared/index.ts";

type PetBadgeProps = {
  status: "lost" | "found" | "sighted";
};
function PetBadge({ status }: PetBadgeProps) {
  const colors = {
    lost: cn("bg-error/20 border-error text-error"),
    found: cn("bg-success/20 border-success text-success"),
    sighted: cn("bg-amber-400/20 border-amber-400 text-amber-500"),
  }[status];
  return (
    <div>
      <p className={cn("border rounded-2xl px-3 text-sm", colors)}>
        {status.replace(status.charAt(0), status.charAt(0).toUpperCase())}
      </p>
    </div>
  );
}

export default PetBadge;
