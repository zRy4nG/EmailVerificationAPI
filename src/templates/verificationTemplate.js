class VerificationTemplate {
    generateTemplate(data) {
        const { name, content } = data;
        
        return `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Código de Verificação - Brasil Cidade Nova</title>
</head>
<body style="margin: 0; padding: 20px; background-color: #f8fafc; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
    <div style="max-width: 580px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08); border: 1px solid #e2e8f0;">
        <div style="background: linear-gradient(135deg, #37AFEB 0%, #2B8CC4 100%); padding: 40px 30px; text-align: center;">
            <div style="margin-bottom: 15px;">
                <h1 style="color: #fff; margin: 0; font-size: 28px; font-weight: 700; letter-spacing: 0.5px;">BRASIL CIDADE NOVA</h1>
            </div>
            <p style="color: rgba(255, 255, 255, 0.9); margin: 0; font-size: 16px; font-weight: 300;">Segurança e Excelência em Roleplay</p>
        </div>

        <div style="padding: 40px 35px;">
            <div style="margin-bottom: 30px;">
                <h2 style="color: #1e293b; margin: 0 0 10px 0; font-size: 24px; font-weight: 600;">Código de Verificação</h2>
                <div style="height: 3px; width: 60px; background: linear-gradient(90deg, #37AFEB 0%, #2B8CC4 100%); border-radius: 2px;"></div>
            </div>

            <p style="color: #475569; margin: 0 0 20px 0; line-height: 1.6; font-size: 16px;">
                Olá, <strong style="color: #1e293b;">${name}</strong>
            </p>
            
            <p style="color: #475569; margin: 0 0 30px 0; line-height: 1.6; font-size: 16px;">
                Recebemos uma solicitação para recuperação de acesso à sua conta no servidor <strong style="color: #1e293b;">Brasil Cidade Nova Roleplay</strong>. 
                Utilize o código de verificação abaixo para prosseguir com o processo:
            </p>

            <div style="background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%); border-radius: 10px; padding: 35px; margin: 35px 0; text-align: center; border: 1px solid #e2e8f0;">
                <p style="color: #64748b; margin: 0 0 15px 0; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">CÓDIGO DE SEGURANÇA</p>
                <div style="display: inline-block; background: linear-gradient(135deg, #37AFEB 0%, #2B8CC4 100%); color: white; padding: 20px 40px; font-size: 32px; font-weight: 700; border-radius: 10px; letter-spacing: 4px; font-family: 'Courier New', monospace; box-shadow: 0 4px 12px rgba(55, 175, 235, 0.25);">
                    ${content}
                </div>
                <p style="color: #94a3b8; margin: 20px 0 0 0; font-size: 13px; font-style: italic;">
                    Válido por 15 minutos
                </p>
            </div>

            <div style="background-color: #fef3c7; border-left: 4px solid #f59e0b; padding: 18px; border-radius: 6px; margin: 35px 0;">
                <p style="color: #92400e; margin: 0; font-size: 14px; line-height: 1.5;">
                    ⚠️ <strong>Importante:</strong> Nunca compartilhe este código com terceiros. 
                    A equipe do Brasil Cidade Nova nunca solicitará suas credenciais via email ou mensagem.
                </p>
            </div>

            <p style="color: #64748b; margin: 0 0 25px 0; line-height: 1.6; font-size: 15px;">
                Se você não reconhece esta solicitação, por favor, ignore este email ou entre em contato 
                imediatamente com nosso suporte.
            </p>

            <div style="padding-top: 30px; border-top: 1px solid #e2e8f0; margin-top: 30px;">
                <p style="color: #475569; margin: 0; font-size: 15px;">
                    Atenciosamente,<br>
                    <strong style="color: #1e293b; font-size: 16px;">Equipe de Segurança - Brasil Cidade Nova</strong>
                </p>
            </div>
        </div>

        <div style="background-color: #1e293b; padding: 25px 30px; text-align: center;">
            <div style="margin-bottom: 15px;">
                <p style="color: #cbd5e1; margin: 0; font-size: 14px;">
                    Brasil Cidade Nova Roleplay © ${new Date().getFullYear()}. Todos os direitos reservados.
                </p>
            </div>
            <p style="color: #94a3b8; margin: 8px 0 0 0; font-size: 12px;">
                Este é um email automático, por favor não responda.
            </p>
        </div>
    </div>
</body>
</html>`;
    }
}

module.exports = VerificationTemplate;