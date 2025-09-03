import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import leadRoutes from './routes/leadRoutes';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas
app.use('/api', leadRoutes);

app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Servidor do Fluxo Certo está no ar!',
    version: '1.0.0',
    endpoints: {
      leads: '/api/leads',
      health: '/health',
    },
  });
});

app.get('/health', (req: Request, res: Response) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
});

app.listen(port, () => {
  console.log(`🚀 Servidor rodando na porta ${port}`);
  console.log(`📋 API disponível em: http://localhost:${port}/api`);
});
