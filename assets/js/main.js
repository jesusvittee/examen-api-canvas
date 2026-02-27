/**
 * ============================================================
 *  APLICACIÓN: Graficación con API Canvas - Pingüino Geométrico
 *  DESCRIPCIÓN:
 *  Dibujo de un pingüino construido mediante más de 30 figuras
 *  geométricas utilizando la API Canvas de HTML5 y JavaScript.
 *
 *  ASIGNATURA: Graficación
 *  DOCENTE: M.C PINEDO FERNANDEZ VICTOR MANUEL
 *  ALUMNO: Jesús Nicolás Vite
 *  MATRÍCULA: 241064039
 
 *
 *  TECNOLOGÍAS:
 *  - HTML5
 *  - CSS3
 *  - JavaScript
 *  - Boostrap
 *  - API Canvas 2D
 *
 *  FECHA: 2026
 * ============================================================
 */


/**
 * Dibuja un pingüino geométrico basado en una estructura
 * de múltiples figuras usando Canvas 2D.
 * @param {CanvasRenderingContext2D} ctx Contexto gráfico del canvas
 */
function drawPenguin(ctx) {

    // Limpia el canvas antes de dibujar
    ctx.clearRect(0, 0, 500, 500);

    // Coordenadas centrales de referencia
    const centerX = 250;
    const centerY = 250;

    /* =====================================================
       1. PATAS
    ===================================================== */
    ctx.fillStyle = "#FFB800";

    ctx.beginPath();
    ctx.roundRect(centerX - 90, centerY + 170, 80, 30, 15);
    ctx.fill();

    ctx.beginPath();
    ctx.roundRect(centerX + 10, centerY + 170, 80, 30, 15);
    ctx.fill();

    /* =====================================================
       2. CUERPO
    ===================================================== */
    ctx.fillStyle = "#222222";
    ctx.beginPath();
    ctx.ellipse(centerX, centerY + 60, 110, 130, 0, 0, Math.PI * 2);
    ctx.fill();

    /* =====================================================
       3. ALAS
    ===================================================== */
    ctx.save();
    ctx.translate(centerX - 100, centerY + 40);
    ctx.rotate(Math.PI / 4);
    ctx.beginPath();
    ctx.ellipse(0, 0, 25, 90, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    ctx.save();
    ctx.translate(centerX + 100, centerY + 40);
    ctx.rotate(-Math.PI / 4);
    ctx.beginPath();
    ctx.ellipse(0, 0, 25, 90, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    /* =====================================================
       4. VIENTRE
    ===================================================== */
    ctx.fillStyle = "#FFFFFF";
    ctx.beginPath();
    ctx.ellipse(centerX, centerY + 80, 75, 100, 0, 0, Math.PI * 2);
    ctx.fill();

    /* =====================================================
       5. CABEZA
    ===================================================== */
    ctx.fillStyle = "#222222";
    ctx.beginPath();
    ctx.arc(centerX, centerY - 80, 85, 0, Math.PI * 2);
    ctx.fill();

    /* =====================================================
       6. OJOS
    ===================================================== */
    const eyeY = centerY - 100;
    const eyeDist = 40;

    ctx.fillStyle = "#FFFFFF";
    ctx.beginPath();
    ctx.arc(centerX - eyeDist, eyeY, 25, 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(centerX + eyeDist, eyeY, 25, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "#000000";
    ctx.beginPath();
    ctx.arc(centerX - eyeDist, eyeY, 12, 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(centerX + eyeDist, eyeY, 12, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "#FFFFFF";
    ctx.beginPath();
    ctx.arc(centerX - eyeDist - 5, eyeY - 5, 4, 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(centerX + eyeDist - 5, eyeY - 5, 4, 0, Math.PI * 2);
    ctx.fill();


    /* =====================================================
    MOÑO DEL PINGÜINO (unido desde el centro)
    ===================================================== */

    const bowY = centerY - 5;

    // ----- TRIÁNGULO IZQUIERDO -----
    ctx.fillStyle = "#e53935";
    ctx.beginPath();
    ctx.moveTo(centerX - 50, bowY - 22); // esquina superior
    ctx.lineTo(centerX, bowY);            // punta EXACTA al centro
    ctx.lineTo(centerX - 50, bowY + 22); // esquina inferior
    ctx.closePath();
    ctx.fill();


    // ----- TRIÁNGULO DERECHO -----
    ctx.beginPath();
    ctx.moveTo(centerX + 50, bowY - 22);
    ctx.lineTo(centerX, bowY);            // misma conexión central
    ctx.lineTo(centerX + 50, bowY + 22);
    ctx.closePath();
    ctx.fill();


    // ----- CÍRCULO CENTRAL (une todo) -----
    ctx.fillStyle = "#c62828";
    ctx.beginPath();
    ctx.arc(centerX, bowY, 14, 0, Math.PI * 2);
    ctx.fill();
    /* =====================================================
       7. PICO
    ===================================================== */
  ctx.fillStyle = "#FFD700";

    /* ---- Pico superior ---- */
    ctx.beginPath();
    ctx.moveTo(centerX - 30, centerY - 40); // esquina izquierda abajo
    ctx.lineTo(centerX + 30, centerY - 40); // esquina derecha abajo
    ctx.lineTo(centerX, centerY - 65);     // punta arriba
    ctx.closePath();
    ctx.fill();

    /* ---- Pico inferior ---- */
    ctx.beginPath();
    ctx.moveTo(centerX - 30, centerY - 40);
    ctx.lineTo(centerX + 30, centerY - 40);
    ctx.lineTo(centerX, centerY - 15); // misma punta original
    ctx.closePath();
    ctx.fill();
     
    /* =====================================================
       7. PICO - interior
    ===================================================== */

    ctx.fillStyle = "#ff3300";
    /* ---- Pico superior interior  ---- */
    ctx.beginPath();
    ctx.moveTo(centerX - 20, centerY - 40); // esquina izquierda abajo
    ctx.lineTo(centerX + 20, centerY - 40); // esquina derecha abajo
    ctx.lineTo(centerX, centerY - 45);     // punta arriba
    ctx.closePath();
    ctx.fill();

    /* ---- Pico inferior interior ---- */
    ctx.beginPath();
    ctx.moveTo(centerX - 20, centerY - 40);
    ctx.lineTo(centerX + 20, centerY - 40);
    ctx.lineTo(centerX, centerY - 35); // misma punta original
    ctx.closePath();
    ctx.fill();


/* =====================================================
       8. SOMBRAS
    ===================================================== */
    ctx.fillStyle = "rgba(0,0,0,0.1)";
    for (let i = 0; i < 6; i++) {
        ctx.beginPath();
        ctx.ellipse(centerX - 75 + (i * 30), centerY + 185, 10, 5, 0, 0, Math.PI * 2);
        ctx.fill();
    }

  /* =====================================================
   9. CUBOS DE HIELO (3 base + 2 medio + 1 arriba)
    ===================================================== */
    ctx.strokeStyle = "#9ED8FF";
    ctx.fillStyle = "rgba(180,220,255,0.4)";

    const tamaño = 36;
    const separacion = 6;
    const subir = tamaño / 3;
    const baseY = centerY + 175 - subir;


    /* ========= LADO IZQUIERDO ========= */

    // ----- BASE (3 cubos) -----
    ctx.beginPath();
    ctx.rect(centerX - 200, baseY, tamaño, tamaño);
    ctx.fill(); ctx.stroke();

    ctx.beginPath();
    ctx.rect(centerX - 200 + tamaño + separacion, baseY, tamaño, tamaño);
    ctx.fill(); ctx.stroke();



    // ----- MEDIO (2 cubos) -----
    ctx.beginPath();
    ctx.rect(centerX - 200 + (tamaño + separacion)/2, baseY - tamaño, tamaño, tamaño);
    ctx.fill(); ctx.stroke();
  

    /* ========= LADO DERECHO ========= */

    // ----- BASE (3 cubos) -----
    ctx.beginPath();
    ctx.rect(centerX + 100, baseY, tamaño, tamaño);
    ctx.fill(); ctx.stroke();

    ctx.beginPath();
    ctx.rect(centerX + 100 + tamaño + separacion, baseY, tamaño, tamaño);
    ctx.fill(); ctx.stroke();

    ctx.beginPath();
    ctx.rect(centerX + 100 + (tamaño + separacion)*2, baseY, tamaño, tamaño);
    ctx.fill(); ctx.stroke();


    // ----- MEDIO (2 cubos) -----
    ctx.beginPath();
    ctx.rect(centerX + 100 + (tamaño + separacion)/2, baseY - tamaño, tamaño, tamaño);
    ctx.fill(); ctx.stroke();

    ctx.beginPath();
    ctx.rect(centerX + 100 + (tamaño + separacion)*1.5, baseY - tamaño, tamaño, tamaño);
    ctx.fill(); ctx.stroke();


    // ----- ARRIBA (1 cubo) -----
    ctx.beginPath();
    ctx.rect(centerX + 100 + (tamaño + separacion), baseY - tamaño*2, tamaño, tamaño);
    ctx.fill(); ctx.stroke();
}


/* ============================================================
   INICIALIZACIÓN DEL CANVAS
============================================================ */
document.addEventListener("DOMContentLoaded", () => {

    const canvas = document.getElementById("canvas");

    if (!canvas) {
        console.error("No se encontró el canvas con id='canvas'");
        return;
    }

    const ctx = canvas.getContext("2d");

    // Renderiza el pingüino al cargar la página
    drawPenguin(ctx);
});