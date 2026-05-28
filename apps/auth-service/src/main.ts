import express from "express";
import cors from "cors";
const port = process.env.PORT ? Number(process.env.PORT) : 6001;

const app = express();
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

app.get("/", (req, res) => {
  res.send({ message: "Hello API" });
});

const server = app.listen(port, () => {
  console.log(`[ ready ] http://localhost:${port}/api`);
});

server.on("error", (err) => {
  console.error(err);
});
