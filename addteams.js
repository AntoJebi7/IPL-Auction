const mongoose = require('mongoose');
const Team = require('./models/team');

mongoose.connect('mongodb://localhost:27017/auction', {})
    .then(() => console.log('MongoDB connected!'))
    .catch(err => console.error('MongoDB connection error:', err));

const teams = [
    { 
        name: 'Chennai Super Kings', 
        budget: 100, 
        points: 0, 
        logo: 'csklogo.png', 
        selectedRoles: {
            batsmen: 0,
            wicketKeeper: 0,
            allRounders: 0,
            paceBowlers: 0,
            spinners: 0,
            foreignPlayers: 0,
            totalPlayers: 0
        }
    },
    { 
        name: 'Mumbai Indians', 
        budget: 100, 
        points: 0, 
        logo: 'milogo.png',
        selectedRoles: {
            batsmen: 0,
            wicketKeeper: 0,
            allRounders: 0,
            paceBowlers: 0,
            spinners: 0,
            foreignPlayers: 0,
            totalPlayers: 0
        }
    },
    { 
        name: 'Kolkata Knight Riders', 
        budget: 100, 
        points: 0, 
        logo: 'kkrlogo.png',
        selectedRoles: {
            batsmen: 0,
            wicketKeeper: 0,
            allRounders: 0,
            paceBowlers: 0,
            spinners: 0,
            foreignPlayers: 0,
            totalPlayers: 0
        }
    },
    { 
        name: 'Delhi Capitals', 
        budget: 100, 
        points: 0, 
        logo: 'dclogo.png',
        selectedRoles: {
            batsmen: 0,
            wicketKeeper: 0,
            allRounders: 0,
            paceBowlers: 0,
            spinners: 0,
            foreignPlayers: 0,
            totalPlayers: 0
        }
    },
    { 
        name: 'Royal Challengers Bangaluru', 
        budget: 100, 
        points: 0, 
        logo: 'rcblogo.png',
        selectedRoles: {
            batsmen: 0,
            wicketKeeper: 0,
            allRounders: 0,
            paceBowlers: 0,
            spinners: 0,
            foreignPlayers: 0,
            totalPlayers: 0
        }
    }, 
    { 
        name: 'Sunrisers Hyderabad', 
        budget: 100, 
        points: 0, 
        logo: 'srhlogo.png',
        selectedRoles: {
            batsmen: 0,
            wicketKeeper: 0,
            allRounders: 0,
            paceBowlers: 0,
            spinners: 0,
            foreignPlayers: 0,
            totalPlayers: 0
        }
    },
    { 
        name: 'Lucknow Super Giants', 
        budget: 100, 
        points: 0, 
        logo: 'lsglogo.png',
        selectedRoles: {
            batsmen: 0,
            wicketKeeper: 0,
            allRounders: 0,
            paceBowlers: 0,
            spinners: 0,
            foreignPlayers: 0,
            totalPlayers: 0
        }
    },
    { 
        name: 'Punjab Kings', 
        budget: 100, 
        points: 0, 
        logo: 'pbkslogo.png',
        selectedRoles: {
            batsmen: 0,
            wicketKeeper: 0,
            allRounders: 0,
            paceBowlers: 0,
            spinners: 0,
            foreignPlayers: 0,
            totalPlayers: 0
        }
    },
    { 
        name: 'Gujarat Titans', 
        budget: 100, 
        points: 0, 
        logo: 'gtlogo.png',
        selectedRoles: {
            batsmen: 0,
            wicketKeeper: 0,
            allRounders: 0,
            paceBowlers: 0,
            spinners: 0,
            foreignPlayers: 0,
            totalPlayers: 0
        }
    },
    { 
        name: 'Rajasthan Royals', 
        budget: 100, 
        points: 0, 
        logo: 'rrlogo.png',
        selectedRoles: {
            batsmen: 0,
            wicketKeeper: 0,
            allRounders: 0,
            paceBowlers: 0,
            spinners: 0,
            foreignPlayers: 0,
            totalPlayers: 0
        }
    }
];

async function insertTeamsIntoDatabase() {
    try {
        console.log(`Total number of teams: ${teams.length}`);
        await Team.deleteMany({}); // Clear the collection
        await Team.insertMany(teams);
        console.log('Teams added successfully!');
    } catch (error) {
        console.error('Error adding teams:', error);
    } finally {
        mongoose.connection.close();
    }
}
insertTeamsIntoDatabase();
