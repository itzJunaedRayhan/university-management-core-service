import { z } from 'zod';

const createUserZodSchema = z.object({
  body: z.object({
    role: z.string({
      required_error: 'role is required',
    }),
    name: z.string({
      required_error: 'name is required',
    }),
    email: z.string({
      required_error: 'email is required',
    }),
  }),
});

export const UserValidation = {
  createUserZodSchema,
};
