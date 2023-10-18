const express = require('express');
const cors = require("cors");
const path = require("path");
const app = express();
const port = 3000;

const routing = express.Router();

app.use(express.json())
// Get Request
routing.get('/api', (req, resp) => {
    // Send text response.
    resp.send('This is first express project')
});

// POST Request Demo.
routing.post('/api', (req, resp) => {
    console.log("Body:", req.body);

    const response = {
        code: 200,
        message: 'Success',
        data: {},
    };
    // Send json response
    resp.status(200).send(response);

    resp.send('This is first express project')
});

// Common middlewares
const corsOptions = {
    origin: "*",
    methods: [
        "ACCEPT",
        "GET",
        "POST",
        "DELETE",
        "OPTIONS",
        "HEAD",
        "PUT",
        "PATCH",
    ],
};
app.use(cors(corsOptions));

app.use(routing);
// Get the views folder path
const viewsDir = path.join(__dirname, "views");
app.set("views", viewsDir);

// Send index file.
app.get("/", (req, res) => {
    res.sendFile("index.html", { root: viewsDir });
});

app.listen(port, () => {
    console.log(`App is running on port:${port}`);
});