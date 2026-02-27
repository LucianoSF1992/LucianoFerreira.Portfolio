using System.ComponentModel.DataAnnotations;

namespace LucianoFerreira.Portfolio.ViewModels;

public class ContatoViewModel
{
    [Required(ErrorMessage = "O nome é obrigatório")]
    public string Nome { get; set; } = string.Empty;

    [Required(ErrorMessage = "O email é obrigatório")]
    [EmailAddress(ErrorMessage = "Email inválido")]
    public string Email { get; set; } = string.Empty;

    [Required(ErrorMessage = "A mensagem é obrigatória")]
    public string Mensagem { get; set; } = string.Empty;
}