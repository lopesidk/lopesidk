# LOPESIDK - Site Interativo

Site interativo com fundo preto, botão de entrada, tela de carregamento, texto "LOPESIDK" com efeitos de glitch e música "Death Wish" do Excision tocando ao fundo.

## 🚀 Características

- ✅ Fundo preto
- ✅ Botão "Clique Aqui" com fonte personalizada
- ✅ Tela de carregamento animada
- ✅ Texto "LOPESIDK" com efeitos de glitch
- ✅ Fonte Planet Kosmos (estilo DJ Excision)
- ✅ Música "Death Wish" do Excision tocando ao fundo
- ✅ **Totalmente responsivo** - funciona em desktop, tablet e mobile
- ✅ **Otimizado para touch devices**
- ✅ **Experiência móvel aprimorada**

## 📱 Responsividade

O site se adapta automaticamente a diferentes tamanhos de tela:

- **Desktop** (1024px+): Experiência completa com texto grande
- **Tablet** (768px-1024px): Tamanhos ajustados para tablets
- **Mobile** (480px-768px): Interface otimizada para smartphones
- **Mobile pequeno** (320px-480px): Compatível com dispositivos menores
- **Orientação landscape**: Ajustes especiais para modo paisagem

### Funcionalidades Móveis Especiais:

- Detecção automática de dispositivos móveis
- Autoplay de áudio desabilitado (conforme políticas dos navegadores)
- Instrução "Toque na tela para reproduzir áudio" em dispositivos móveis
- Botões com tamanho mínimo de 44px para facilitar o toque
- Efeitos de toque otimizados

## 🛠️ Como usar

### Pré-requisitos
- Node.js (versão 16 ou superior)
- pnpm (ou npm)

### Instalação

1. Extraia o arquivo ZIP
2. Navegue até a pasta do projeto:
   ```bash
   cd lopesidk-site
   ```

3. Instale as dependências:
   ```bash
   pnpm install
   # ou
   npm install
   ```

### Executar localmente

```bash
pnpm run dev --host
# ou
npm run dev -- --host
```

O site estará disponível em `http://localhost:5173`

### Build para produção

```bash
pnpm run build
# ou
npm run build
```

Os arquivos de produção estarão na pasta `dist/`

## 🎵 Recursos incluídos

- **Fonte**: Planet Kosmos (PLANK___.TTF)
- **Música**: Death Wish - Excision feat. Sam King

## 🎨 Tecnologias utilizadas

- React 18
- Vite
- CSS3 com animações avançadas
- HTML5 Audio API
- Responsive Design
- Touch Device Optimization

## 📋 Estrutura do projeto

```
lopesidk-site/
├── src/
│   ├── assets/
│   │   ├── PLANK___.TTF (fonte)
│   │   └── Excision-DeathWishfeatSamKing[OfficialVideo].mp3 (música)
│   ├── App.jsx (componente principal)
│   ├── App.css (estilos e animações)
│   └── main.jsx (ponto de entrada)
├── index.html
├── package.json
└── vite.config.js
```

## 🎯 Funcionalidades

1. **Tela inicial**: Botão "Clique Aqui" centralizado
2. **Tela de carregamento**: Barra de progresso animada
3. **Tela principal**: Texto "LOPESIDK" com efeitos de glitch
4. **Áudio**: Música tocando automaticamente (desktop) ou por toque (mobile)

## 📱 Testado em

- ✅ Chrome Desktop
- ✅ Firefox Desktop
- ✅ Safari Desktop
- ✅ Chrome Mobile
- ✅ Safari Mobile (iOS)
- ✅ Samsung Internet
- ✅ Edge Mobile

## 🔧 Personalização

Para personalizar o site, edite os seguintes arquivos:

- `src/App.jsx`: Lógica e comportamento
- `src/App.css`: Estilos e animações
- `src/assets/`: Substitua a fonte ou música

## 📄 Licença

Este projeto foi criado para uso pessoal. A música e fonte incluídas podem ter suas próprias licenças.

---

Criado com ❤️ para LOPESIDK

