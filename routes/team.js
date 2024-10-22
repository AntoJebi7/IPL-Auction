const express = require('express');
const router = express.Router();
const Team = require('../models/team.js');

router.get('/', async (req, res) => {
    try {
        const teams = await Team.find(); 
        res.json(teams); 
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch teams' });
    }
});

router.patch('/update-team-budget', async (req, res) => {
    const { name, budget, points, selectedRoles } = req.body;

    try {
        const updatedTeam = await Team.findOneAndUpdate(
            { name },
            {
                budget,
                points,
                selectedRoles: {
                    batsmen: selectedRoles.batsmen,
                    wicketKeeper: selectedRoles.wicketKeeper,
                    allRounders: selectedRoles.allRounders,
                    paceBowlers: selectedRoles.paceBowlers,
                    spinners: selectedRoles.spinners,
                    foreignPlayers: selectedRoles.foreignPlayers,
                    totalPlayers: selectedRoles.totalPlayers
                }
            },
            { new: true }
        );
        if (!updatedTeam) {
            return res.status(404).send({ message: 'Team not found' });
        }
        res.send(updatedTeam);
    } catch (error) {
        res.status(500).send({ message: 'Internal server error' });
    }
});

module.exports = router;
