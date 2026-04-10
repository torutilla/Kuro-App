import type { Pet } from "../../home/schema/petSchema.ts";

function PetPopup({ pet }: { pet: Pet }) {
  return (
    <div className="w-56">
      <img
        src={pet.image_url}
        alt={pet.name}
        className="w-full h-30 object-cover rounded-lg mb-2"
      />

      <h3 className="font-semibold text-sm">{pet.name}</h3>

      <p className="text-xs text-neutral-500">
        {pet.status === "lost" ? "Lost" : "Found"} • {pet.type}
      </p>

      <p className="text-xs mt-1 line-clamp-2">{pet.description}</p>

      <button className="mt-2 w-full text-xs bg-primary text-white py-1 rounded-md">
        View Details
      </button>
    </div>
  );
}

export default PetPopup;
