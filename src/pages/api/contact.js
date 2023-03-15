export default function (req, res) {
  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: "qbylucky@gmail.com",
      pass: process.env.GMAIL_APP_SECRET
    },
  });
  // console.log(req.body);

  const mailOptions = {
    from: 'qbylucky@gmail.com',
    to: 'qbylucky@gmail.com',
    subject: `Message From ${req.body.firstName} ${req.body.lastName}`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from: ${req.body.email}</p>`
   }

   transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
      res.status(500).json({ message: "Failure" });
    } else {
      // console.log('Email sent: ' + info.response);
      // do something useful
      res.status(200).json({ message: "Success" });
    }
  });
}
