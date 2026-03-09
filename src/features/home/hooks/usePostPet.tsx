import useAsync from "@shared/hooks/useAsync.tsx";
import { fetchHandler } from "@shared/index.ts";
import type { PostPet } from "../schema/petSchema.ts";
function usePostPet() {
  const { run, loading, error } = useAsync<string>();
  const postPet = async (data: PostPet) => {
    return run(() =>
      fetchHandler("/pets/create", {
        method: "POST",
        body: JSON.stringify(data),
      }),
    );
  };
  return { postPet, loading, error };
}

export default usePostPet;
