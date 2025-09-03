import { z } from 'zod';

export const createLeadSchema = z.object({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('Email deve ser válido'),
  phone: z.string().optional(),
  company: z.string().optional(),
  message: z.string().optional(),
  source: z.string().optional(),
});

export const updateLeadSchema = z.object({
  name: z.string().min(2).optional(),
  email: z.string().email().optional(),
  phone: z.string().optional(),
  company: z.string().optional(),
  message: z.string().optional(),
  source: z.string().optional(),
  status: z
    .enum(['NEW', 'CONTACTED', 'QUALIFIED', 'CONVERTED', 'LOST'])
    .optional(),
});

export const createAppointmentSchema = z.object({
  leadId: z.string().cuid(),
  scheduledAt: z.string().datetime(),
  notes: z.string().optional(),
  meetingLink: z.string().url().optional(),
});

export type CreateLeadData = z.infer<typeof createLeadSchema>;
export type UpdateLeadData = z.infer<typeof updateLeadSchema>;
export type CreateAppointmentData = z.infer<typeof createAppointmentSchema>;
