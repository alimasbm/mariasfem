@echo off
echo --- Iniciando deploy para o GitHub (Marias Store) ---
echo.

echo 1. Inicializando repositorio...
git init

echo.
echo 2. Adicionando arquivos...
git add .

echo.
echo 3. Criando commit inicial...
git commit -m "Primeiro commit: Marias Store"

echo.
echo 4. Renomeando branch para main...
git branch -M main

echo.
echo 5. Vinculando ao repositorio remoto...
git remote add origin https://github.com/alimasbm/mariasWeb.git

echo.
echo 6. Enviando arquivos (Push)...
git push -u origin main

echo.
echo --- Processo finalizado! ---
pause
