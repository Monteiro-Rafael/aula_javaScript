function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar!</b>";
    //alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://github.com/Monteiro-Rafael");
    window.location.href = "https://github.com/Monteiro-Rafael";
}

function trocar(){
    document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    alert("trocar texto");
}

function voltar(){
    document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("pagina carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);

}


// function soma (n1, n2){
//     return n1 + n2;
// }


// function validaIdade(idade){
//     var validar;
//     if (idade >= 18){
//         validar = true;
//     } else {
//         validar = false;
//     }
    
//     return validar;
    
// }

// var idade = prompt("Qual a sua idade?");
// console.log(validaIdade(idade));

// function setReplace(frase, nome, novo_nome){
//     return frase.replace(nome, novo_nome);
// }
//alert(soma(5, 10));
//alert(setReplace("vai Japão", "Japão", "Brasil"));


// var lista = ["Alemanha", "Inglaterra", "Escócia"];
// lista.push("Polônia");
// lista.pop("Inglaterra");
// alert(lista);



// var d = new Date();
// alert(d.getDay());
// alert(d.getHours());
// alert(d.getMonth()+1);
// alert(d.getFullYear());



// var count;
// for (count=0; count<=5; count++){
//     alert(count);
// };


// while (count < 5){
//     console.log(count);
//     alert(count);
//     count++;
// }


// var idade = prompt("Qual a sua idade?");
// if (idade >= 18) {
//     alert("maior de idade");
// } else {
//     alert("menor de idade");
// }



// var frutas = [{nome: "maça", cor: "vermelha"}, {nome: "uva", cor: "roxa"}]
// console.log(frutas.nome);
// alert(frutas.cor);
// var fruta = {nome: "maça", cor: "vermelha"}
// console.log(fruta.nome);
// alert(fruta.cor);



// var lista = ["maça", "pera", "laranja"];
// lista.push("uva");
// lista.pop();
// console.log(lista[1]);
// console.log(lista.length());
// console.log(lista.reserse());
// console.log(lista.join(" "));
// console.log(lista.toString()[0]);




// var nome = "Rafael Monteiro";
// var idade = 29;
// var idade2 = 10;
// var frase = "Japão é o melhor time do mundo";
// alert(nome + " tem " + idade + " anos.");
// alert(idade + idade2);
// console.log(nome);
// console.log(idade + idade2);
// console.log(frase.replace("Japão", "Brasil"));
// alert(frase.replace("Japão", "Brasil"));