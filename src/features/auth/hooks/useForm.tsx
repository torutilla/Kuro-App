import type { ZodSchema } from "zod/v3";
import useInput from "../../../shared/hooks/useInput.tsx";

export function useForm(
  schema: ZodSchema,
  onSubmit: (e: React.SubmitEvent) => void,
) {
  const handleSubmit = async (e: React.SubmitEvent) => {};
}
