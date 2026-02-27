using System.Net;
using System.Net.Mail;
using Microsoft.Extensions.Options;

namespace LucianoFerreira.Portfolio.Services
{
    public interface IEmailService
    {
        Task SendEmailAsync(string nome, string email, string mensagem);
    }

    public class EmailService : IEmailService
    {
        private readonly EmailSettings _emailSettings;

        public EmailService(IOptions<EmailSettings> emailSettings)
        {
            _emailSettings = emailSettings.Value;
        }

        public async Task SendEmailAsync(string nome, string email, string mensagem)
        {
            using var smtpClient = new SmtpClient(_emailSettings.SmtpServer)
            {
                Port = _emailSettings.Port,
                Credentials = new NetworkCredential(
                    _emailSettings.Username,
                    _emailSettings.Password),
                EnableSsl = true
            };

            using var mailMessage = new MailMessage
            {
                From = new MailAddress(_emailSettings.SenderEmail),
                Subject = $"Novo contato de {nome}",
                Body = $"Nome: {nome}\nEmail: {email}\nMensagem:\n{mensagem}",
                IsBodyHtml = false
            };

            mailMessage.To.Add(_emailSettings.ReceiverEmail);

            await smtpClient.SendMailAsync(mailMessage);
        }
    }
}