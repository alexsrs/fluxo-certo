import { Router } from 'express';
import leadController from '../controllers/leadController';

const router = Router();

// Rotas para leads
router.post('/leads', leadController.create);
router.get('/leads', leadController.getAll);
router.get('/leads/:id', leadController.getById);
router.put('/leads/:id', leadController.update);
router.delete('/leads/:id', leadController.delete);

export default router;
