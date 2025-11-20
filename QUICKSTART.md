# 🚀 INÍCIO RÁPIDO - RBEW Website

## ⚡ Instalação Rápida (PowerShell)

```powershell
# Execute o script de instalação
.\setup.ps1
```

## 📦 Instalação Manual

### Pré-requisitos

- Node.js 18+ ([Download aqui](https://nodejs.org/))
- npm, yarn ou pnpm

### Passo 1: Instalar Dependências

```powershell
npm install
```

### Passo 2: Executar Servidor de Desenvolvimento

```powershell
npm run dev
```

### Passo 3: Abrir no Navegador

```
http://localhost:3000
```

## 🎯 Comandos Disponíveis

```powershell
# Desenvolvimento
npm run dev          # Inicia servidor de desenvolvimento (localhost:3000)

# Produção
npm run build        # Cria build otimizado
npm start            # Inicia servidor de produção

# Qualidade
npm run lint         # Verifica erros de código
```

## 📁 Estrutura Básica

```
src/
├── app/              # Páginas e rotas
│   ├── layout.tsx    # Layout principal
│   ├── page.tsx      # Página inicial
│   ├── projetos/     # Seção de projetos
│   └── globals.css   # Estilos globais
│
└── components/       # Componentes reutilizáveis
    ├── Header.tsx    # Navegação
    ├── Footer.tsx    # Rodapé
    ├── Hero.tsx      # Seção hero
    └── ...
```

## 🎨 Próximos Passos

### 1. Adicionar Imagens

Crie a pasta `public/images/` e adicione suas imagens:

```
public/
└── images/
    ├── logo/
    ├── projects/
    └── team/
```

### 2. Personalizar Conteúdo

Edite os arquivos em `src/components/` para personalizar:
- Textos
- Links
- Cores
- Animações

### 3. Adicionar Páginas

Para criar uma nova página, crie uma pasta em `src/app/`:

```
src/app/nova-pagina/
└── page.tsx
```

### 4. Configurar Redes Sociais

Edite `src/components/Footer.tsx` e adicione seus links

## 🚀 Deploy

### Opção 1: Vercel (Recomendado)

```powershell
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Opção 2: Netlify

1. Conecte seu repositório GitHub
2. Build command: `npm run build`
3. Publish directory: `.next`

## 📚 Documentação

- [README.md](README.md) - Documentação completa
- [CUSTOMIZATION.md](CUSTOMIZATION.md) - Guia de personalização detalhado
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

## ❓ Problemas Comuns

### Erro ao instalar dependências

```powershell
# Limpar cache e reinstalar
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json
npm install
```

### Porta 3000 em uso

```powershell
# Usar outra porta
npm run dev -- -p 3001
```

### Build falha

```powershell
# Verificar erros
npm run lint

# Limpar cache Next.js
Remove-Item -Recurse -Force .next
npm run build
```

## 📧 Suporte

Contatos oficiais RBEW:
- **Alissa M.R. Eldridge**: alissarobbin2015@gmail.com
- **ReyAnne**: reyannaudio@gmail.com

## 🌟 Features Implementadas

✅ Design moderno e responsivo
✅ Dark mode automático  
✅ Animações suaves (Framer Motion)
✅ SEO otimizado
✅ Performance otimizada
✅ Componentes modulares
✅ TypeScript
✅ Tailwind CSS 3

## 🔜 Próximas Implementações

- [ ] Formulário de contato funcional
- [ ] Páginas individuais de projetos
- [ ] Blog/Notícias
- [ ] Galeria de imagens
- [ ] Sistema de busca
- [ ] Internacionalização (PT/EN)

---

**Construindo realidades desde 2015** ✨

Para mais detalhes, consulte [README.md](README.md) e [CUSTOMIZATION.md](CUSTOMIZATION.md)
