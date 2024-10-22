const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Player = require('./models/player');
const team=require('./models/team')
const path= require('path')

const playerRoutes = require('./routes/players');
const teamRoutes=require('./routes/team')

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const PORT = process.env.PORT || 3500;

mongoose.connect('mongodb://localhost:27017/auction', {
  
});

const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'vtarasan17@gmail.com',
        pass: 'hfmq kegj sxfu vdsb' 
    }
});

app.post('/send-email', (req, res) => {
    const { id, teamName, teamSize, members,college} = req.body;

    const mailOptions = {
        from: 'your-email@gmail.com',
        to: 'vtarasan17@gmail.com',
        subject: 'Team Submission Details',
        text: `ID: ${id}\nTeam Name: ${teamName}\nCollege Name:${college} \nTeam Size: ${teamSize}\nMembers: ${members.join(', ')}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.json({ success: false });
        } else {
            console.log('Email sent: ' + info.response);
            res.json({ success: true });
        }
    });
});


app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,"public",'index.html'))
})

app.use('/api/players', playerRoutes);

app.use('/api/teams',teamRoutes)




app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
