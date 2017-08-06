import express from 'express';
import BoardController from './controllers/board.controller';

const router = express.Router();

// board routes
router.get('/board', BoardController.getBoards);
router.post('/board', BoardController.postBoard);
router.post('/board/dispatch', BoardController.dispatchNewBoardEvent);

export default router;
