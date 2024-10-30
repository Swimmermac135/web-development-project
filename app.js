const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

// Serve HTML, CSS, and JavaScript files from their respective folders
app.use('/html', express.static(path.join(__dirname, 'html')));
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/js', express.static(path.join(__dirname, 'js')));
app.use('/img', express.static(path.join(__dirname, 'img')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'html', 'Home.html'));
});

app.get('/Contact.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'html', 'Contact.html'));
});

app.get('/Home.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'html', 'Home.html'));
});

app.get('/Aboutme.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'html', 'Aboutme.html'));
});



app.post('/submit-form', (req, res) => {
    const username = req.body.username;
    const message = req.body.message;

    console.log(`Username is ${username}`);
    console.log(`Message is ${message}`);
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
