import { passwordRules } from "../../utils/validation.ts";
import PasswordChecklistItem from "./PasswordChecklistItem.tsx";

function PasswordChecklist({ value }: { value: string }) {
  return (
    <div className="grid grid-cols-2">
      {passwordRules.map((rule) => {
        const invalid = rule.isInvalid(value);
        return (
          <PasswordChecklistItem
            type={invalid ? "error" : "success"}
            description={rule.message}
          />
        );
      })}
    </div>
  );
}

export default PasswordChecklist;
