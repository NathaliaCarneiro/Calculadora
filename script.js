function calcularMedia() { 
  var confimacao = confirm("Deseja calcular a média?");
  while (confirm) {
    alert ('Digite as 3 notas do aluno');
  



    var nota1 = prompt('Digite a primeira nota:');
    var nota2 = prompt('Digite a segunda nota:');
    var nota3 = prompt('Digite a terceira nota:');

    let n1 = parseFloat(nota1);
    let n2 = parseFloat(nota2);
    let n3 = parseFloat(nota3);

    var soma = n1 + n2 + n3;
    var media = soma / 3;

    alert (media.toFixed(2));
    var res=document.getElementById("res");
    res.innerHTML=media.toFixed(2);
    confimacao = confirm("Deseja calcular a média?");
  }
}
