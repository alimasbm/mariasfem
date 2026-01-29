import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Servir arquivos estáticos da pasta 'dist' (build do Vite)
app.use(express.static(path.join(__dirname, 'dist')));

// Exemplo de rota de API
app.get('/api/status', (req, res) => {
    res.json({ status: 'online', message: 'Servidor Express rodando!' });
});

// Rota coringa para servir o index.html em caso de SPA
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
