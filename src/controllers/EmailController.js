const EmailService = require('../services/EmailService');

class EmailController {
    constructor() {
        this.emailService = new EmailService();
    }

    async sendEmail(req, res) {
        try {
            const { emailTo, text, content, name } = req.body;
            
            if (!emailTo || !text || !content || !name) {
                return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
            }

            await this.emailService.sendVerificationEmail({ emailTo, text, content, name });
            res.status(200).json({ message: 'Email enviado com sucesso' });
        } catch (error) {
            res.status(500).json({ error: 'Erro ao enviar o email' });
        }
    }
}

module.exports = EmailController;