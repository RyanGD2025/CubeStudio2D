// CubeStudio2D.js - O Coração da Engine

class CubeStudio2D_Engine {
    constructor(canvasId, width, height) {
        this.canvas = document.getElementById(canvasId);
        this.canvas.width = width;
        this.canvas.height = height;
        this.ctx = this.canvas.getContext('2d');
        this.gameObjects = [];
        this.lastTime = 0;
        this.isRunning = false;
        console.log("Cube Studio 2D 1.0.0 Inicializado.");
    }

    // Adiciona um objeto para ser atualizado e desenhado
    addObject(gameObject) {
        this.gameObjects.push(gameObject);
    }

    // O Loop Principal do Jogo
    gameLoop(currentTime) {
        if (!this.isRunning) return;

        // Calcula o tempo Delta (o tempo que passou desde o último frame)
        // Isso é crucial para que a velocidade do jogo seja consistente em diferentes PCs.
        const deltaTime = (currentTime - this.lastTime) / 1000; // Tempo em segundos
        this.lastTime = currentTime;

        // 1. Atualizar
        this.update(deltaTime);

        // 2. Desenhar
        this.render();

        // Pede ao navegador para chamar gameLoop no próximo quadro
        requestAnimationFrame(this.gameLoop.bind(this));
    }

    update(deltaTime) {
        // Itera sobre todos os objetos e chama sua função update
        this.gameObjects.forEach(obj => obj.update(deltaTime));
    }

    render() {
        // Limpa a tela
        this.ctx.fillStyle = '#1e1e1e'; // Cor de fundo
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        // Itera sobre todos os objetos e chama sua função render
        this.gameObjects.forEach(obj => obj.render(this.ctx));
    }

    start() {
        this.isRunning = true;
        this.lastTime = performance.now();
        requestAnimationFrame(this.gameLoop.bind(this));
    }

    stop() {
        this.isRunning = false;
    }
}

// Classe base para todos os objetos no jogo
class GameObject {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }

    // Deve ser sobrescrito pelas classes filhas
    update(deltaTime) {
        // Lógica de atualização (movimento, física, etc.)
    }

    // Deve ser sobrescrito pelas classes filhas
    render(ctx) {
        // Lógica de desenho
    }
}
