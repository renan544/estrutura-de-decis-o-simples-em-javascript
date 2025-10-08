let idade = prompt("digite a sua expressa em anos :")

if (idade < 16) {
    alert("não pode votar")
} else 
    if (idade < 18) {
        alert("voto opcional")
    } else {
        alert("voto obrigatorio")
    }

