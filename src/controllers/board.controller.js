import Board from '../models/board.model';

class BoardController {
    static getBoards(req, res) {
        Board.find({}).then((boards) => {
            res.json(boards);
        }).catch((err) => {
            res.status(400).send(err);
        });
    }

    static postBoard(req, res) {
        let board = new Board();
        board.save().then((board) => {
            res.send(board);
        }).catch((err) => {
            res.status(400).send(err);
        })
    }

    static dispatchNewBoardEvent(req, res) {
        Board.find({}).then((boards) => {
            global.io.emit('NewBoardEvent', {
                board: boards[0]
            });
            res.status(200).send({});
        }).catch((err) => {
            res.status(400).send(err);
        });
    }
}

export default BoardController;
