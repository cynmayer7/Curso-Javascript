console.log("Hello, World!")

//Codigo del cuadrado
console.group("Cuadrados");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perímetroCuadrado(lado) {
    return lado * 4;
}
//console.log("El perímetro del cuadrado es: " + perímetroCuadrado + "cm");

function áreaCuadrado(lado) {
    return lado * lado;
}
//console.log("El área del cuadrado es: " + áreaCuadrado + "cm^2");
console.groupEnd();

// Codigo del triangulo
console.group("Triangulos");
//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;
//const alturaTriangulo = 5.5;
//console.log(
    //"Los lados del triángulo miden: "
    //+ ladoTriangulo1
    //+ "cm, "
    //+ ladoTriangulo2
    //+ "cm, "
    //+ baseTriangulo
    //+ "cm"
//);


//console.log("La altura del triangulo es de: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}
//console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
//console.log("El área del triangulo es: " + areaTriangulo + "cm^2");

console.groupEnd();

// Codigo del Circulo
console.group("Círculos");

// Radio
//const radioCirculo = 4;
//console.log("El radio del círculo es: " + radioCirculo + "cm");

// Diámetro
function diametroCirculo(radio) {
    return radio * 2;
}

//console.log("El diámetro del círculo es: " + diametroCirculo + "cm");

// PI
const PI = Math.PI;
console.log("PI es: " + PI);

// Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
//const perimetroCirculo = diametroCirculo * PI;
//console.log("El perímetro del círculo es: " + perimetroCirculo + "cm");

// Área
//const areaCirculo = (radioCirculo * radioCirculo) * PI;
function areaCirculo(radio) {
    return (radio * radio) * PI;
}
//console.log("El área del círculo es: " + areaCirculo + "cm^2");

console.groupEnd();

//Aqui interactuamos con HTML

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perímetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = áreaCuadrado(value);
    alert(area);
}
//TRIANGULO 

function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("InputTriangulo1");
    const value1 = Number(input1.value);
    const input2 = document.getElementById("InputTriangulo2");
    const value2 = Number(input2.value);
    const base = document.getElementById("InputBaseTriangulo");
    const value3 = Number(base.value);
    const perimetro = perimetroTriangulo(value1,value2,value3);
    alert("El perimetro del triangulo es: " + perimetro);
}

function calcularAreaTriangulo(){
    const input1 = document.getElementById("InputTriangulo1");
    const value1 = Number(input1.value);
    const input2 = document.getElementById("InputTriangulo2");
    const value2 = Number(input2.value);
    const base = document.getElementById("InputBaseTriangulo");
    const value3 = Number(base.value);
    const area = areaTriangulo(value1,value2,value3);
    alert("El area del triangulo es: " + area);
}

function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const perimetro = perimetroCirculo(value);
    alert("El perimetro del circulo es: " + perimetro);
}
function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const area = areaCirculo(value);
    alert("El area del circulo es: " + area);
}