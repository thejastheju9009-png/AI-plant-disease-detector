import express, { Request, Response } from 'express';
import Disease from '../models/Disease';

const router = express.Router();

// Get all diseases
router.get('/', async (req: Request, res: Response) => {
  try {
    const diseases = await Disease.find();
    res.json(diseases);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch diseases' });
  }
});

// Get disease by ID
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const disease = await Disease.findById(req.params.id);
    res.json(disease);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch disease' });
  }
});

// Create disease (admin only)
router.post('/', async (req: Request, res: Response) => {
  try {
    const disease = new Disease(req.body);
    await disease.save();
    res.json(disease);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create disease' });
  }
});

export default router;
