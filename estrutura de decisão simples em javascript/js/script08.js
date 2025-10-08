let idade = prompt("digite um valor para a sua idade")

let mensagem = (idade <16) ? "não pode votar":(idade <18) ? "voto opcional":"voto obrigatorio"
alert(mensagem)