const nodemailer = require("nodemailer");

const { EMAIL, PASSWORD } = require("../credentials.js");

const sendEmail = (req, res) => {
  const { userEmail } = req.body;

  let config = {
    service: "gmail",
    auth: {
      user: EMAIL,
      pass: PASSWORD,
    },
  };

  let transporter = nodemailer.createTransport(config);

  let message = {
    from: "EMAIL",
    to: userEmail,
    subject: "Thanks for Subscribing",
    html: "Glad to Connect with you! We appreciate your support and look forward to sharing exciting updates with you.",
    text: "Click on the following link to connect: mailto:" + userEmail,
  };

  transporter
    .sendMail(message)
    .then(() => {
      return res.status(201).json({
        msg: "you should receive an email",
      });
    })
    .catch((error) => {
      return res.status(500).json({ error });
    });
};

module.exports = {
  sendEmail,
};
