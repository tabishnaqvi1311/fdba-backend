import { z } from "zod";

export const registerPlayerSchema = z.object({
    fullName: z
        .string()
        .min(3, { message: "Full name is required" })
        .max(255, { message: "Full name is too long" }),
    gender: z.enum(["MALE", "FEMALE"], {
        required_error: "Please select a gender",
    }),
    dob: z.string().min(1, { message: "Date of birth is required" }),
    placeOfBirth: z.string().min(1, { message: "Place of birth is required" }),
    twoVisibleIdentificationMarks: z
        .string()
        .min(1, { message: "Identification marks are required" }),
    image: z.string().min(1, { message: "Photo is required" }),
    dobProof: z.string().min(1, { message: "Date of birth proof is required" }),

    communicationAddress: z.string().min(1, { message: "Address is required" }),
    pinCode: z.string().length(6, "6 digit pin code is required"),
    email: z.string().email({ message: "Invalid email address" }),
    contactNumber: z
        .string()
        .length(10, { message: "Valid contact number is required" }),

    organisationType: z.enum(["SCHOOL", "COLLEGE", "ORGANISATION"], {
        required_error: "Please select an organization type",
    }),
    organisationName: z
        .string()
        .min(1, { message: "Organization name is required" }),
    organisationAddress: z
        .string()
        .min(1, { message: "Organization address is required" }),
    fatherName: z.string().min(1, { message: "Father's name is required" }),
    fatherNumber: z
        .string()
        .length(10, { message: "Valid father's contact number is required" }),
    motherName: z.string().min(1, { message: "Mother's name is required" }),
    motherNumber: z
        .string()
        .length(10, { message: "Valid mother's contact number is required" }),
});

export type RegisterPlayer = z.infer<typeof registerPlayerSchema>;
