const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
    name: {
        type:String,
        unique:true
    },
    budget:{
    type: Number},
    points:{ type:Number},
    logo:{ type:String},
    playercount:{type:Number},
    selectedRoles: {
        batsmen: { type: Number, default: 0 },
        wicketKeeper: { type: Number, default: 0 },
        allRounders: { type: Number, default: 0 },
        paceBowlers: { type: Number, default: 0 },
        spinners: { type: Number, default: 0 },
        foreignPlayers: { type: Number, default: 0 },
        totalPlayers: { type: Number, default: 0 }
    }
  
});

module.exports=mongoose.model('Team',teamSchema)