import z from "zod/v3";

export const petStatusSchema = z.enum(["lost", "found"]);

export const PetSchema = z.object({
    id: z.string().uuid(),
    user_id: z.string().uuid(),
    name: z.string().min(1),
    type: z.string().min(1),
    breed: z.string().optional(),
    color: z.string(),
    description: z.string(),
    image_url: z.string().url(),
    status: petStatusSchema,
    last_seen_location: z.string(),
    date_lost: z.string().datetime(),
});

export const cursorSchema = z.object({
    lastId: z.string().optional(),
    lastDateLost: z.string().optional(),
}).nullable().optional();


export const PetResponseSchema = z.object({
    pets: z.array(PetSchema),
    nextCursor: cursorSchema,
})

export const PostPetSchema = PetSchema.omit({
    id: true
});


export type PostPet = z.infer<typeof PostPetSchema>;
export type PetResponse = z.infer<typeof PetResponseSchema>;
export type Pet = z.infer<typeof PetSchema>