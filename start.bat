
@echo off
title Draft Throne — Local Server
 
:: ── EDIT THIS LINE to your actual folder ──
set GAME_DIR=G:\draft
:: ──────────────────────────────────────────
 
if not exist "%GAME_DIR%" (
    echo ERROR: Folder not found: %GAME_DIR%
    echo.
    echo Edit start_server.bat and fix the GAME_DIR line at the top.
    pause
    exit /b
)
 
cd /d "%GAME_DIR%"
echo.
echo  Starting Draft Throne local server...
echo  Open: http://localhost:8080
echo  Press Ctrl+C to stop.
echo.
python -m http.server 8080
pause