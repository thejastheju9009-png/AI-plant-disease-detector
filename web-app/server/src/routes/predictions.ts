import express, { Request, Response } from 'express';
import multer from 'multer';
import Prediction from '../models/Prediction';

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

// Get all predictions for a user
router.get('/:userId', async (req: Request, res: Response) => {
  try {
    const predictions = await Prediction.find({ userId: req.params.userId }).sort({ createdAt: -1 });
    res.json(predictions);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch predictions' });
  }
});

// Create a new prediction
router.post('/', upload.single('image'), async (req: Request, res: Response) => {
  try {
    const { userId, disease, confidence, severity, treatment, plantType } = req.body;
    const prediction = new Prediction({
      userId,
      imagePath: req.file?.path || '',
      disease,
      confidence,
      severity,
      treatment,
      plantType
    });
    await prediction.save();
    res.json(prediction);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create prediction' });
  }
});

// Get prediction by ID
router.get('/detail/:id', async (req: Request, res: Response) => {
  try {
    const prediction = await Prediction.findById(req.params.id);
    res.json(prediction);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch prediction' });
  }
});

export default router;
