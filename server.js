const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const port = 3000;

// Setting up the database
let db = new sqlite3.Database('./voting.db', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the voting database.');
});

db.serialize(() => {
    db.run('CREATE TABLE IF NOT EXISTS votes (id INTEGER PRIMARY KEY AUTOINCREMENT, aadhaarNumber TEXT, voteDate TEXT, party TEXT)');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.post('/vote', (req, res) => {
    const { aadhaarNumber, voteDate, party } = req.body;
    const sql = INSERT INTO votes (aadhaarNumber, voteDate, party) VALUES (?, ?, ?);

    db.run(sql, [aadhaarNumber, voteDate, party], (err) => {
        if (err) {
            return console.error(err.message);
        }
        res.send('Vote successfully recorded');
    });
});

app.get('/', (req, res) => {
    res.send('Welcome to the E-Voting System');
});

// Start server
app.listen(port, () => {
    console.log(Server running on http://localhost:${port});
});