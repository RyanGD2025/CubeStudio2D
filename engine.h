#pragma once

#include <string>
#include <vector>
#include <SDL.h>

// Forward declaration para evitar inclusões circulares
class GameObject;

namespace CubeStudio2D {

class Engine {
public:
    // Singleton Pattern: Garante que só há uma instância da Engine
    static Engine& GetInstance() {
        static Engine instance;
        return instance;
    }

    // Inicialização e Loop
    bool Initialize(const std::string& title, int width, int height);
    void Run();
    void Shutdown();

    // Gerenciamento de Objetos
    void AddGameObject(GameObject* obj);
    
    // Funções de Scripting (Exposição básica ao Lua)
    void LoadScene(const std::string& sceneName);

private:
    // Construtor privado para o Singleton
    Engine() = default;
    ~Engine() = default;

    // Desabilitar cópia e atribuição
    Engine(const Engine&) = delete;
    Engine& operator=(const Engine&) = delete;

    // Funções internas do Loop
    void ProcessInput();
    void Update(float deltaTime);
    void Render();

    // Membros do SDL
    SDL_Window* m_window = nullptr;
    SDL_Renderer* m_renderer = nullptr;

    // Status
    bool m_isRunning = false;
    std::vector<GameObject*> m_gameObjects;
};

} // namespace CubeStudio2D
