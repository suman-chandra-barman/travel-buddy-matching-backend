import { z } from "zod";

const createUserValidationSchema = z.object({
  body: z.object({
    username: z
      .string()
      .min(3, { message: "Username must be at least 3 characters long" })
      .max(30, {
        message: "Username must be less than or equal to 30 characters long",
      }),
    email: z.string().email({ message: "Please enter a valid email address" }),
    password: z.string({ required_error: "Password  is required" }),
    role: z.enum(["ADMIN", "USER"]).default("USER"),
    profile: z.object({
      contactNumber: z.string({
        required_error: "Contact Number is required",
      }),
      age: z.number({ required_error: "Age  is required" }),
    }),
  }),
});

const updateUserProfileValidationSchema = z.object({
  body: z.object({
    username: z.string().optional(),
    email: z.string().optional(),
    image: z.string().optional(),
    address: z.string().optional(),
    bio: z.string().optional(),
  }),
});

export const UserValidationSchema = {
  createUserValidationSchema,
  updateUserProfileValidationSchema,
};