const Feed = require("../models/Feed");

const { client } = require("../config/redis");

let io;

const setSocketInstance = (socketIO) => {
  io = socketIO;
};

const getFeeds = async (req, res) => {
  try {
    const cachedFeeds = await client.get("feeds");

    if (cachedFeeds) {
      return res.json({
        source: "cache",
        feeds: JSON.parse(cachedFeeds),
      });
    }

    const feeds = await Feed.find().sort({
      createdAt: -1,
    });

    await client.set(
      "feeds",
      JSON.stringify(feeds),
      {
        EX: 60,
      }
    );

    res.json({
      source: "database",
      feeds,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const addFeed = async (req, res) => {
  try {
    const { message } = req.body;

    const feed = await Feed.create({
      message,
    });

    await client.del("feeds");

    io.emit("newFeed", feed);

    res.status(201).json(feed);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getFeeds,
  addFeed,
  setSocketInstance,
};