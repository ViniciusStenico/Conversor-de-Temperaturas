function converter() {
  var valorElemento = document.getElementById("valor");
  var escE = document.getElementById("escalaEntrada").value;
  var escS = document.getElementById("escalaSaida").value;
  var valor = valorElemento.value;
  if (escE == "klv" && escS == "klv") {
    var resultado = valor * 1;
  } else if (escE == "klv" && escS == "cls") {
    var resultado = valor - 273;
  } else if (escE == "klv" && escS == "fhr") {
    var resultado = (valor - 273) * 1.8 + 32;
  } else if (escE == "cls" && escS == "cls") {
    var resultado = valor * 1;
  } else if (escE == "cls" && escS == "klv") {
    var resultado = valor * 1 + 273;
  } else if (escE == "cls" && escS == "fhr") {
    var resultado = valor * 1.8 + 32;
  } else if (escE == "fhr" && escS == "fhr") {
    var resultado = valor * 1;
  } else if (escE == "fhr" && escS == "klv") {
    var resultado = (valor - 32) * (5 / 9) + 273;
  } else if (escE == "fhr" && escS == "cls") {
    var resultado = (valor - 32) * (5 / 9);
  } else {
    var resultado = "Escolha alguma escala";
  }

  if (escS == "klv") {
    var resposta = "A temperatura é " + resultado + " Kelvin";
    r1.innerHTML = resposta;
  } else if (escS == "cls") {
    var resposta = "A temperatura é " + resultado + "º Celsius";
    r1.innerHTML = resposta;
  } else if (escS == "fhr") {
    var resposta = "A temperatura é " + resultado + "º Fahrenheit";
    r1.innerHTML = resposta;
  } else {
    var resposta = resultado;
    r1.innerHTML = resposta;
  }
}
//developedBy: Vinicius Stenico
//Linkedin: https://www.linkedin.com/in/vinicius-stenico/
//Instagram: @v_stenico
// <(')_
//  (  3)
//   Y Y