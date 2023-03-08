const moongose = require("mongoose");

const messageModel = moongose.Schema(
  {
    sender: {
      type: moongose.Schema.Types.ObjectId,
      ref: "User",
    },
    content: {
      type: String,
      trime: true,
    },
    sender: {
      type: moongose.Schema.Types.ObjectId,
      ref: "Chat",
    },
  },
  {
    timestamps: true,
  }
);


const Message = moongose.Schema("Message",messageModel );

module.exports = Message;


