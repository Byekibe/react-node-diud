import express from 'express';

const app = express();

app.get("/", (req, res) => {
    res.send("Hello, Pierre")
});


app.listen(7006, () => {
    console.log("App running on port 7006");
});