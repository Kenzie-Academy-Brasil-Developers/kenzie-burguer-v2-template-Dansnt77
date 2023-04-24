import * as z from 'zod';

export const loginSchema = z.object({
    email: z.string().email("Insira um email válido"),
    password: z
        .string()
        .min(7, "Senha mínima de 7 caracteres")
        .regex(/(?=.?[A-Z])/, "É necessário ao menos uma letra maiúscula")
        .regex(/(?=.?[a-z])/, "É necessário ao menos uma letra minúscula")
  })