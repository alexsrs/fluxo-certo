import prisma from '../lib/prisma';
import { LeadStatus } from '@prisma/client';

interface CreateLeadData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message?: string;
  source?: string;
}

interface UpdateLeadData {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  message?: string;
  source?: string;
  status?: 'NEW' | 'CONTACTED' | 'QUALIFIED' | 'CONVERTED' | 'LOST';
}

interface GetLeadsOptions {
  page: number;
  limit: number;
  status?: string;
}

export const leadService = {
  async createLead(data: CreateLeadData) {
    return await prisma.lead.create({
      data: {
        ...data,
        status: 'NEW',
      },
    });
  },

  async getAllLeads(options: GetLeadsOptions) {
    const { page, limit, status } = options;
    const skip = (page - 1) * limit;

    const where = status ? { status: status as LeadStatus } : {};

    const [leads, total] = await Promise.all([
      prisma.lead.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
        include: {
          appointments: true,
        },
      }),
      prisma.lead.count({ where }),
    ]);

    return {
      leads,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  },

  async getLeadById(id: string) {
    return await prisma.lead.findUnique({
      where: { id },
      include: {
        appointments: true,
      },
    });
  },

  async updateLead(id: string, data: UpdateLeadData) {
    return await prisma.lead.update({
      where: { id },
      data: {
        ...data,
        updatedAt: new Date(),
      },
    });
  },

  async deleteLead(id: string) {
    return await prisma.lead.delete({
      where: { id },
    });
  },
};

export default leadService;
