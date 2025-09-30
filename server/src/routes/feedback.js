import { Router } from 'express';
import Feedback from '../models/Feedback.js';
import { requireAuth, optionalAuth } from '../middleware/auth.js';

const router = Router();

// list feedbacks (newest first) - public
router.get('/', optionalAuth, async (_req, res) => {
  try {
    const items = await Feedback.find().sort({ createdAt: -1 }).lean();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch feedback' });
  }
});

// create feedback - requires authentication
router.post('/', requireAuth, async (req, res) => {
  try {
    const { content } = req.body || {};
    if (!content) {
      return res.status(400).json({ error: 'content is required' });
    }
    const created = await Feedback.create({ 
      authorId: req.user._id,
      authorName: req.user.name,
      content 
    });
    res.status(201).json(created);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create feedback' });
  }
});

// add reply to feedback - requires authentication
router.post('/:id/replies', requireAuth, async (req, res) => {
  try {
    const { id } = req.params;
    const { content } = req.body || {};
    if (!content) {
      return res.status(400).json({ error: 'content is required' });
    }
    const updated = await Feedback.findByIdAndUpdate(
      id,
      { $push: { 
        replies: { 
          authorId: req.user._id,
          authorName: req.user.name,
          content 
        } 
      } },
      { new: true }
    );
    if (!updated) return res.status(404).json({ error: 'Feedback not found' });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: 'Failed to add reply' });
  }
});

export default router;


