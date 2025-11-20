# 🚀 Script de Instalação Rápida - RBEW Website

Write-Host "
╔═══════════════════════════════════════════════════════════╗
║                                                           ║
║  🌐 RB Entertainment Works - Website Setup                ║
║  Construindo Realidades desde 2015                       ║
║                                                           ║
╚═══════════════════════════════════════════════════════════╝
" -ForegroundColor Cyan

Write-Host "`n📦 Instalando dependências...`n" -ForegroundColor Yellow

# Verificar se o Node.js está instalado
if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
    Write-Host "❌ Node.js não está instalado!" -ForegroundColor Red
    Write-Host "Por favor, instale o Node.js de https://nodejs.org/`n" -ForegroundColor Yellow
    exit 1
}

Write-Host "✅ Node.js encontrado: $(node --version)" -ForegroundColor Green
Write-Host "✅ npm encontrado: $(npm --version)`n" -ForegroundColor Green

# Instalar dependências
Write-Host "📥 Instalando pacotes npm...`n" -ForegroundColor Cyan
npm install

if ($LASTEXITCODE -eq 0) {
    Write-Host "`n✅ Dependências instaladas com sucesso!`n" -ForegroundColor Green
    
    Write-Host "═══════════════════════════════════════════════════" -ForegroundColor Cyan
    Write-Host "🎉 Setup completo! Próximos passos:`n" -ForegroundColor Green
    Write-Host "  1️⃣  Iniciar servidor de desenvolvimento:" -ForegroundColor White
    Write-Host "     npm run dev`n" -ForegroundColor Yellow
    Write-Host "  2️⃣  Abrir no navegador:" -ForegroundColor White
    Write-Host "     http://localhost:3000`n" -ForegroundColor Yellow
    Write-Host "  3️⃣  Para build de produção:" -ForegroundColor White
    Write-Host "     npm run build" -ForegroundColor Yellow
    Write-Host "     npm start`n" -ForegroundColor Yellow
    Write-Host "═══════════════════════════════════════════════════`n" -ForegroundColor Cyan
    
    Write-Host "💡 Dica: Adicione suas imagens na pasta /public/images/`n" -ForegroundColor Magenta
    
    # Perguntar se quer iniciar o servidor
    $start = Read-Host "Deseja iniciar o servidor de desenvolvimento agora? (S/N)"
    if ($start -eq "S" -or $start -eq "s") {
        Write-Host "`n🚀 Iniciando servidor...`n" -ForegroundColor Green
        npm run dev
    }
} else {
    Write-Host "`n❌ Erro ao instalar dependências!`n" -ForegroundColor Red
    Write-Host "Tente executar manualmente: npm install`n" -ForegroundColor Yellow
    exit 1
}
