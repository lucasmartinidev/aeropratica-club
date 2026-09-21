# Favicons — Aeroprática Club

Os PNGs em `png/` foram derivados do emblema aprovado, sem o texto completo, para preservar legibilidade em tamanhos pequenos:

- `aeropratica-favicon-16.png`: aba do navegador em interfaces compactas.
- `aeropratica-favicon-32.png`: favicon principal.
- `aeropratica-favicon-48.png`: atalhos e ambientes que usam resolução maior.
- `aeropratica-touch-180.png`: Apple Touch Icon.
- `aeropratica-app-192.png`: ícone de aplicação web/PWA.
- `aeropratica-favicon-512.png`: splash screen, PWA e instalação do SaaS.

Exemplo para o site:

```html
<link rel="icon" type="image/png" sizes="32x32" href="/brand/favicon/png/aeropratica-favicon-32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/brand/favicon/png/aeropratica-favicon-16.png">
<link rel="apple-touch-icon" sizes="180x180" href="/brand/favicon/png/aeropratica-touch-180.png">
<link rel="manifest" href="/manifest.webmanifest">
```

Para o SaaS/PWA, declarar também os arquivos de 192 px e 512 px no `manifest.webmanifest`.
