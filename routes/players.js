const express = require('express');
const router = express.Router();
const Player = require('../models/player.js');

router.get('/', async (req, res) => {
    try {
        const stage = req.query.stage;
        let filter = {};

        if (stage) {
            switch(stage) {
                case '1':
                    filter.basePrice = "₹2 Crore";
                    break;
                case '2':
                    filter = {
                        basePrice: { $in: ["₹1 Crore", "₹1.5 Crore"] },
                        role: /batsman/i
                    };
                    break;
                case '3':
                    filter = {
                        basePrice: { $in: ["₹1 Crore", "₹1.5 Crore"] },
                        role: /wicket keeper/i
                    };
                    break;
            
                default:
                    break;
            }
        }

        const players = await Player.find(filter);
        res.json(players);
    } catch (error) {
        console.error('Error fetching players:', error);
        res.status(500).json({ message: 'Server Error' });
    }
});


router.post('/:id/bid', async (req, res) => {
    const playerId = req.params.id;
    const { bidAmount, teamName } = req.body;

    if (!bidAmount || !teamName) {
        return res.status(400).json({ message: 'Bid amount and team name are required.' });
    }

    try {
        const player = await Player.findById(playerId);
        if (!player) {
            return res.status(404).json({ message: 'Player not found.' });
        }
        const currentBid = parseBid(player.currentPrice);
        const newBid = parseBid(bidAmount);

        if (newBid <= currentBid) {
            return res.status(400).json({ message: 'New bid must be higher than current bid.' });
        }
        player.currentPrice = bidAmount;
        player.bidby = teamName;
        
        console.log('Updating player:', player); 

        await player.save();

        res.json({ message: 'Bid placed successfully.', player });
    } catch (error) {
        console.error('Error placing bid:', error);
        res.status(500).json({ message: 'Server Error' });
    }
});

function parseBid(bidStr) {
    if (bidStr.toLowerCase().includes('crore')) {
        return parseFloat(bidStr) * 100; 
    } else if (bidStr.toLowerCase().includes('lakh')) {
        return parseFloat(bidStr);
    }
    return 0;
}

router.post('/:id/bid', async (req, res) => {
    const playerId = req.params.id;

    try {
        const player = await Player.findById(playerId);
        if (!player) {
            return res.status(404).json({ message: 'Player not found.' });
        }

       
        player.currentPrice = 0;
        player.bidby = null; 

        console.log('Updating player:', player);

        await player.save();

        res.json({ message: 'Bid updated successfully.', player });
    } catch (error) {
        console.error('Error placing bid:', error);
        res.status(500).json({ message: 'Server Error' });
    }
});


module.exports = router;