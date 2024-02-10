const nodemailer = require("nodemailer");
const Mailgen = require("mailgen");

const { EMAIL, PASSWORD } = require("../env.js");

/** send mail from testing account */

const signup = async (req, res) => {
  /** testing account */
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  });

  let message = {
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: "bar@example.com, baz@example.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Successfully Register with us.", // plain text body
    html: "<b>Successfully Register with us.</b>", // html body
  };

  transporter
    .sendMail(message)
    .then((info) => {
      return res.status(201).json({
        msg: "you should receive an email",
        info: info.messageId,
        preview: nodemailer.getTestMessageUrl(info),
      });
    })
    .catch((error) => {
      return res.status(500).json({ error });
    });

  // res.status(201).json("Signup Successfully...!");
};

/** send mail from real gmail account */
const getbill = (req, res) => {
  const { userEmail } = req.body;

  let config = {
    service: "gmail",
    auth: {
      user: EMAIL,
      pass: PASSWORD,
    },
  };

  let transporter = nodemailer.createTransport(config);

  // let MailGenerator = new Mailgen({
  //     theme: "default",
  //     product : {
  //         name: "Mailgen",
  //         link : 'https://mailgen.js/'
  //     }
  // })

  let response = {
    body: {
      name: "Thanks for Subscribing This News Letter",
      //         intro: "Your bill has arrived!",
      //         table : {
      //             data : [
      //                 {
      //                     item : "Nodemailer Stack Book",
      //                     description: "A Backend application",
      //                     price : "$10.99",
      //                 }
      //             ]
      //         },
      //         outro: "Looking forward to do more business"
    },
  };

  // let mail = MailGenerator.generate(response)

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

  // res.status(201).json("getBill Successfully...!");
};

module.exports = {
  signup,
  getbill,
};
