import * as z from 'zod';

export const registerSchema = z.object({
    name: z.string().min(2, "Nome é obrigatório"),
    email: z.string().email("Insira um email válido"),
    password: z
        .string()
        .min(7, "Senha mínima de 7 caracteres")
        .regex(/(?=.?[A-Z])/, "É necessário ao menos uma letra maiúscula")
        .regex(/(?=.?[a-z])/, "É necessário ao menos uma letra minúscula")
        .regex(/(?=.?[0-9])/, "É necessário pelo menos um número")
        .regex(/(?=.?[!@#$%^&*()_+,])/, "É necessário pelo menos um símbolo"),
    confirmPass: z.string().min(1, "Confirme sua senha"),    
  })
  .refine(({password,confirmPass}) => confirmPass === password,{
    message: "As senhas não coincidem",
    path: ["confirmPass"]
  });