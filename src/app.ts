import express from "express";
import postRoutes from "./routes/postRoutes";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());
app.use('/posts', postRoutes);

export default app;