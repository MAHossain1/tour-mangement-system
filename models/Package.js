const mongoose = require("mongoose");

const packageSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter a Package name"],
      trim: true,
      unique: [true, "Please Give a Unique Name"],
      minLength: [3, "Name must be at least 3 character"],
      maxLength: [100, "Name is too large"],
    },
    description: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
      required: [true, "Please Confirm You enter Duration"],
    },
    price: {
      type: Number,
      required: true,
      min: [0, "Price Must be a positive Number"],
    },
    unit: {
      type: String,
      required: true,
      enum: {
        values: ["hour", "day", "week"],
        message: "unit value Can't be {Value}, should be hour/day/week",
      },
    },
    image_url: {
      type: String,
      required: true,
    },
    view_count: {
      type: Number,
      default: 0,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timeStamps: true,
  }
);

const Package = mongoose.model("Package", packageSchema);

module.exports = Package;
