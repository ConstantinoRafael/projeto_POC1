import express, { Request, Response, json } from "express";
import winesRouter from "./routes/wines.routes.js"

const app = express();
app.use(json());
app.use(winesRouter);

app.get("/health", (req: Request, res: Response) => {
  res.send("ok");
});

app.listen(4000, () => {
  console.log("Server is up and running");
});
