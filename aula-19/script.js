function identificador() {
    var idade = parseInt(document.getElementById("idadeinput").value)
var resultado = document.getElementById("resultado")

if (idade < 0) {
resultado.textContent = "Erro"
} else if (idade > 0 && idade < 10) {
    resultado.textContent = "Você é uma criança"
} else if (idade > 9 && idade < 15) {
    resultado.textContent = "Você é um adolescente"
} else if (idade > 14 && idade < 20) {
resultado.textContent = "Você é um jovem" 
} else if (idade > 19 && idade < 60)   {
    resultado.textContent = "Você é um idoso"
}
}