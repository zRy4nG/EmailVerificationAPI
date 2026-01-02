const MailConfig = require('../config/mailConfig');
const VerificationTemplate = require('../templates/verificationTemplate');

class EmailService {
    constructor() {
        this.mailConfig = new MailConfig();
        this.template = new VerificationTemplate();
        this.transporter = this.mailConfig.getTransporter();
    }

    async sendVerificationEmail(emailData) {
        const { emailTo, text, content, name } = emailData;
        
        const mailOptions = {
            from: 'Brasil Cidade Nova <ryan2007reis@gmail.com>',
            to: emailTo,
            subject: text,
            html: this.template.generateTemplate({ name, content })
        };

        return new Promise((resolve, reject) => {
            this.transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(info);
                }
            });
        });
    }
}

module.exports = EmailService;