const { createTransport } = require("../config/nodemailer");

const sendMail = (mailOptions) => {
  return new Promise(async (resolve, reject) => {
    try {
      let info = await createTransport.sendMail(mailOptions);
      if (info) {
        resolve("Sent succesfully");
      } else {
        reject("Could not send the mail");
      }
    } catch (error) {
      console.log(error);
      reject("Could not send the mail");
    }
  });
};

module.exports = sendMail;
