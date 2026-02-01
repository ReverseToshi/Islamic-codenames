import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";
import dotenv from "dotenv";
import CreateGame from "./CreateGame";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000",
  },
});

app.get("/health", (_, res) => {
  res.json({ status: "ok" });
});

app.post("/create", (req, res) => {
  const { playerName } = req.body;
  console.log(`Creating game for player: ${playerName}`);
  // Here you would add logic to create a game and store it in your database
  CreateGame(playerName);
  res.status(201).json({ message: "Game created successfully" });
});

io.on("connection", (socket) => {
  console.log("Client connected:", socket.id);

  socket.on("disconnect", () => {
    console.log("Client disconnected:", socket.id);
  });
});

const PORT = process.env.PORT || 4000;
httpServer.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});

