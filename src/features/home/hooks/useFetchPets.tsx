import useAsync from "@shared/hooks/useAsync.tsx";
import { fetchHandler } from "@shared/index.ts";
import type { Pet, PetArrayResponse } from "../schema/petSchema.ts";
import { useState } from "react";
function useFetchPets() {
  const [pets, setPets] = useState<Pet[]>([]);
  const { run, loading } = useAsync<PetArrayResponse>();
  const [cursor, setCursor] = useState<PetArrayResponse["nextCursor"]>(null);
  const loadMore = async () => {
    const query =
      cursor?.lastDateLost && cursor?.lastId
        ? `/pets?lastDateLost=${cursor.lastDateLost}&lastId=${cursor.lastId}`
        : "/pets";

    const res = await run(() => fetchHandler(query));
    if (!res) return;
    setPets((p) => [...p, ...res.pets]);
    setCursor(res.nextCursor);
  };
  return { pets, loadMore, loading, hasMore: cursor !== null };
}

export default useFetchPets;
