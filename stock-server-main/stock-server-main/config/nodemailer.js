const nodemailer = require("nodemailer");

exports.createTransport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "saurabhrauthan07@gmail.com",
    pass: "bestindwrld",
  },
});
