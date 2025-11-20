# 🎨 Guia de Personalização - RBEW Website

## 📸 Adicionando Imagens

### Estrutura de Pastas Recomendada

Crie a seguinte estrutura na pasta `public`:

```
public/
├── images/
│   ├── logo/
│   │   ├── RBEW_logo.jpg
│   │   └── rbew-icon.png
│   ├── projects/
│   │   ├── realism-hit-rp.jpg
│   │   ├── framestate-rp.jpg
│   │   ├── pendant-legacy.jpg
│   │   ├── time-police.jpg
│   │   └── virtual-guardians.jpg
│   ├── team/
│   │   ├── alissa.jpg
│   │   └── reyanne.jpg
│   └── backgrounds/
│       ├── hero-bg.jpg
│       └── cta-bg.jpg
└── favicon.ico
```

### Como Adicionar Imagens nos Componentes

#### Usando Next.js Image Component:

```tsx
import Image from 'next/image';

<Image
  src="/images/logo/RBEW_logo.jpg"
  alt="RBEW Logo"
  width={200}
  height={200}
  className="rounded-lg"
/>
```

## 🎨 Cores e Tema

### Paleta de Cores Atual

Edite `tailwind.config.ts` para personalizar:

```typescript
colors: {
  primary: {
    // Azul - Cor principal
    500: '#0ea5e9',
    600: '#0284c7',
  },
  accent: {
    // Roxo/Rosa - Cor de destaque
    500: '#d946ef',
    600: '#c026d3',
  },
}
```

### Gradientes Disponíveis

- `from-primary-600 to-accent-600` - Gradiente principal
- `from-blue-500 to-cyan-500` - Realism Hit RP
- `from-green-500 to-emerald-500` - FrameState RP
- `from-purple-500 to-pink-500` - Pendant Legacy
- `from-orange-500 to-red-500` - Time Police

## 📝 Editando Conteúdo

### Página Inicial (`src/app/page.tsx`)

Os componentes são modulares. Para editar:

1. **Hero Section** - `src/components/Hero.tsx`
   - Título principal
   - Subtítulo
   - Botões CTA

2. **About Section** - `src/components/About.tsx`
   - História da RBEW
   - Missão e visão

3. **Services** - `src/components/Services.tsx`
   - Serviços oferecidos

### Projetos

#### Adicionar Novo Projeto

Edite `src/app/projetos/page.tsx`:

```tsx
{
  title: 'Nome do Projeto',
  category: 'Categoria',
  description: 'Descrição do projeto...',
  icon: IconName, // Importe de lucide-react
  gradient: 'from-color-500 to-color-500',
  href: '/projetos/slug-do-projeto',
  status: 'Status do Projeto',
  tags: ['Tag1', 'Tag2', 'Tag3'],
}
```

#### Criar Página de Projeto Individual

1. Crie pasta: `src/app/projetos/[slug]/`
2. Adicione `page.tsx`:

```tsx
export default function ProjetoPage() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      {/* Conteúdo do projeto */}
    </div>
  );
}
```

## 🔧 Configurações

### SEO e Metadata

Edite `src/app/layout.tsx`:

```tsx
export const metadata: Metadata = {
  title: "Seu Título",
  description: "Sua descrição",
  keywords: ["palavra1", "palavra2"],
};
```

### Links de Navegação

Edite `src/components/Header.tsx`:

```tsx
const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Novo Link', href: '/novo-link' },
  // ...
];
```

### Links do Footer

Edite `src/components/Footer.tsx`:

```tsx
const footerLinks = {
  projects: [
    { name: 'Projeto 1', href: '/link' },
    // ...
  ],
};
```

### Redes Sociais

Adicione seus links em `src/components/Footer.tsx`:

```tsx
const socialLinks = [
  { name: 'Discord', icon: Mail, href: 'SEU_LINK_DISCORD' },
  { name: 'Twitter', icon: Twitter, href: 'SEU_LINK_TWITTER' },
  // ...
];
```

## 🎭 Animações

### Framer Motion Básico

```tsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Conteúdo animado
</motion.div>
```

### Animações ao Scroll

```tsx
<motion.div
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  Conteúdo
</motion.div>
```

## 📱 Responsividade

### Breakpoints do Tailwind

- `sm:` - 640px (mobile landscape)
- `md:` - 768px (tablet)
- `lg:` - 1024px (desktop)
- `xl:` - 1280px (large desktop)
- `2xl:` - 1536px (extra large)

### Exemplo de Uso

```tsx
<div className="text-base sm:text-lg md:text-xl lg:text-2xl">
  Texto responsivo
</div>
```

## 🌙 Dark Mode

O dark mode está configurado automaticamente. Use as classes:

```tsx
<div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
  Conteúdo com suporte a dark mode
</div>
```

## 🚀 Deploy

### Vercel (Recomendado)

1. Crie conta em [vercel.com](https://vercel.com)
2. Conecte seu repositório GitHub
3. Deploy automático!

Ou via CLI:

```powershell
npm i -g vercel
vercel
```

### Netlify

1. Crie conta em [netlify.com](https://netlify.com)
2. Conecte repositório
3. Build command: `npm run build`
4. Publish directory: `.next`

### Variáveis de Ambiente

Crie `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=https://seusite.com
NEXT_PUBLIC_CONTACT_EMAIL=contato@seusite.com
```

## 📧 Formulário de Contato

Para tornar o formulário funcional, você pode usar:

1. **Formspree** (mais simples)
2. **EmailJS**
3. **SendGrid**
4. **API Route do Next.js**

Exemplo com Formspree:

```tsx
<form action="https://formspree.io/f/SEU_ID" method="POST">
  {/* campos do formulário */}
</form>
```

## 🔍 Google Analytics

Adicione em `src/app/layout.tsx`:

```tsx
<Script
  src="https://www.googletagmanager.com/gtag/js?id=GA_ID"
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_ID');
  `}
</Script>
```

## 💡 Dicas Extras

### Performance

1. Otimize imagens antes de adicionar
2. Use WebP quando possível
3. Lazy loading automático com Next.js Image

### Acessibilidade

1. Use alt text em todas as imagens
2. Mantenha contraste adequado
3. Estrutura semântica HTML

### SEO

1. Adicione sitemap.xml
2. Configure robots.txt
3. Use metadata adequado em cada página

---

**Precisa de ajuda?** Consulte a [documentação do Next.js](https://nextjs.org/docs) ou [Tailwind CSS](https://tailwindcss.com/docs)
