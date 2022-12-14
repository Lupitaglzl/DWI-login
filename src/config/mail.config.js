const nodemailer = require('nodemailer');

const mail = {
    user: 'lupitaglzl84@gmail.com',
    pas: '123456'
}

let transporter = nodemailer.createTransport({
    host: "mail.google.com",
    port: 587,
    tls: {
        rejectUnathorized: false
    },
    secure: false, // true for 465, false for other ports
    auth: {
      user: mail.user, // generated ethereal user
      pass: mail.pass, // generated ethereal password
    },
  });

  const sendEmail = async (email, subject, html) =>{
    try {
        
        await transporter.sendMail({
            from: `MHCode <${ mail.user }>` , // sender address
            to: email, // list of receivers
            subject, // Subject line
            text: "Mi login con verificacion", // plain text body
            html, // html body
          });

    } catch (error) {
        console.log('Algo no esta bien con el email', error)
    }
  }

  const getTemplate = (name, token) => {
    return `
      <head>
          <link rel="stylesheet" href="./style.css">
      </head>
      
      <div id="email___content">
          <img src="https://i.imgur.com/eboNR82.png" alt="">
          <h2>Hola ${ name }</h2>
          <p>Para confirmar tu cuenta, ingresa al siguiente enlace</p>
          <a
              href="http://localhost:4000/api/user/confirm/${ token }"
              target="_blank"
          >Confirmar Cuenta</a>
      </div>
    `;
}

module.exports = {
    sendEmail, 
    getTemplate
}
