import express from 'express';

const app = express();

const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to our API!');
});

app.get('/users', (req, res) => {
    const users = [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Smith' },
    ];
    res.json(users);
});

app.post('/users', (req, res) => {
    const newUser = req.body;
    console.log(newUser);
    res.json({ message: 'User added Successfully!', user: newUser });
});

app.get('/greet', (req, res) => {
    res.send('Hello, user!');
});

app.post('/submit', (req, res) => {
    const { name, age } = req.body;
    res.send(`Hello, ${name}! You are ${age} years old.`);
});

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
