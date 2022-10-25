const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/course-category.json');
const courseInfo = require('./data/course-info.json');

app.get('/', (req, res) => {
    res.send("API Running");
});

app.get('/courses', (req, res) => {
    res.send(categories)
});

app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    const category_info = categories.filter( c=> c.id === id);
    res.send(category_info);
});

app.get('/info/:id', (req, res) => {
    const id = req.params.id;
    const selectedInfo = courseInfo.find(info => info.id === id);
    res.send(selectedInfo);
});

app.listen(port, () => {
    console.log("server running on port", port);
});