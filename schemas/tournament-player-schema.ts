import { z } from "zod";

const playerSchema = z.object({
    fullname: z
        .string()
        .min(2, { message: "Full name must be at least 2 characters" }),
    email: z.string().email({ message: "Please enter a valid email address" }),
    phone: z
        .string()
        .min(10, { message: "Phone number must be at least 10 digits" }),
    dateOfBirth: z.string().min(1, { message: "Date of birth is required" }),
    gender: z.enum(["male", "female"], {
        required_error: "Please select a gender",
    }),
});

export const tournamentRegisterSchema = z
    .object({
        player1: playerSchema,
        dobProof: z.string(),
        ageCategory: z.enum([
            "U11",
            "U13",
            "U15",
            "U17",
            "U19",
            "SENIOR",
            "AGE35",
            "AGE40",
            "AGE45",
            "AGE50",
            "AGE55",
            "AGE60",
            "AGE65",
            "AGE70",
        ]),
        category: z.enum(["singles", "doubles", "mixed_doubles"], {
            required_error: "Please select a category",
        }),
        player2: z.optional(playerSchema).nullable(),
        player2DobProof: z.string().optional().nullable(),
    })
    .refine(
        (data) => {
            // Only require player2DobProof when doubles or mixed-doubles is selected and player2 exists
            const isDoubles =
                data.category === "doubles" ||
                data.category === "mixed_doubles";
            const hasPlayer2 = !!data.player2;

            if (
                isDoubles &&
                hasPlayer2 &&
                (!data.player2DobProof || data.player2DobProof.length === 0)
            ) {
                return false;
            }
            return true;
        },
        {
            message: "Partner's date of birth proof is required for doubles",
            path: ["player2DobProof"],
        },
    );

export type RegisterTournament = z.infer<typeof tournamentRegisterSchema>;
