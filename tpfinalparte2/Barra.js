class Barra {
  constructor() {
    this.mostrarRojo = false;
  }

  dibujar(puntaje, meta) {
    let barraX = 380;
    let barraY = 35;
    let barraAncho = 200;
    let barraAlto = 20;

    let progreso = puntaje / meta;
    progreso = constrain(progreso, 0, 1);

    let anchoRelleno = barraAncho * progreso;

    push();
    noStroke();
    fill(50);
    rect(barraX, barraY, barraAncho, barraAlto, 5);

    fill(this.mostrarRojo ? color(255, 0, 0) : color(0, 255, 0));
    rect(barraX, barraY, anchoRelleno, barraAlto, 5);
    pop();
  }
}
