import useAsync from "@shared/hooks/useAsync.tsx";
import { fetchHandler } from "@shared/index.ts";
import type { Pet, PetResponse } from "../schema/petSchema.ts";
import { useState } from "react";
function useFetchPets() {
  const [pets, setPets] = useState<Pet[]>([]);
  const { run, loading } = useAsync<PetResponse>();
  const [cursor, setCursor] = useState<PetResponse["nextCursor"]>(null);
  const loadMore = async () => {
    const query =
      cursor?.lastDateLost && cursor?.lastId
        ? `/pets?lastDateLost=${cursor.lastDateLost}&lastId=${cursor.lastId}`
        : "/pets";

    const res = await run(() => fetchHandler(query));
    if (!res) return;
    setPets((p) => [...p, ...res.pets]);
    setCursor(res.nextCursor);
    console.log(res);
  };
  return { pets, loadMore, loading, hasMore: cursor !== null };
}

export default useFetchPets;
