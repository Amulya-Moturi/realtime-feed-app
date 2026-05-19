require("dotenv").config();

const express = require("express");

const cors = require("cors");

const http = require("http");

const { Server } = require("socket.io");

const connectDB = require("./config/db");

const {
  connectRedis,
} = require("./config/redis");

const feedRoutes = require("./routes/feedRoutes");

const setupSocket = require("./socket/socket");

const {
  setSocketInstance,
} = require("./controllers/feedController");

const app = express();

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
  },
});

setupSocket(io);

setSocketInstance(io);

connectDB();

connectRedis();

app.use(cors());

app.use(express.json());

app.use("/api", feedRoutes);

app.get("/", (req, res) => {
  res.send("API Running");
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  );
});