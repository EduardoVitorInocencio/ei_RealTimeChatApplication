import { app, BrowserWindow } from 'electron'; // Importa módulos essenciais do Electron
import path from 'path';                       // Importa módulo para manipulação de caminhos de arquivos
import { fileURLToPath } from 'url';           // Importa função para converter URL em path do arquivo

// Converte a URL do módulo atual para o caminho do arquivo (equivalente ao __filename do CommonJS)
const __filename = fileURLToPath(import.meta.url);
// Obtém o diretório do arquivo atual (equivalente ao __dirname do CommonJS)
const __dirname = path.dirname(__filename);

function createWindow() {
  // Cria uma nova janela do navegador (janela do app)
  const win = new BrowserWindow({
    width: 800,   // Largura da janela
    height: 600,  // Altura da janela
    webPreferences: {
      // Pré-carrega o arquivo preload.js, que pode expor APIs ao contexto do renderer
      preload: path.join(__dirname, 'preload.js'), // Se não tiver preload, pode remover essa linha

      // Habilita integração do Node.js no contexto do renderer (página carregada)
      nodeIntegration: true,

      // Desabilita isolamento de contexto para facilitar comunicação entre main e renderer
      contextIsolation: false,
    },
  });

  // Carrega o arquivo HTML da interface que está na pasta public
  win.loadFile('public/index.html');
}

// Quando o app estiver pronto, cria a janela
app.whenReady().then(() => {
  createWindow();
});
