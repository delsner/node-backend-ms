import express from 'express';

const router = express.Router();

router.get('/suc', (req, res) => {
    res.send({msg: "success"});
});

export default router;
