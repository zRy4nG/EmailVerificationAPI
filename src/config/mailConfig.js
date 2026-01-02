const nodemailer = require('nodemailer');

class MailConfig {
    constructor() {
        this.transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: 'seuemail@gmail.com', // substitua pelo seu email
                pass: '---- ---- ---- ---- ----', // substitua pela sua senha ou app password
            },
        });
    }

    getTransporter() {
        return this.transporter;
    }
}

module.exports = MailConfig;