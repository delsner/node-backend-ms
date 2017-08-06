import mongoose from 'mongoose';

const Board = new mongoose.Schema({
    test: {
        type: String,
    }
}, {
    timestamps: true
});

export default mongoose.model('Board', Board);
