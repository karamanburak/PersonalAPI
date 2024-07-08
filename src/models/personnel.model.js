"use strict";
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
const { mongoose } = require("../configs/dbConnection");
const passwordEncrypt = require("../helpers/passwordEncrypt");

/* ------------------------------------------------------- */

const PersonnelSchema = new mongoose.Schema(
  {
    departmentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Department",
      required: true,
    },
    username: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
      trim: true,
      set: (password) => {
        if (
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!-\*?+&%{}])[A-Za-z\d!-\*?+&%{}]{8,}$/.test(
            password
          )
        ) {
          return passwordEncrypt(password);
        } else {
          throw new CustomError("Password type is incorrect", 400);
        }
      },
    },
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      // unique: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      validate: [
        (email) => email.includes("@") && email.split("@")[1].includes("."),
        "Email is invalid!",
      ],
    },
    title: {
      type: String,
      trim: true,
      required: true,
    },
    salary: {
      type: Number,
      default: 0,
    },
    description: {
      type: String,
      trim: true,
      default: null,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isLead: {
      type: Boolean,
      default: false,
    },
    startedAt: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    collection: "personnel",
    timestamps: true,
  }
);

module.exports = mongoose.model("Personnel", PersonnelSchema);
