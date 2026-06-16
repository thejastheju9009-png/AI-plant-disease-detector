import express, { Request, Response } from 'express';
import User from '../models/User';

const router = express.Router();

// Get user profile
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.params.id).select('-password');
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch user' });
  }
});

// Update user profile
router.put('/:id', async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, profileImage } = req.body;
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { firstName, lastName, profileImage },
      { new: true }
    ).select('-password');
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update user' });
  }
});

export default router;
