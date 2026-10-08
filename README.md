# Luiz Filipe Linhares — Portfólio

Portfólio profissional de Luiz Filipe Linhares: Engenharia de Software, desenvolvimento
full-stack, automação de testes e práticas de DevOps (CI/CD, Docker, GitHub Actions).

**Stack:** React 19 · TypeScript · Vite · Tailwind CSS 4 · Framer Motion

## Rodando localmente

**Pré-requisito:** Node.js 20+

```bash
npm install
npm run dev
```

O site abre em `http://localhost:3000`.

## Build de produção

```bash
npm run build
```

Gera os arquivos finais em `dist/`. Para conferir localmente como fica o build:

```bash
npm run preview
```

## Deploy no GitHub Pages

Este projeto já vem com um pipeline de CI/CD pronto em
`.github/workflows/deploy.yml`: toda vez que você der `git push` na branch
`main`, o GitHub Actions builda o projeto e publica o resultado automaticamente
no GitHub Pages.

**Passo a passo (uma vez só):**

1. Suba este projeto para um repositório no GitHub.
2. No repositório, vá em **Settings → Pages**.
3. Em **Source**, selecione **GitHub Actions** (em vez de "Deploy from a branch").
4. Pronto — o próximo `git push` na `main` já aciona o build e o deploy.

**Importante:** como este é um app Vite (não HTML puro), ele precisa ser
*buildado* antes de ir para o ar — por isso o deploy acontece via Actions, e
não simplesmente subindo os arquivos `.tsx` direto no Pages.

### Ajustando o caminho base

Em `vite.config.ts`, a constante `BASE_PATH` define o caminho em que o site
vai ser servido:

- Repositório `portifolioluizlinhares` → `https://<usuario>.github.io/portifolioluizlinhares/`
  → mantenha `BASE_PATH = '/portifolioluizlinhares/'`.
- Repositório `<usuario>.github.io` (o site raiz da sua conta) ou um domínio
  próprio → troque para `BASE_PATH = '/'`.

## Editando o conteúdo

Quase todo o conteúdo do site (nome, bio, skills, projetos, certificações,
TCC, trajetória) fica centralizado em um único arquivo:

```
src/data/portfolioData.ts
```

Edite os objetos `PERSONAL_INFO`, `ABOUT_DETAILS`, `SKILL_GROUPS`, `PROJECTS`,
`TIMELINE`, `CERTIFICATIONS` e `TCC_CASE_STUDY` ali — os componentes em
`src/components/` consomem esses dados automaticamente, sem precisar editar
JSX na maioria dos casos.

### Adicionando sua foto

Em `PERSONAL_INFO.photoUrl` (em `portfolioData.ts`), insira a URL da sua
foto (um link público, ou um caminho para um arquivo colocado em `public/`).
Enquanto estiver vazio, o Hero mostra um placeholder elegante no lugar.

### Formulário de contato

Como este é um site estático (sem backend), o formulário em "Contato" abre o
cliente de e-mail do visitante com os campos já preenchidos (via `mailto:`),
em vez de enviar algo direto por um servidor. Se no futuro você quiser um
envio "silencioso" sem abrir o cliente de e-mail, dá para integrar um serviço
como Formspree ou Web3Forms — me avise se quiser ajuda com isso.

## Estrutura do projeto

```
├── .github/workflows/deploy.yml   # pipeline de CI/CD (build + deploy no Pages)
├── index.html                     # meta tags, SEO, JSON-LD
├── src/
│   ├── data/portfolioData.ts      # todo o conteúdo do site
│   ├── types/portfolio.ts         # tipos TypeScript dos dados
│   ├── components/                # seções e componentes de UI
│   │   └── ui/                    # componentes de base (Button, Section, SkillBadge)
│   ├── App.tsx
│   └── main.tsx
├── vite.config.ts
└── package.json
```

## Segurança

Auditoria realizada no código e nas dependências:

- **Sem segredos no repositório**: nenhuma chave de API, token ou senha (o `.gitignore` também bloqueia `.env*`).
- **Sem vetores de XSS**: não há `dangerouslySetInnerHTML`, `eval`, `innerHTML` nem scripts inline.
- **Links externos protegidos**: todo `target="_blank"` usa `rel="noopener noreferrer"` (evita *reverse tabnabbing*).
- **Formulário de contato**: os campos são codificados com `encodeURIComponent` antes de montar o `mailto:`, evitando injeção de parâmetros/cabeçalhos.
- **Dependências**: `npm audit` sem vulnerabilidades conhecidas.
- **CI/CD com privilégio mínimo**: o workflow só pede `contents: read`, `pages: write` e `id-token: write`.
- **Sem sourcemaps** no build de produção.
- **Content-Security-Policy** via `<meta>` no `index.html` (vale em qualquer host, inclusive GitHub Pages): scripts apenas do próprio domínio, sem `unsafe-eval`, sem iframes/objects.
- **Headers HTTP completos** em `public/_headers` (X-Frame-Options, HSTS, nosniff, Permissions-Policy, CSP com `frame-ancestors`).

> **Limitação do GitHub Pages:** ele não permite headers HTTP customizados, então o `_headers`
> é ignorado lá e o site fica sem proteção contra *clickjacking* (X-Frame-Options/`frame-ancestors`)
> e sem HSTS próprio (o GitHub já força HTTPS). Na **Cloudflare Pages** o `_headers` é aplicado
> automaticamente.
>
> **Nota sobre a CSP:** `style-src` mantém `'unsafe-inline'` porque o Framer Motion aplica estilos
> inline para animar. Scripts continuam estritos (`'self'`).
>
> Se um dia adicionar analytics, fontes ou imagens de outros domínios, será preciso liberá-los na CSP
> (`index.html` e `public/_headers`), senão o navegador vai bloqueá-los.

## Licença

Distribuído sob a licença MIT — veja [LICENSE](LICENSE).
