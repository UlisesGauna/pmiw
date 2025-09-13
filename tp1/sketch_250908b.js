https://youtu.be/2HLoe_VAchQ
let referencia;
let cantidadCirculos = 20;

let colorR0, colorR1, colorR2, colorR3, colorR4, colorR5, colorR6, colorR7, colorR8, colorR9;
let colorR10, colorR11, colorR12, colorR13, colorR14, colorR15, colorR16, colorR17, colorR18, colorR19;
let colorR20, colorR21, colorR22, colorR23, colorR24, colorR25, colorR26, colorR27, colorR28, colorR29;

function preload() {
  referencia = loadImage("leparc.png");
}

function setup() {
  createCanvas(800, 400);
  noStroke();
  colores(cantidadCirculos);
}

function draw() {
  background(255);
  image(referencia, 0, 0, 400, 400);
  mostrarCirculos(600, 200, cantidadCirculos);
}

function mostrarCirculos(centroX, centroY, cantidad) {
  for (let i = cantidad; i > 0; i--) {
    let radio = i * (190 / cantidad);

    let r = 0;
    let g = 0;
    let b = 0;

    if (i % 7 === 0) {
      r = 255; g = 0; b = 0; // rojo
    } else if (i % 7 === 1) {
      r = 255; g = 127; b = 0; // naranja
    } else if (i % 7 === 2) {
      r = 255; g = 255; b = 0; // amarillo
    } else if (i % 7 === 3) {
      r = 0; g = 255; b = 0; // verde
    } else if (i % 7 === 4) {
      r = 0; g = 255; b = 255; // celeste
    } else if (i % 7 === 5) {
      r = 0; g = 0; b = 255; // azul
    } else {
      r = 139; g = 0; b = 255; // violeta
    }

    for (let j = 0; j < i; j++) {
      r = max(0, r - 8);
      g = max(0, g - 8);
      b = max(0, b - 5);
    }

    fill(r, g, b);
    ellipse(centroX, centroY, radio * 2, radio * 2);
  }
}

function colores(cantidad) {
  if (cantidad > 30) cantidad = 30;
  if (cantidad >= 1) colorR0 = color(random(1, 255), random(1, 200), random(1, 255));
  if (cantidad >= 2) colorR1 = color(random(1, 255), random(1, 200), random(1, 255));
  if (cantidad >= 3) colorR2 = color(random(1, 255), random(1, 200), random(1, 255));
  if (cantidad >= 4) colorR3 = color(random(1, 255), random(1, 200), random(1, 255));
  if (cantidad >= 5) colorR4 = color(random(1, 255), random(1, 200), random(1, 255));
  if (cantidad >= 6) colorR5 = color(random(1, 255), random(1, 200), random(1, 255));
  if (cantidad >= 7) colorR6 = color(random(1, 255), random(1, 200), random(1, 255));
  if (cantidad >= 8) colorR7 = color(random(1, 255), random(1, 200), random(1, 255));
  if (cantidad >= 9) colorR8 = color(random(1, 255), random(1, 200), random(1, 255));
  if (cantidad >= 10) colorR9 = color(random(1, 255), random(1, 200), random(1, 255));
  if (cantidad >= 11) colorR10 = color(random(1, 255), random(1, 200), random(1, 255));
  if (cantidad >= 12) colorR11 = color(random(1, 255), random(1, 200), random(1, 255));
  if (cantidad >= 13) colorR12 = color(random(1, 255), random(1, 200), random(1, 255));
  if (cantidad >= 14) colorR13 = color(random(1, 255), random(1, 200), random(1, 255));
  if (cantidad >= 15) colorR14 = color(random(1, 255), random(1, 200), random(1, 255));
  if (cantidad >= 16) colorR15 = color(random(1, 255), random(1, 200), random(1, 255));
  if (cantidad >= 17) colorR16 = color(random(1, 255), random(1, 200), random(1, 255));
  if (cantidad >= 18) colorR17 = color(random(1, 255), random(1, 200), random(1, 255));
  if (cantidad >= 19) colorR18 = color(random(1, 255), random(1, 200), random(1, 255));
  if (cantidad >= 20) colorR19 = color(random(1, 255), random(1, 200), random(1, 255));
  if (cantidad >= 21) colorR20 = color(random(1, 255), random(1, 200), random(1, 255));
  if (cantidad >= 22) colorR21 = color(random(1, 255), random(1, 200), random(1, 255));
  if (cantidad >= 23) colorR22 = color(random(1, 255), random(1, 200), random(1, 255));
  if (cantidad >= 24) colorR23 = color(random(1, 255), random(1, 200), random(1, 255));
  if (cantidad >= 25) colorR24 = color(random(1, 255), random(1, 200), random(1, 255));
  if (cantidad >= 26) colorR25 = color(random(1, 255), random(1, 200), random(1, 255));
  if (cantidad >= 27) colorR26 = color(random(1, 255), random(1, 200), random(1, 255));
  if (cantidad >= 28) colorR27 = color(random(1, 255), random(1, 200), random(1, 255));
  if (cantidad >= 29) colorR28 = color(random(1, 255), random(1, 200), random(1, 255));
  if (cantidad >= 30) colorR29 = color(random(1, 255), random(1, 200), random(1, 255));
}

function mouseMoved() {
  if (mouseX > 400) {
    let nuevaCantidad = int(map(mouseY, 0, height, 5, 30));
    if (nuevaCantidad !== cantidadCirculos) {
      cantidadCirculos = nuevaCantidad;
      colores(cantidadCirculos);
    }
  }
}

function keyPressed() {
  if (key === 'r') {
    cantidadCirculos = 20;
    colores(cantidadCirculos);
  }
}
