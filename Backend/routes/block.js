const router = require('express').Router();
let Block = require('../models/block.model');

router.route('/').get(async (req, res) => {
    try {
        const block = await Block.find();
        res.json(block);
    } catch (err) {
        res.json('Error:' + err);
    }
})


router.route('/add').post(async (req, res) => {
    const id = Number(req.body.id);
    const hash = req.body.hash;
    const previousHash = req.body.previousHash;
    const nonce = Number(req.body.nonce);
    const timestamp = Date.parse(req.body.timestamp);
    const transactions = Array(req.body.transactions)

    const newBlock = new Block({
        id,
        hash,
        previousHash,
        nonce,
        timestamp,
        transactions
    });

    try {
        const savedBlock = await newBlock.save();
        res.json(savedBlock);
    } catch (err) {
        res.json('Error: ' + err);
    }
})


module.exports = router; 