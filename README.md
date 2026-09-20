# Sales Coach — site

Landing page do Sales Coach. O site inteiro vive em `index.html`: markup, CSS e
JavaScript no mesmo arquivo, sem framework e sem dependência de runtime.

## Rodar

```sh
npm install
npm run dev      # http://localhost:8080
```

## Build

```sh
npm run build    # gera dist/
```

O build só copia `index.html` e `public/assets/` para `dist/`. Não há
transpilação nem bundling — o Vite está aqui para dar ao projeto um comando de
build previsível, que é o que as hospedagens esperam.

## Publicar

- **Cloudflare Pages / Netlify / Vercel**: build `npm run build`, saída `dist`.
- **Hospedagem comum (cPanel, FTP)**: `npm run build` e suba o conteúdo de
  `dist/` para a raiz do domínio. Ou suba `index.html` e `public/assets/`
  direto, renomeando `public/assets` para `assets` na raiz.

## Editar

- Textos, seções, estilos e animações: tudo em `index.html`.
- Capturas do produto em `public/assets/app/`, marcas de terceiros em
  `public/assets/logos/`.
- E-mail que recebe o formulário: constante `CONTACT_EMAIL` no `<script>`.
- Endereço do sistema nos links **Entrar** (menu e rodapé): hoje
  `https://salescoach.grougp.com.br`. São dois links para trocar quando o
  CNAME `app.salescoach.app.br` estiver apontado.

## Uma regra

Os caminhos dos ativos são absolutos (`/assets/...`). É isso que faz o Vite
deixá-los passar intactos em vez de tentar resolvê-los no build. Não troque
para caminhos relativos.
