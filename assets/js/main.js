/**
 * Dibuja un pingüino geométrico basado en una estructura de 32+ figuras.
 * @param {CanvasRenderingContext2D} ctx
 */
function drawPenguin(ctx) {

    // Limpia el canvas antes de dibujar
    ctx.clearRect(0, 0, 500, 500);

    const centerX = 250;
    const centerY = 250;

    // --- 1. PATAS ---
    ctx.fillStyle = "#FFB800";

    ctx.beginPath();
    ctx.roundRect(centerX - 90, centerY + 170, 80, 30, 15);
    ctx.fill();

    ctx.beginPath();
    ctx.roundRect(centerX + 10, centerY + 170, 80, 30, 15);
    ctx.fill();

    // --- 2. CUERPO ---
    ctx.fillStyle = "#222222";
    ctx.beginPath();
    ctx.ellipse(centerX, centerY + 60, 110, 130, 0, 0, Math.PI * 2);
    ctx.fill();

    // --- 3. ALAS ---
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

    // --- 4. VIENTRE ---
    ctx.fillStyle = "#FFFFFF";
    ctx.beginPath();
    ctx.ellipse(centerX, centerY + 80, 75, 100, 0, 0, Math.PI * 2);
    ctx.fill();

    // --- 5. CABEZA ---
    ctx.fillStyle = "#222222";
    ctx.beginPath();
    ctx.arc(centerX, centerY - 80, 85, 0, Math.PI * 2);
    ctx.fill();

    // --- 6. OJOS ---
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

    // --- 7. PICO ---
    ctx.fillStyle = "#FFD700";
    ctx.beginPath();
    ctx.moveTo(centerX - 35, centerY - 70);
    ctx.lineTo(centerX + 35, centerY - 70);
    ctx.lineTo(centerX, centerY - 10);
    ctx.closePath();
    ctx.fill();

    ctx.strokeStyle = "#E6A100";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(centerX - 30, centerY - 55);
    ctx.lineTo(centerX + 30, centerY - 55);
    ctx.stroke();

    // --- 8. SOMBRAS EXTRA ---
    ctx.fillStyle = "rgba(0,0,0,0.1)";
    for (let i = 0; i < 6; i++) {
        ctx.beginPath();
        ctx.ellipse(centerX - 75 + (i * 30), centerY + 185, 10, 5, 0, 0, Math.PI * 2);
        ctx.fill();
    }
    // hielitos
// --- Cubos de hielo (2 abajo + 1 arriba por lado) ---

ctx.strokeStyle = "#9ED8FF";
ctx.fillStyle = "rgba(180,220,255,0.4)";

const tamaño = 22;
const baseY = centerY + 175;

// ===== LADO IZQUIERDO =====
// Abajo izquierda
ctx.beginPath();
ctx.rect(centerX - 180, baseY, tamaño, tamaño);
ctx.fill();
ctx.stroke();

// Abajo derecha
ctx.beginPath();
ctx.rect(centerX - 150, baseY, tamaño, tamaño);
ctx.fill();
ctx.stroke();

// Arriba (centrado)
ctx.beginPath();
ctx.rect(centerX - 165, baseY - tamaño, tamaño, tamaño);
ctx.fill();
ctx.stroke();


// ===== LADO DERECHO =====
// Abajo izquierda
ctx.beginPath();
ctx.rect(centerX + 100, baseY, tamaño, tamaño);
ctx.fill();
ctx.stroke();

// Abajo derecha
ctx.beginPath();
ctx.rect(centerX + 130, baseY, tamaño, tamaño);
ctx.fill();
ctx.stroke();

// Arriba (centrado)
ctx.beginPath();
ctx.rect(centerX + 115, baseY - tamaño, tamaño, tamaño);
ctx.fill();
ctx.stroke();
}


/* ===========================
   INICIALIZACIÓN DEL CANVAS
=========================== */

document.addEventListener("DOMContentLoaded", () => {

    const canvas = document.getElementById("canvas");

    if (!canvas) {
        console.error("No se encontró el canvas con id='canvas'");
        return;
    }

    const ctx = canvas.getContext("2d");

    // Dibujar pingüino
    drawPenguin(ctx);

});