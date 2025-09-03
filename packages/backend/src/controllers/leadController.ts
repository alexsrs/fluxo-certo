import { Request, Response } from 'express';
import leadService from '../services/leadService';
// import { createLeadSchema, updateLeadSchema } from '../types/schemas';

export const leadController = {
  // Criar novo lead
  async create(req: Request, res: Response) {
    try {
      // const validatedData = createLeadSchema.parse(req.body);
      const lead = await leadService.createLead(req.body);

      // Aqui podemos integrar com n8n para processar o lead
      // await n8nService.sendLeadToWorkflow(lead);

      res.status(201).json({
        success: true,
        data: lead,
        message: 'Lead criado com sucesso!',
      });
    } catch (error) {
      console.error('Erro ao criar lead:', error);
      res.status(400).json({
        success: false,
        message: 'Erro ao criar lead',
        error: error instanceof Error ? error.message : 'Erro desconhecido',
      });
    }
  },

  // Listar todos os leads
  async getAll(req: Request, res: Response) {
    try {
      const { page = 1, limit = 10, status } = req.query;
      const leads = await leadService.getAllLeads({
        page: Number(page),
        limit: Number(limit),
        status: status as string,
      });

      res.json({
        success: true,
        data: leads,
      });
    } catch (error) {
      console.error('Erro ao buscar leads:', error);
      res.status(500).json({
        success: false,
        message: 'Erro ao buscar leads',
      });
    }
  },

  // Buscar lead por ID
  async getById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const lead = await leadService.getLeadById(id);

      if (!lead) {
        return res.status(404).json({
          success: false,
          message: 'Lead não encontrado',
        });
      }

      res.json({
        success: true,
        data: lead,
      });
    } catch (error) {
      console.error('Erro ao buscar lead:', error);
      res.status(500).json({
        success: false,
        message: 'Erro ao buscar lead',
      });
    }
  },

  // Atualizar lead
  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      // const validatedData = updateLeadSchema.parse(req.body);
      const lead = await leadService.updateLead(id, req.body);

      res.json({
        success: true,
        data: lead,
        message: 'Lead atualizado com sucesso!',
      });
    } catch (error) {
      console.error('Erro ao atualizar lead:', error);
      res.status(400).json({
        success: false,
        message: 'Erro ao atualizar lead',
        error: error instanceof Error ? error.message : 'Erro desconhecido',
      });
    }
  },

  // Deletar lead
  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await leadService.deleteLead(id);

      res.json({
        success: true,
        message: 'Lead deletado com sucesso!',
      });
    } catch (error) {
      console.error('Erro ao deletar lead:', error);
      res.status(500).json({
        success: false,
        message: 'Erro ao deletar lead',
      });
    }
  },
};

export default leadController;
