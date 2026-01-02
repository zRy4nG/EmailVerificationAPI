const express = require('express');
const bodyParser = require('body-parser');
const EmailController = require('./controllers/EmailController');

class Server {
    constructor() {
        this.app = express();
        this.port = 3000;
        this.emailController = new EmailController();
        this.setupMiddleware();
        this.setupRoutes();
    }

    setupMiddleware() {
        this.app.use(bodyParser.json());
    }

    setupRoutes() {
        this.app.post('/send-email', (req, res) => this.emailController.sendEmail(req, res));
        
        this.app.get('/', (req, res) => {
            res.json({
                Version: "1.0.0",
                developmentBy: "zRy4nG",
                service: "Email API",
                endpoints: {
                    sendEmail: "POST /send-email",
                    status: "GET /"
                }
            });
        });
    }

    start() {
        this.app.listen(this.port, () => {
            console.log(`Servidor rodando na porta ${this.port}`);
        });
    }
}

const server = new Server();
server.start();