import express from "express";
import route from "./routes/todos.js";
const app = express();

app.use("/api", route);
 
// define the port
const port = 3000;
 
app.get("/", (req, res) => {
  res.send("Hello Todo App!!!");
});
 
app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});