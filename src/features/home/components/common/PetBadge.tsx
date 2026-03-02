import { cva, type VariantProps } from "class-variance-authority";

const BadgeVariants = cva({
  variants: {},
});

type PetBadgeProps = VariantProps<typeof BadgeVariants>;
function PetBadge() {
  return (
    <div>
      <p></p>
    </div>
  );
}

export default PetBadge;
