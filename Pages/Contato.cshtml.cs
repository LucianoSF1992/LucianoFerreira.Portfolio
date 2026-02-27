using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using LucianoFerreira.Portfolio.ViewModels;
using LucianoFerreira.Portfolio.Services;

namespace LucianoFerreira.Portfolio.Pages;

public class ContatoModel : PageModel
{
    private readonly IEmailService _emailService;

    public ContatoModel(IEmailService emailService)
    {
        _emailService = emailService;
    }

    [BindProperty]
    public ContatoViewModel Contato { get; set; } = new();

    [TempData]
    public string? MensagemSucesso { get; set; }

    public async Task<IActionResult> OnPostAsync()
    {
        if (!ModelState.IsValid)
        {
            return Page();
        }

        try
        {
            await _emailService.SendEmailAsync(
                Contato.Nome,
                Contato.Email,
                Contato.Mensagem
            );
        }
        catch (Exception ex)
        {
            ModelState.AddModelError(string.Empty, ex.Message);
            return Page();
        }

        MensagemSucesso = "Mensagem enviada com sucesso!";
        return RedirectToPage();
    }
}