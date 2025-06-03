function calcularidade()
{
    var dia = parseInt(document.getElementById("dia").value)
    var mes = parseInt(document.getElementById("mes").value)
    var ano = parseInt(document.getElementById("ano").value)

    var datanascimento = new Date(ano, mes - 1, dia);

    var hoje = new Date();
     
    var idade = hoje.getFullYear() - datanascimento.getFullYear();
     var mesatual = hoje.getMonth();

     var diaatual = hoje.getDate();

if (
    mesatual < datanascimento.getMonth() || (mesatual === datanascimento.getMonth() && diaatual < datanascimento.getDate())
    )
    {
        idade--;
    }
document.getElementById("falaridade").innerHTML = "Você tem: " + idade + " anos";
}

function calcular()
{
    var valor1 = parseInt(document.getElementById("numero1").value)
        var valor2 = parseInt(document.getElementById("numero2").value)
            var operacao = (document.getElementById("operacao").value)
var resultadocalc

switch(operacao){
    case "+":
    resultadocalc = valor1 + valor2;
    break;
    
    case "-":
        resultadocalc = valor1 - valor2;
        break;

        case "*":
            resultadocalc = valor1 * valor2;
            break;

        case "/":
            if (valor2 !== 0){
            resultadocalc = valor1 / valor2}
            else {
                resultadocalc = "Operação Inválida";
            }
}
document.getElementById("resultado").innerHTML = "o resultado é " + resultadocalc;
}