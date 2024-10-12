import express from "express";
const route = express.Router();

route.get("/todos", (req, res) => {
    res.send("All Todos");
});

route.get("/todos/:id", (req, res) => {
    const { id } = req.params;
    res.send(`Getting TODO with id ${id}`);
});

route.post("/todos", (req, res) => {
    res.json({ id: 1, title: "Todo", description: "My todo" });
});

route.put("/todos/:id", (req, res) => {
    const { id } = req.params;
    res.send(`Updating TODO with id ${id}`);
});

route.delete("/todos/:id", (req, res) => {
    const { id } = req.params;
    res.send(`Deleting TODO with id ${id}`);
});

export default route;
 