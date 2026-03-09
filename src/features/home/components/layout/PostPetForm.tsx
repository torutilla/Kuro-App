import TextField from "@shared/components/common/TextField.tsx";
import usePostPet from "../../hooks/usePostPet.tsx";
import { PostPetSchema } from "../../schema/petSchema.ts";
import Button from "@shared/components/common/Button.tsx";

function PostPetForm({
  authUserId,
  onSuccess,
}: {
  authUserId: string;
  onSuccess?: (id: string) => void;
}) {
  const { postPet, loading, error } = usePostPet();

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const payload = {
      user_id: authUserId,
      name: formData.get("name"),
      type: formData.get("type"),
      breed: formData.get("breed") || undefined,
      color: formData.get("color"),
      description: formData.get("description"),
      image_url: formData.get("image_url"),
      status: formData.get("status"),
      last_seen_location: formData.get("last_seen_location"),
      date_lost: new Date(formData.get("date_lost") as string).toISOString(),
    };

    const res = PostPetSchema.safeParse(payload);

    if (!res.success) {
      console.log(res.error.issues);
      return;
    }

    try {
      const id = await postPet(res.data);
      onSuccess?.(id);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto p-6 bg-white rounded-xl shadow-sm border border-neutral-100"
    >
      <h2 className="text-2xl font-bold text-accent mb-6">Report a Pet</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
        <TextField
          label="Pet Name"
          name="name"
          placeholder="e.g. Buddy"
          required
        />

        <div className="grid items-start w-full">
          <label className="text-accent">Status</label>
          <select
            name="status"
            className="w-full rounded-lg p-2 bg-neutral-200 border border-neutral-300 focus:ring-1 focus:ring-primary outline-none"
          >
            <option value="lost">Lost</option>
            <option value="found">Found</option>
          </select>
          <p className="text-xs text-transparent">&nbsp;</p>
        </div>

        <TextField
          label="Species"
          name="type"
          placeholder="e.g. Dog, Cat, Bird"
          required
        />
        <TextField
          label="Breed"
          name="breed"
          placeholder="e.g. Golden Retriever (Optional)"
        />
        <TextField
          label="Color"
          name="color"
          placeholder="e.g. Brown and White"
          required
        />
        <TextField
          label="Date Last Seen"
          name="date_lost"
          type="datetime-local"
          required
        />
      </div>

      <TextField
        label="Last Seen Location"
        name="last_seen_location"
        placeholder="e.g. Central Park, NY"
        required
      />

      <TextField
        label="Photo URL"
        name="image_url"
        placeholder="Paste an image link from the web"
        required
      />

      <div className="grid items-start w-full pb-3">
        <label className="text-accent">Description</label>
        <textarea
          name="description"
          rows={3}
          className="w-full rounded-lg p-2 bg-neutral-200 border border-neutral-300 focus:ring-1 focus:ring-primary outline-none placeholder:text-neutral-400"
          placeholder="Any distinguishing marks, collar color, etc."
          required
        ></textarea>
      </div>

      {error && <p className="text-error text-sm mt-2">{error}</p>}

      <Button type="submit" disabled={loading}>
        {"Submit Report"}
      </Button>
    </form>
  );
}
export default PostPetForm;
