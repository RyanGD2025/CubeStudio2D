// game.js - Demonstração de uso da Cube Studio 2D

// 1. Cria um objeto que herda da classe base da engine
class PlayerCube extends GameObject {
    constructor(x, y, size, color) {
        super(x, y);
        this.size = size;
        this.color = color;
        this.speed = 100; // Pixels por segundo
    }

    // Sobrescreve a função update() para adicionar movimento
    update(deltaTime) {
        // Move o cubo para a direita
        this.x += this.speed * deltaTime;

        // Verifica o limite da tela para 'loop'
        if (this.x > 800) {
            this.x = -this.size; // Volta para a esquerda
        }
    }

    // Sobrescreve a função render() para desenhar um cubo
    render(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.size, this.size);
    }
}

// 2. Inicializa a Engine
const game = new CubeStudio2D_Engine('gameCanvas', 800, 600);

// 3. Cria e adiciona o objeto PlayerCube
const player = new PlayerCube(50, 250, 50, 'lightblue');
game.addObject(player);

// 4. Inicia o Loop do Jogo
game.start();
