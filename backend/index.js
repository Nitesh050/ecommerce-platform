const express = require('express');
const app = express();

const PORT = 3001;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello from the backend!');
});

app.use('/products', require('./routes/products'));

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
