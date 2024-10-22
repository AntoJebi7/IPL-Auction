const mongoose = require('mongoose');
const Player = require('./models/player');

mongoose.connect('mongodb://localhost:27017/auction', {
    
});

const players = [
    {
        name: 'MS Dhoni',
        basePrice: '₹2 Crore',
        role: 'Wicket Keeper',
        nationality: 'India',
        previousTeam: 'Chennai Super Kings',
        image: 'msdhoni.png',
        points:24,
        
    },
    {
        name: 'Ravindra Jadeja',
        basePrice: '₹2 Crore',
        role: 'All-Rounder|spin',
        nationality: 'India',
        previousTeam: 'Chennai Super Kings',
        image: 'jadeja.webp',
        points:23,
        
    },
    {
        name: 'Arshdeep Singh',
        basePrice: '₹1 Crore',
        role: 'pace bowler',
        nationality: 'India',
        previousTeam: 'Punjab Kings',
        image: 'arshdeep.webp',
        points:18,
        
    },
    {
        name: 'Ravichandran Ashwin',
        basePrice: '₹2 Crore',
        role: 'All-Rounder|Spin',
        nationality: 'India',
        previousTeam: 'Rajasthan Royals',
        image: 'ASH.webp',
        points:22,
        
    }, {
        name: 'Axar Patel',
        basePrice: '₹1.5 Crore',
        role: 'All-Rounder',
        nationality: 'India',
        previousTeam: 'Delhi Capitals',
        image: 'axar.webp',
        points:21,
        
    },{
        name: 'AB Devilliars',
        basePrice: '₹2 Crore',
        role: 'Wicket keeper',
        nationality: 'South Africa',
        previousTeam: 'Royal Challangers Banagaluru',
        image: 'abd.jpg',
        points:24,
        
    },{
        name: 'Abhishek Sharma',
        basePrice: '₹70 lakhs',
        role: 'Batsman',
        nationality: 'India',
        previousTeam: 'Sun Rishes Hydrabad',
        image: 'Abhishek Sharma.png',
        points:20,
        
    },{
        name: 'Ajinkya Rahane',
        basePrice: '₹1 Crore',
        role: 'Batsman',
        nationality: 'India',
        previousTeam: 'Chennai Super Kings',
        image: 'Ajinkya Rahane.png',
        points:20,
        
    },{
        name: 'Anrich Nortje',
        basePrice: '₹70 lakhs',
        role: 'pace Bowler',
        nationality: 'South Africa',
        previousTeam: 'Delhi Capitals',
        image: 'Anrich Nortje.png',
        points:19,
        
    },{
        name: 'Ambati Rayudu',
        basePrice: '₹1 Crore',
        role: 'Wicket Keeper',
        nationality: 'India',
        previousTeam: 'Chennai Super Kings',
        image: 'Ambati Rayudu.png',
        points:22,
        
    },{
        name: 'Ashish Nehra',
        basePrice: '₹50 lakhs',
        role: 'Pace Bowler',
        nationality: 'India',
        previousTeam: 'Sun Rishes Hydrabad',
        image: 'asish Nehra.jpg',
        points:19,
        
    },{
        name: 'Avesh Khan',
        basePrice: '₹30 lakhs',
        role: 'Pace Bowler',
        nationality: 'India',
        previousTeam: 'Rajasthan Royals',
        image: 'Avesh Khan.png',
        points:18,
        
    },{
        name: 'Ben Stokes',
        basePrice: '₹1 Crore',
        role: 'All-Rounder|Pace',
        nationality: 'England',
        previousTeam: 'Chennai Super Kings',
        image: 'Ben Stokes.png',
        points:21,
        
    },{
        name: 'Bhuvaneswar kumar',
        basePrice: '₹1.5 Crore',
        role: 'Pace Bowler',
        nationality: 'India',
        previousTeam: 'Sun Rishes Hydrabad',
        image: 'bhuvi.webp',
        points:23,
        
    },{
        name: 'Trent Boult',
        basePrice: '₹1.5 Crore',
        role: 'Pace Bowler',
        nationality: 'New Zealand',
        previousTeam: 'Rajasthan Royals',
        image: 'boult.webp',
        points:22,
        
    },{
        name: 'Jasprit Bumrah',
        basePrice: '₹2 Crore',
        role: 'Pace Bowler',
        nationality: 'India',
        previousTeam: 'Mumbai Indians',
        image: 'bumrah.webp',
        points:25,
        
    },{
        name: 'Jos Buttler',
        basePrice: '₹2 Crore',
        role: 'Wicket Keeper',
        nationality: 'England',
        previousTeam: 'Rajasthan Royals',
        image: 'buttler.webp',
        points:24,
        
    },{
        name: 'Yuvzvendra Chahal',
        basePrice: '₹1.5 Crore',
        role: 'spin bowler',
        nationality: 'India',
        previousTeam: 'Rajasthan Royals',
        image: 'chahal.webp',
        points:22.5,
        
    },{
        name: 'Chris Gayle',
        basePrice: '₹2 Crore',
        role: 'Batsman',
        nationality: 'West Indies',
        previousTeam: 'Punjab Kings',
        image: 'Chris Gayle.png',
        points:25,
        
    },{
        name: 'Chris Morris',
        basePrice: '₹1.5 Crore',
        role: 'Pace Bowler',
        nationality: 'South Africa',
        previousTeam: 'Rajasthan Royals',
        image: 'chris morris.webp',
        points:19,
        
    },{
        name: 'Quinton De Cock',
        basePrice: '₹1.5 Crore',
        role: 'Wicket Keeper',
        nationality: 'South africa',
        previousTeam: 'Lucknow Super Giants',
        image: 'de cock.webp',
        points:22.5,
        
    },{
        name: 'Deepak Chahar',
        basePrice: '₹70 lakhs',
        role: 'Pace Bowler',
        nationality: 'India',
        previousTeam: 'Chennai Super KIngs',
        image: 'Deepak Chahar.png',
        points:19,
        
    },{
        name: 'Deepak Hooda',
        basePrice: '₹50 lakhs',
        role: 'Batsman',
        nationality: 'India',
        previousTeam: 'Lucknow Super Giants',
        image: 'Deepak Hooda.png',
        points:17.5,
        
    },{
        name: 'Devon Conway',
        basePrice: '₹1 Crore',
        role: 'Batsman',
        nationality: 'New Zealand',
        previousTeam: 'Chennai Super Kings',
        image: 'Devon Conway.png',
        points:20,
        
    },{
        name: 'Dinesh Karthick',
        basePrice: '₹1.5 Crore',
        role: 'Wicket Keeper',
        nationality: 'India',
        previousTeam: 'Royal Challengers Bengaluru',
        image: 'dk.webp',
        points:21.5,
        
    },{
        name: 'Dwayne Bravo',
        basePrice: '₹2 Crore',
        role: 'All-Rounder|pace',
        nationality: 'West Indies',
        previousTeam: 'Chennai Super Kings',
        image: 'Dwayne Bravo.png',
        points:22.5,
        
    },{
        name: 'Faf Du Plessies',
        basePrice: '₹2 Crore',
        role: 'Batsman',
        nationality: 'South Africa',
        previousTeam: 'Royal Challengers Bengaluru',
        image: 'faf.webp',
        points:21.5,
        
    },{
        name: 'Gautham Gambir',
        basePrice: '₹1.5 Crore',
        role: 'Batsman',
        nationality: 'India',
        previousTeam: 'Delhi Captials',
        image: 'Gambir.webp',
        points:15,
        
    },{
        name: 'Subhman Gill',
        basePrice: '₹1 Crore',
        role: 'Batsman',
        nationality: 'India',
        previousTeam: 'Gujarat Titans',
        image: 'gill.webp',
        points:17,
        
    },{
        name: 'Adam Gilchrist',
        basePrice: '₹1 Crore',
        role: 'Wicket Keeper',
        nationality: 'Australia',
        previousTeam: 'Punjab Kings',
        image: 'gillchrist.jpg',
        points:21.5,
        
    },{
        name: 'Harbajan Singh',
        basePrice: '₹1 Crore',
        role: 'spin Bowler',
        nationality: 'India',
        previousTeam: 'Kolkata Knight Riders',
        image: 'Harbhajan Singh.png',
        points:21,
        
    },{
        name: 'Hardik Pandya',
        basePrice: '₹1.5 Crore',
        role: 'All-Rounder|Pace',
        nationality: 'India',
        previousTeam: 'Mumbai Indians',
        image: 'hardik.webp',
        points:22,
        
    },{
        name: 'Harsal Patel',
        basePrice: '₹75 lakhs',
        role: 'Pace Bowler',
        nationality: 'India',
        previousTeam: 'Punjab Kings',
        image: 'harshal patel.webp',
        points:17,
        
    },{
        name: 'Travis Head',
        basePrice: '₹1 Crore',
        role: 'Batsman',
        nationality: 'India',
        previousTeam: 'Sun Rishes Hydrabad',
        image: 'head.webp',
        points:19,
        
    },{
        name: 'Henrich Klaasen',
        basePrice: '₹1.5 Crore',
        role: 'Wicket Keeper',
        nationality: 'South Africa',
        previousTeam: 'Sun Rishes Hydrabad',
        image: 'Heinrich Klaasen.png',
        points:20,
        
    },{
        name: 'Dale Styen',
        basePrice: '₹1 Crore',
        role: 'Pace Bowler',
        nationality: 'South Africa',
        previousTeam: 'Royal Challangers Bengaluru',
        image: 'images.webp',
        points:21.5,
        
    },{
        name: 'Ishan Kishan',
        basePrice: '₹1.5 Crore',
        role: 'Wicket Keeper',
        nationality: 'India',
        previousTeam: 'Mumbai Indians',
        image: 'ishan.webp',
        points:20,
        
    },{
        name: 'Ishant Sharma',
        basePrice: '₹1 Crore',
        role: 'pace Bowler',
        nationality: 'India',
        previousTeam: 'Delhi Capitals',
        image: 'ishant.webp',
        points:18,
        
    },{
        name: 'Yashasvi Jaiswal',
        basePrice: '₹1 Crore',
        role: 'Batsman',
        nationality: 'India',
        previousTeam: 'Rajasthan Royals',
        image: 'jaiswal.webp',
        points:17,
        
    },{
        name: 'Johnny Bairstow',
        basePrice: '₹1 Crore',
        role: 'Wicket Keeper',
        nationality: 'England',
        previousTeam: 'Punjab Kings',
        image: 'Jonny Bairstow.png',
        points:20,
        
    },{
        name: 'Karn Sharma',
        basePrice: '₹50 lakhs',
        role: 'spin Bowler',
        nationality: 'India',
        previousTeam: 'Royal Challangers Bengaluru',
        image: 'karan.webp',
        points:19.5,
        
    },{
        name: 'Khaleel Ahmed',
        basePrice: '₹50 lakhs',
        role: 'pace Bowlers',
        nationality: 'India',
        previousTeam: 'Delhi captials',
        image: 'Khaleel Ahmed.png',
        points:17,
        
    },{
        name: 'Kieron Pollard',
        basePrice: '₹2 Crore',
        role: 'All-Rounder|pace',
        nationality: 'West Indies',
        previousTeam: 'Mumbai Indians',
        image: 'Kieron Pollard.png',
        points:23,
        
    },{
        name: 'KL Rahul',
        basePrice: '₹2 Crore',
        role: 'Wicket Keeper',
        nationality: 'India',
        previousTeam: 'Lucknow Super Giants',
        image: 'kl rahul.webp',
        points:23.5,
        
    },{
        name: 'Kuldeep yadav',
        basePrice: '₹1.5 Crore',
        role: 'Spin Bowler',
        nationality: 'India',
        previousTeam: 'Delhi capitals',
        image: 'kuldeep.webp',
        points:21.5,
        
    },{
        name: 'Kurnal Pandya',
        basePrice: '₹1 Crore',
        role: 'All-Rounder|Spin',
        nationality: 'India',
        previousTeam: 'Lucknow Super Giants',
        image: 'kurnal.webp',
        points:19.5,
        
    },{
        name: 'Lasith Malinga',
        basePrice: '₹2 Crore',
        role: 'Pace Bowler',
        nationality: 'Sri lanka',
        previousTeam: 'Mumbai Indians',
        image: 'Lasith Malinga.png',
        points:24,
        
    },{
        name: 'Liam Livingstone',
        basePrice: '₹1 Crore',
        role: 'ALl-Rounder|Spin',
        nationality: 'England',
        previousTeam: 'Lucknow Super Giants',
        image: 'Liam Livingstone.png',
        points:18.5,
        
    },{
        name: 'Chris Lynn',
        basePrice: '₹1 Crore',
        role: 'Batsman',
        nationality: 'Australia',
        previousTeam: 'Mumbai Indians',
        image: 'lynn.webp',
        points:20,
        
    },{
        name: 'Mandeep Singh',
        basePrice: '₹50 Lakhs',
        role: 'Batsman',
        nationality: 'India',
        previousTeam: 'Kolkata Knight Riders',
        image: 'Mandeep Singh.png',
        points:18,
        
    },{
        name: 'Manish Panday',
        basePrice: '₹1 Crore',
        role: 'batsaman',
        nationality: 'India',
        previousTeam: 'Kolkata Knignt Riders',
        image: 'manish.webp',
        points:18,
        
    },{
        name: 'Glenn Maxwal',
        basePrice: '₹1.5 Crore',
        role: 'All-Rounder|Spin',
        nationality: 'Australia',
        previousTeam: 'Royal Challengers Bengaluru',
        image: 'maxi.webp',
        points:19.5,
        
    },{
        name: 'Mayank Agarwal',
        basePrice: '₹1 Crore',
        role: 'Batsman',
        nationality: 'India',
        previousTeam: 'Sun rishes Hydrabad',
        image: 'mayank.webp',
        points:20,
        
    },{
        name: 'David Millar',
        basePrice: '₹1.5 Crore',
        role: 'Batsman',
        nationality: 'South Africa',
        previousTeam: 'Gujarat Titans',
        image: 'miller.webp',
        points:22.5,
        
    },{
        name: 'Amit Mishra',
        basePrice: '₹1.5 Crore',
        role: 'Spin Bowler',
        nationality: 'India',
        previousTeam: 'Lucknow Super Giants',
        image: 'mishra.webp',
        points:21.5,
        
    },{
        name: 'Mitchell Johnson',
        basePrice: '₹1.5 Crore',
        role: 'pace Bowler',
        nationality: 'Austalia',
        previousTeam: 'Kolkata Knight riders',
        image: 'mitchell johnson.webp',
        points:18.5,
        
    },{
        name: 'Mitchell McClenaghan',
        basePrice: '₹1 Crore',
        role: 'pace Bowler',
        nationality: 'New Zealand',
        previousTeam: 'Mumbai Indians',
        image: 'mitchell mccelagan.webp',
        points:17,
        
    },{
        name: 'Moeen Ali',
        basePrice: '₹1 Crore',
        role: 'All-Rounder|Spin',
        nationality: 'England',
        previousTeam: 'Chennai Super Kings',
        image: 'Moeen Ali.png',
        points:20,
        
    },{
        name: 'Mohammed Shami',
        basePrice: '₹1.5 Crore',
        role: 'pace Bowler',
        nationality: 'India',
        previousTeam: 'Gujarat Titans',
        image: 'Mohammad Shami.png',
        points:21.5,
        
    },{
        name: 'Mohit Sharma',
        basePrice: '₹1 Crore',
        role: 'pace Bowler',
        nationality: 'India',
        previousTeam: 'Gujarat Titants',
        image: 'mohit sharma.webp',
        points:20.5,
        
    },{
        name: 'Morne Morkal',
        basePrice: '₹1.5 Crore',
        role: 'pace Bowler',
        nationality: 'South africa',
        previousTeam: 'Kolkata Knight Riders',
        image: 'morne morkal.jpg',
        points:17,
        
    },{
        name: 'Brandon Mucculam',
        basePrice: '₹1.5 Crore',
        role: 'Batsman',
        nationality: 'New Zealand',
        previousTeam: 'Royal Challengers Bengaluru',
        image: 'mucculam.webp',
        points:20,
        
    },{
        name: 'Mustafizur Rahman',
        basePrice: '₹70 lakhs',
        role: 'pace Bowler',
        nationality: 'Bangaladesh',
        previousTeam: 'Chennai Super Kings',
        image: 'Mustafizur Rahman.png',
        points:20,
        
    },{
        name: 'Sunil Narine',
        basePrice: '₹2 Crore',
        role: 'All-Rounder|Spin',
        nationality: 'West Indies',
        previousTeam: 'Kolkata Knight Riders',
        image: 'naraine.webp',
        points:21.5,
        
    },{
        name: 'T.Natrajan',
        basePrice: '₹1 Crore',
        role: 'pace Bowler',
        nationality: 'India',
        previousTeam: 'Sun Rishes Hydrabad',
        image: 'nattu.webp',
        points:18.5,
        
    },{
        name: 'Nitish Rana',
        basePrice: '₹70 lakhs',
        role: 'Batsman',
        nationality: 'India',
        previousTeam: 'Kolkata Knight Riders',
        image: 'Nitish Rana.png',
        points:18.5,
        
    },{
        name: 'Risabh Pant',
        basePrice: '₹1.5 Crore',
        role: 'Wicket Keeper',
        nationality: 'India',
        previousTeam: 'Delhi Capitals',
        image: 'pant.webp',
        points:23.5,
        
    },{
        name: 'Nichols Pooren',
        basePrice: '₹1.5 Crore',
        role: 'Wicket Keeper',
        nationality: 'West Indies',
        previousTeam: 'Lucknow Super Giants',
        image: 'pooren.webp',
        points:20.5,
        
    },{
        name: 'Pragyan Ojha',
        basePrice: '₹50 lakhs',
        role: 'Spin Bowler',
        nationality: 'India',
        previousTeam: 'Mumbai Indians',
        image: 'PragyanOjha1.jpg',
        points:16,
        
    },{
        name: 'Praveen Kumar',
        basePrice: '₹50 lakhs',
        role: 'pace Bowler',
        nationality: 'India',
        previousTeam: 'Gujarat Titans',
        image: 'PraveenKumar1.jpg',
        points:18,
        
    },{
        name: 'Kagiso Rabada',
        basePrice: '₹1.5 Crore',
        role: 'pace Bowler',
        nationality: 'South Africa',
        previousTeam: 'Punjab Kings',
        image: 'rabada.webp',
        points:19.5,
        
    },{
        name: 'Rahul Chahar',
        basePrice: '₹40 lakhs',
        role: 'Spin Bowler',
        nationality: 'India',
        previousTeam: 'Punjab Kings',
        image: 'rahul chahar.webp',
        points:18.5,
        
    },{
        name: 'Rahul Tewatia',
        basePrice: '₹50 lakhs',
        role: 'All-Rounder',
        nationality: 'India',
        previousTeam: 'Gujarat Titans',
        image: 'Rahul Tewatia.png',
        points:19.5,
        
    },{
        name: 'Rahul tripathi',
        basePrice: '₹50 lakhs',
        role: 'Batsman',
        nationality: 'India',
        previousTeam: 'Sun Rises Hydrabad',
        image: 'Rahul Tripathi.png',
        points:18.5,
        
    },{
        name: 'Suresh Raina',
        basePrice: '₹2 Crore',
        role: 'Batsman',
        nationality: 'India',
        previousTeam: 'Chennai super Kings',
        image: 'raina.webp',
        points:24,
        
    },{
        name: 'Rasid Khan',
        basePrice: '₹2 Crore',
        role: 'Spin Bowler',
        nationality: 'Afganistan',
        previousTeam: 'Gujarat Titans',
        image: 'Rashid Khan.png',
        points:23.5,
        
    },{
        name: 'Rinku Singh',
        basePrice: '₹1 Crore',
        role: 'Batsman',
        nationality: 'India',
        previousTeam: 'Kolkata Knight Riders',
        image: 'Rinku Singh.png',
        points:20.5,
        
    },{
        name: 'Riyan Parag',
        basePrice: '₹1 Crore',
        role: 'Bastmen',
        nationality: 'India',
        previousTeam: 'Rajasthan royals',
        image: 'Riyan Parag.png',
        points:20,
        
    },{
        name: 'Robin Uthappa',
        basePrice: '₹1 Crore',
        role: 'batsman',
        nationality: 'India',
        previousTeam: 'Chennai Super Kings',
        image: 'Robin Uthappa.png',
        points:21.5,
        
    },{
        name: 'Rohit Sharma',
        basePrice: '₹2 Crore',
        role: 'Batsman',
        nationality: 'India',
        previousTeam: 'Mumbai Indians',
        image: 'rohit.webp',
        points:22.5,
        
    },{
        name: 'Rp Singh',
        basePrice: '₹50 Lakhs',
        role: 'pace Bowler',
        nationality: 'India',
        previousTeam: 'Mumbai Indians',
        image: 'rp singh.jpg',
        points:18,
        
    },{
        name: 'Andre Russel',
        basePrice: '₹2 Crore',
        role: 'All-Rounder|Pace',
        nationality: 'West Indies',
        previousTeam: 'Kolkata Knight Riders',
        image: 'russel.webp',
        points:22,
        
    },{
        name: 'Ruthuraj Gaikwad',
        basePrice: '₹1.5 Crore',
        role: 'Bastman',
        nationality: 'India',
        previousTeam: 'Chennai Super Kings',
        image: 'ruthu.webp',
        points:22,
        
    },{
        name: 'Wriddhiman Saha',
        basePrice: '₹70 lakhs',
        role: 'Wicket keeper',
        nationality: 'India',
        previousTeam: 'Gujarat Titans',
        image: 'saha.webp',
        points:18.5,
        
    },{
        name: 'Sai Sudharshan',
        basePrice: '₹80 lakhs',
        role: 'batsman',
        nationality: 'India',
        previousTeam: 'Gujarat Titans',
        image: 'Sai Sudharsan.png',
        points:19.5,
        
    },{
        name: 'Sam Curran',
        basePrice: '₹1.5 Crore',
        role: 'All-rounder|Pace',
        nationality: 'England',
        previousTeam: 'Punjab Kings',
        image: 'sam curran.webp',
        points:19.5,
        
    },{
        name: 'Sandeep Sharma',
        basePrice: '₹75 lakhs',
        role: 'pace Bowler',
        nationality: 'India',
        previousTeam: 'Rajastan Royals',
        image: 'sandeep.webp',
        points:20.5,
        
    },{
        name: 'Sanju Samson',
        basePrice: '₹1.5 Crore',
        role: 'Wicket Keeper',
        nationality: 'India',
        previousTeam: 'Rajasthan Royals',
        image: 'sanju.webp',
        points:22.5,
        
    },{
        name: 'Virender Shewag',
        basePrice: '₹1 Crore',
        role: 'Batsman',
        nationality: 'India',
        previousTeam: 'Punjab Kings',
        image: 'sewag.webp',
        points:22,
        
    },{
        name: 'Sakib Al Hasan',
        basePrice: '₹1 Crore',
        role: 'All-Rounder|Spin',
        nationality: 'bangaldesh',
        previousTeam: 'Kolkata Knight Riders',
        image: 'Shakib Al Hasan.png',
        points:17.5,
        
    },{
        name: 'Shardul Thakur',
        basePrice: '₹1 Crore',
        role: 'pace Bowler',
        nationality: 'India',
        previousTeam: 'Chennai Super Kings',
        image: 'shardul Thakur.png',
        points:17,
        
    },{
        name: 'Prithiv Shaw',
        basePrice: '₹50 lakhs',
        role: 'Batsman',
        nationality: 'India',
        previousTeam: 'Delhi Capitals',
        image: 'shaw.webp',
        points:20,
        
    },{
        name: 'Shimron Hetmyer',
        basePrice: '₹1 Crore',
        role: 'Batsman',
        nationality: 'West Indies',
        previousTeam: 'Rajasthan Royals',
        image: 'Shimron Hetmyer.png',
        points:20,
        
    },{
        name: 'shreyas Iyer',
        basePrice: '₹1 Crore',
        role: 'Batsman',
        nationality: 'India',
        previousTeam: 'Kolkata Knight Riders',
        image: 'shreyas.webp',
        points:20,
        
    },{
        name: 'Siddharth Kaul',
        basePrice: '₹50 lakhs',
        role: 'pace Bowler',
        nationality: 'India',
        previousTeam: 'Royal Challengers Bengaluru',
        image: 'Siddarth Kaul.png',
        points:17,
        
    },{
        name: 'Siddharth trivedi',
        basePrice: '₹50 lakhs',
        role: 'pace Bowler',
        nationality: 'India',
        previousTeam: 'Rajasthan Royals',
        image: 'siddharth trivedi.jpg',
        points:19.5,
        
    },{
        name: 'Mohammed Siraj',
        basePrice: '₹1 Crore',
        role: 'pace Bowler',
        nationality: 'India',
        previousTeam: 'Royal Challengers Bengaluru',
        image: 'siraj.webp',
        points:19.5,
        
    },{
        name: 'Surya Kumar Yadav',
        basePrice: '₹2 Crore',
        role: 'Batsman',
        nationality: 'India',
        previousTeam: 'Mumbai Indians',
        image: 'sky.webp',
        points:22.5,
        
    },{
        name: 'Steve Smith',
        basePrice: '₹1.5 Crore',
        role: 'Batsman',
        nationality: 'India',
        previousTeam: 'Delhi Captials',
        image: 'smith.webp',
        points:21,
        
    },{
        name: 'Marcus Stoinis',
        basePrice: '₹1 Crore',
        role: 'All-Rounder|Pace',
        nationality: 'Australia',
        previousTeam: 'Lucknow Super Giants',
        image: 'stoinis.webp',
        points:19.5,
        
    },{
        name: 'Imran Tahir',
        basePrice: '₹75 Lakhs',
        role: 'Spin Bowler',
        nationality: 'South Africa',
        previousTeam: 'Chennai Super Kings',
        image: 'tahir.webp',
        points:21.5,
        
    },{
        name: 'Tilak Varma',
        basePrice: '₹1 Crore',
        role: 'Batsman',
        nationality: 'India',
        previousTeam: 'Mumbai Indians',
        image: 'Tilak Varma.png',
        points:18,
        
    },{
        name: 'Umesh Yadav',
        basePrice: '₹1 Crore',
        role: 'pace Bowler',
        nationality: 'India',
        previousTeam: 'Gujarat Titans',
        image: 'Umesh Yadav.png',
        points:17,
        
    },{
        name: 'Jaydev Unadhkat',
        basePrice: '₹50 lakhs',
        role: 'pace Bowler',
        nationality: 'India',
        previousTeam: 'Sun Rises Hydrabad',
        image: 'undankat.webp',
        points:17,
        
    },{
        name: 'Varun Chakaravarthy',
        basePrice: '₹1 Crore',
        role: 'Spin Bowler',
        nationality: 'India',
        previousTeam: 'Kolkata Knight Riders',
        image: 'Varun Chakaravarthy.png',
        points:21.5,
        
    },{
        name: 'Vinay Kumar',
        basePrice: '₹50 Lakhs',
        role: 'pace Bowler',
        nationality: 'India',
        previousTeam: 'Kolkata Knight Riders',
        image: 'vinay.webp',
        points:20,
        
    },{
        name: 'Virat Kohli',
        basePrice: '₹2 Crore',
        role: 'Batsman',
        nationality: 'India',
        previousTeam: 'Royal Challangers Bengaluru',
        image: 'virat.webp',
        points:25,
        
    },{
        name: 'David Warner',
        basePrice: '₹2 Crore',
        role: 'Batsman',
        nationality: 'Australia',
        previousTeam: 'Delhi Capitals',
        image: 'warner.webp',
        points:25,
        
    },{
        name: 'Shane watson',
        basePrice: '₹1.5 Crore',
        role: 'All-Rounder|Pace',
        nationality: 'Australia',
        previousTeam: 'Chennai Super Kings',
        image: 'watson.webp',
        points:22,
        
    },{
        name: 'Kane Williamson',
        basePrice: '₹2 Crore',
        role: 'Batsaman',
        nationality: 'New Zealand',
        previousTeam: 'Gujarat Titans',
        image: 'willamson.webp',
        points:21,
        
    },{
        name: 'Yusuf Pathan',
        basePrice: '₹1 Crore',
        role: 'Batsman',
        nationality: 'India',
        previousTeam: 'Sun Rises Hydrabad',
        image: 'yusuf.webp',
        points:22,
        
    },{
        name: 'Yuvraj Singh',
        basePrice: '₹1.5 Crore',
        role: 'All-Rounder|Spin',
        nationality: 'India',
        previousTeam: 'Mumbai Indians',
        image: 'yuvaraj.webp',
        points:21,
        
    },{
        name: 'Zaheer Khan',
        basePrice: '₹1.5 Crore',
        role: 'pace Bowler',
        nationality: 'India',
        previousTeam: 'Delhi Capitals',
        image: 'zaheer.jpg',
        points:23,
        
    },{
        name: 'Adam Zampa',
        basePrice: '₹1 Crore',
        role: 'Spin Bowler',
        nationality: 'Australia',
        previousTeam: 'Rajasthan Royals',
        image: '1)Adam Zampa.png',
        points:17.5,
        
    },{
        name: 'Albie Morkal',
        basePrice: '₹1 Crore',
        role: 'All-Rounder|pace',
        nationality: 'South Africa',
        previousTeam: 'Delhi Capitals',
        image: '1)albie.jpg',
        points:20.5,
        
    },{
        name: 'Andrew Tye',
        basePrice: '₹1 Crore',
        role: 'pace Bowler',
        nationality: 'Australia',
        previousTeam: 'LuckNow Super Giants',
        image: '1)Andrew Tye.png',
        points:18,
        
    },{
        name: 'Harpreet Brar',
        basePrice: '₹20 lakhs',
        role: 'Spin Bowler',
        nationality: 'India',
        previousTeam: 'Punjab Kings',
        image: '1)brar.webp',
        points:18,
        
    },{
        name: 'Devdutt Padikkal',
        basePrice: '₹80 lakhs',
        role: 'Batsman',
        nationality: 'India',
        previousTeam: 'Lucknow Super Giants',
        image: '1)Devdutt Padikkal.png',
        points:19.5,
        
    },{
        name: 'Ashok Dinda',
        basePrice: '₹50 lakhs',
        role: 'pace Bowler',
        nationality: 'India',
        previousTeam: 'none',
        image: '1)Dinda.jpg',
        points:17,
        
    },{
        name: 'Doug Bollinger',
        basePrice: '₹50 Lakhs',
        role: 'pace Bowler',
        nationality: 'Australia',
        previousTeam: 'Chennai Super Kings',
        image: '1)Doug Bollinger.jpg',
        points:18.5,
        
    },{
        name: 'Dwayne smith',
        basePrice: '₹1 Crore',
        role: 'Batsman',
        nationality: 'West Indies',
        previousTeam: 'Gujarat Titans',
        image: '1)Dwayne-Smith.jpg',
        points:20,
        
    },{
        name: 'Evin Lewis',
        basePrice: '₹1 Crore',
        role: 'Batsman',
        nationality: 'West Indies',
        previousTeam: 'Lucknow super Giants',
        image: '1)Evin Lewis.png',
        points:19,
        
    },{
        name: 'James Faulkner',
        basePrice: '₹1 Crore',
        role: 'All-Rounder|Pace',
        nationality: 'Australia',
        previousTeam: 'Delhi Capitals',
        image: '1)faulkner.webp',
        points:18.5,
        
    },{
        name: 'Mathew Hayden',
        basePrice: '₹1 Crore',
        role: 'Batsman',
        nationality: 'Australia',
        previousTeam: 'Chennai Supeer Kings',
        image: '1)hayden.jpg',
        points:24,
        
    },{
        name: 'Mosies Hendricks',
        basePrice: '₹1 Crore',
        role: 'All-Rounder|pace',
        nationality: 'Australia',
        previousTeam: 'Punjab Kinga',
        image: '1)Hendricks.webp',
        points:22,
        
    },{
        name: 'Irfan Pathan',
        basePrice: '₹1 Crore',
        role: 'All-Rounder|pace',
        nationality: 'India',
        previousTeam: 'Gujarat Titans',
        image: '1)irfan.jpg',
        points:21,
        
    },{
        name: 'Jacques Kallis',
        basePrice: '₹1 Crore',
        role: 'All-Rounder|pace',
        nationality: 'South Africa',
        previousTeam: 'Kolkata Knight Riders',
        image: '1)jack Kalies.jpg',
        points:22,
        
    },{
        name: 'Jason Holder',
        basePrice: '₹75 Lakhs',
        role: 'All-Rounder|Pace',
        nationality: 'West indies',
        previousTeam: 'Rajasthan Royals',
        image: '1)Jason Holder.png',
        points:19,
        
    },{
        name: 'Jitesh Sharma',
        basePrice: '₹20 Lakhs',
        role: 'Wicket Keeper',
        nationality: 'India',
        previousTeam: 'Punjab Kings',
        image: '1)Jitesh Sharma.png',
        points:17,
        
    },{
        name: 'Jofra Archer',
        basePrice: '₹1.5 Crore',
        role: 'pace Bowler',
        nationality: 'England',
        previousTeam: 'Mumbai Indians',
        image: '1)Jofra Archer.png',
        points:21,
        
    },{
        name: 'Karun Nair',
        basePrice: '₹50 Lakhs',
        role: 'Batsman',
        nationality: 'India',
        previousTeam: 'Rajasthan Royals',
        image: '1)Karun Nair.png',
        points:18,
        
    },{
        name: 'Kedar Jadav',
        basePrice: '₹75 Lakhs',
        role: 'Batsaman',
        nationality: 'India',
        previousTeam: 'Royal Challangers Bengaluru',
        image: '1)kedar Jadav.jpg',
        points:17.5,
        
    },{
        name: 'Dhawal Kulkarni',  
        basePrice: '₹50 Lakhs',
        role: 'pace Bowler',
        nationality: 'India',
        previousTeam: 'Mumbai Indians',
        image: '1)Kulkarni.jpg',
        points:18,
        
    },{
        name: 'Lakshmipathy Balaji',
        basePrice: '₹50 Lakhs',
        role: 'pace Bowler',
        nationality: 'India',
        previousTeam: 'Punjab Kings',
        image: '1)L balaji.jpg',
        points:19,
        
    },{
        name: 'Lokie Ferguson',
        basePrice: '₹1 Crore',
        role: 'pace Bowler',
        nationality: 'New Zealand',
        previousTeam: 'Royal Challangers Bengaluru',
        image: '1)Lockie Ferguson.png',
        points:19,
        
    },{
        name: 'Lungi Ngidi',
        basePrice: '₹1 Crore',
        role: 'pace Bowler',
        nationality: 'South Africa',
        previousTeam: 'Delhi capitals',
        image: '1)Lungi  Ngidi.png',
        points:18,
        
    },{
        name: 'Micke Hussey',
        basePrice: '₹1 Crore',
        role: 'Batsman',
        nationality: 'Australia',
        previousTeam: 'Mumbai Indians',
        image: '1)M Hussey.jpg',
        points:23,
        
    },{
        name: 'Manoj Tiwary',
        basePrice: '₹50 Lakhs',
        role: 'Batsman',
        nationality: 'India',
        previousTeam: 'Punjab Kings',
        image: '1)M Tiwary.jpg',
        points:18,
        
    },{
        name: 'Murali Vijay',
        basePrice: '₹1 Crore',
        role: 'Batsman',
        nationality: 'India',
        previousTeam: 'Chennai Super Kings',
        image: '1)M Vijay.jpg',
        points:21,
        
    },{
        name: 'Manan Vohra',
        basePrice: '₹50 Lakhs',
        role: 'Batsman',
        nationality: 'India',
        previousTeam: 'Lucknow Super Giants',
        image: '1)Manan Vohra.png',
        points:17,
        
    },{
        name: 'Matheesha Pathirana',
        basePrice: '₹1 crore',
        role: 'pace Bowler',
        nationality: 'Sri Lanka',
        previousTeam: 'Chennai Super Kings',
        image: '1)Matheesha Pathirana.png',
        points:20,
        
    },{
        name: 'Mithcell Marsh',
        basePrice: '₹1 Crore',
        role: 'All-Rounder|Pace',
        nationality: 'Australia',
        previousTeam: 'Delhi Capitals',
        image: '1)Mitchell Marsh.png',
        points:19,
        
    },{
        name: 'Mitchell Starc',
        basePrice: '₹2 Crore',
        role: 'pace Bowler',
        nationality: 'Australia',
        previousTeam: 'Kolkata Knight Riders',
        image: '1)Mitchell Starc.png',
        points:21,
        
    },{
        name: 'Eoin Morgon',
        basePrice: '₹1 crore',
        role: 'Batsman',
        nationality: 'England',
        previousTeam: 'Kolkata Knight Riders',
        image: '1)Morgon.jpg',
        points:19,
        
    },{
        name: 'Murugan Ashwin',
        basePrice: '₹50 Lakhs',
        role: 'Spin Bowler',
        nationality: 'India',
        previousTeam: 'Rajasthan Royals',
        image: '1)Murugan Ashwin.png',
        points:18,
        
    },{
        name: 'Naman Ojha',
        basePrice: '₹50 Lakhs',
        role: 'Wicket Keeper',
        nationality: 'India',
        previousTeam: 'Delhi capitals',
        image: '1)naman Ojha.jpg',
        points:18,
        
    },{
        name: 'Nathan Coulter Nile',
        basePrice: '₹75 Lakhs',
        role: 'pace Bowler',
        nationality: 'Austalia',
        previousTeam: 'Rajasthan Royals',
        image: '1)Nathan Coulter-Nile.png',
        points:19,
        
    },{
        name: 'Pawan Negi',
        basePrice: '₹50 Lakhs',
        role: 'Spin Bowler',
        nationality: 'India',
        previousTeam: 'Royal Challangers Bengaluru',
        image: '1)Negi.jpg',
        points:17,
        
    },{
        name: 'Partheiv Patel',
        basePrice: '₹50 Lakhs',
        role: 'Wicket Keeper',
        nationality: 'India',
        previousTeam: 'Royal Challangers Bengaluru',
        image: '1)Partheiv.png',
        points:16,
        
    },{
        name: 'Pat Cummins',
        basePrice: '₹2 Crore',
        role: 'pace Bowler',
        nationality: 'Australia',
        previousTeam: 'Sun Rises Hydrabad',
        image: '1)Pat Cummins.png',
        points:20,
        
    },{
        name: 'Phil Salt',
        basePrice: '₹50 Lakhs',
        role: 'Wicket Kepper',
        nationality: 'England',
        previousTeam: 'Kolkata Knight Riders',
        image: '1)Phil Salt.png',
        points:19,
        
    },{
        name: 'Prasidh Krishna',
        basePrice: '₹50 Lakhs',
        role: 'pace Bowler',
        nationality: 'India',
        previousTeam: 'Rajasthan Royals',
        image: '1)Prasidh Krishna.png',
        points:19,
        
    },{
        name: 'Rajat Patidar',
        basePrice: '₹75 Lakhs',
        role: 'Batsman',
        nationality: 'India',
        previousTeam: 'Royal Challangers Bengaluru',
        image: '1)Rajat Patidar.png',
        points:17
    },{
        name: 'Ryan Harris',
        basePrice: '₹50 Lakhs',
        role: 'pace Bowler',
        nationality: 'Australia',
        previousTeam: 'Punjab Kings',
        image: '1)Ryan Harris.jpg',
        points:18,
        
    },{
        name: 'Saurabh Tiwary',
        basePrice: '₹50 Lakhs',
        role: 'Batsman',
        nationality: 'India',
        previousTeam: 'Mumbai Indians',
        image: '1)S Tiwary.jpg',
        points:17,
        
    },{
        name: 'Sam Billings',
        basePrice: '₹75 Lakhs',
        role: 'Wicket Keeper',
        nationality: 'England',
        previousTeam: 'Kolkata Knight Riders',
        image: '1)Sam Billings.png',
        points:19,
        
    },{
        name: 'Shahbaz ahmed',
        basePrice: '₹50 Lakhs',
        role: 'All-Rounder|Spin',
        nationality: 'India',
        previousTeam: 'Sun Rises Hydrabad',
        image: '1)Shahbaz Ahmed.png',
        points:17,
        
    },{
        name: 'Shahrukh Khan',
        basePrice: '₹50 Lakhs',
        role: 'Batsman',
        nationality: 'India',
        previousTeam: 'Gujarat Titans',
        image: '1)Shahrukh Khan.png',
        points:18,
        
    },{
        name: 'Shan Marsh',
        basePrice: '₹1 Crore',
        role: 'batsman',
        nationality: 'India',
        previousTeam: 'Punjab Kings',
        image: '1)Shan Marsh.jpg',
        points:22,
        
    },{
        name: 'Shivam Dube',
        basePrice: '₹75 Lakhs',
        role: 'All-Rounder|Pace',
        nationality: 'India',
        previousTeam: 'Chennai Super Kings',
        image: '1)Shivam Dube',
        points:19.5,
        
    },{
        name: 'Shreyas Gopal',
        basePrice: '₹50 Lakhs',
        role: 'Spin Bowler',
        nationality: 'India',
        previousTeam: 'Mumbai Indians',
        image: '1)Shreyas Gopal.png',
        points:17,
        
    },{
        name:'Shahbaz Nadeem',
        basePrice: '₹50 Lakhs',
        role: 'Spin Bowler',
        nationality: 'India',
        previousTeam: 'Lucknow Super Giants',
        image: '1)Shahbaz Nadeem.png',
        points:20,
        
    },{
        name: 'Sreenath Aravind',
        basePrice: '₹50 Lakhs',
        role: 'pace Bowler',
        nationality: 'India',
        previousTeam: 'Royal Challangers Bengaluru',
        image: '1)sreenath Aravind.jpg',
        points:17,
        
    },{
        name: 'S Sreesanth',
        basePrice: '₹75 Lakhs',
        role: 'pace Bowler',
        nationality: 'India',
        previousTeam: 'Rajasthan Royals',
        image: '1)sreesanth.jpg',
        points:18,
        
    },{
        name: 'Subramaniam Badrinath',
        basePrice: '₹50 Lakhs',
        role: 'Batsman',
        nationality: 'India',
        previousTeam: 'Chennai Super Kings',
        image: '1)Subramaniam-Badrinath.jpg',
        points:18.5,
        
    },{
        name: 'Tim david',
        basePrice: '₹50 Lakhs',
        role: 'Batsman',
        nationality: 'Australia',
        previousTeam: 'Mumbai Indians',
        image: '1)Tim David.png',
        points:18,
        
    },{
        name: 'Tim Southee',
        basePrice: '₹1 Crore',
        role: 'pace Bowler',
        nationality: 'New Zealand',
        previousTeam: 'Kolkata Knight Riders',
        image: '1)Tim Southee.png',
        points:18.5,
        
    },{
        name: 'Tushar Deshpande',
        basePrice: '₹50 Lakhs',
        role: 'pace Bowler',
        nationality: 'India',
        previousTeam: 'Chennai Super Kings',
        image: '1)Tushar Deshpande.png',
        points:17,
        
    },{
        name: 'Varun Aaron',
        basePrice: '₹50 Lakhs',
        role: 'pace Bowler',
        nationality: 'India',
        previousTeam: 'Gujarat Titans',
        image: '1)Varun Aaron.png',
        points:16.5,
        currentPrice:0,
        bidby:null
    },{
        name: 'Venkatesh Iyer',
        basePrice: '₹50 Lakhs',
        role: 'Batsman',
        nationality: 'India',
        previousTeam: 'Kolkata Knight Riders',
        image: '1)Venkatesh Iyer.png',
        points:18.5,
        
    },{
        name: 'Vijay Shankar',
        basePrice: '₹50 Lakhs',
        role: 'All-Rounder|Pace',
        nationality: 'India',
        previousTeam: 'Gujarat Titans',
        image: '1)Vijay Shankar.png',
        points:17.5,
        
    },{
        name: 'Wanindu Hasaranga',
        basePrice: '₹1 Crore',
        role: 'Spin Bowler',
        nationality: 'Sri Lanka',
        previousTeam: 'Sun Rishes Hydrabad',
        image: '1)Wanindu Hasaranga.png',
        points:18,
        
    },{
        name: 'Washington Sunder',
        basePrice: '₹50 Lakhs',
        role: 'All-Rounder|Spin',
        nationality: 'India',
        previousTeam: 'Sun Rises Hydrabad',
        image: '1)Washington Sundar.png',
        points:17,
        
    },{
        name: 'Wayne Parnel',
        basePrice: '₹50 Lakhs',
        role: 'pace Bowler',
        nationality: 'South africa',
        previousTeam: 'Royal Challangers Bengaluru',
        image: '1)wayne parnel.jpg',
        points:18.5,
        
    }

];


async function addPlayers() {
    console.log(`Total number of players: ${players.length}`);
    
    try {
        await Player.insertMany(players, { ordered: false });
        console.log('Players added successfully!');
    } catch (error) {
        if (error.code === 11000) {
            console.log('Duplicate key error occurred. Players with duplicate names were not added.');
        } else {
            console.error('Error adding players:', error);
        }
    } finally {
        mongoose.connection.close();
    }
}

addPlayers();

