import { Check, Error } from "@mui/icons-material";
import clsx from "clsx";
type ChecklistItemProps = {
  type: "error" | "success";
  description: string;
};
function PasswordChecklistItem({ type, description }: ChecklistItemProps) {
  return (
    <div
      className={clsx("flex gap-1 text-xs items-center", {
        "text-error": type == "error",
        "text-success": type == "success",
      })}
    >
      {type === "error" ? <Error /> : <Check />}
      <p>{description}</p>
    </div>
  );
}

export default PasswordChecklistItem;
