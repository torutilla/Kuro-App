import z from "zod/v3";

export const petStatusSchema = z.enum(["lost", "found"]);

export const PetSchema = z.object({
    id: z.string().uuid(),
    user_id: z.string().uuid(),
    name: z.string().min(1),
    type: z.string().min(1),
    breed: z.string().optional().nullable(),
    color: z.string(),
    description: z.string(),
    image_url: z.string().url(),
    status: petStatusSchema,
    last_seen_location: z.string(),
    date_lost: z.coerce.date(),
    location_point: z.object({
        lat: z.number(),
        lng: z.number(),
    }).optional().nullable(),
});

export const cursorSchema = z.object({
    lastId: z.string().optional(),
    lastDateLost: z.date(),
}).nullable().optional();

export const PetArraySchema = z.object({
    pets: z.array(PetSchema),
    nextCursor: cursorSchema,
});

export const PetRequestSchema = PetSchema.omit({
    id: true
});

export type PetRequest = z.infer<typeof PetRequestSchema>;
export type PetArrayResponse = z.infer<typeof PetArraySchema>;
export type Pet = z.infer<typeof PetSchema>