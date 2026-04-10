import type { Pet } from "../schema/petSchema.ts";

export interface PetServerToClientEvents {
    "pet:added": (pet: Pet) => void;
    "pet:deleted": (data: { id: string }) => void;
}

export interface PetClientToServerEvents {

}