import { z } from 'zod';

export const userSchema = z.object({
  name: z.string().min(1, 'El nombre es requerido'),
  email: z.string().email('Email inválido'),
  address: z.string().min(1, 'La dirección es requerida'),
});
