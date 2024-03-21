import express from 'express';

// Create web server with Express.js
const app = express();
const port = 3000;

app.get('/comments', (req, res) => {
    res.send('Comments');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// Test the server
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/about', (req, res) => {
    res.send('About page');
});
