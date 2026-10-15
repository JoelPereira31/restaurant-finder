# 🗺️ FoodFinder — Buscador de Restaurantes com Mapa Interativo

Aplicação web desenvolvida em React para busca e localização de restaurantes próximos, utilizando mapas interativos (Leaflet / OpenStreetMap), geolocalização do navegador e rotas integradas com o Google Maps.

> 🔗 **Deploy online:** [Link da Vercel virá aqui]

---

## 🚀 Funcionalidades

- **Mapa Interativo com Leaflet:** Visualização em tempo real de estabelecimentos com marcadores personalizados e animações de voo (*smooth flyTo*).
- **Sincronização Bidirecional:** Clicar em um card na lista centraliza e abre o popup no mapa; clicar no pino do mapa destaca o restaurante na lista.
- **Geolocalização (GPS):** Botão de localização atual que detecta as coordenadas do usuário e centraliza o mapa com pino pulsante.
- **Filtros & Busca em Tempo Real:**
  - Busca textual por nome do restaurante, categoria ou ingredientes.
  - Filtro por categorias (Hambúrguer, Pizza, Japonês, Café, Italiano, Mexicano).
  - Filtro rápido de status ("Aberto agora").
- **Modal de Detalhes:** Apresenta cardápio, fotos em alta resolução, avaliação com estrelas, telefone clicável e status de funcionamento.
- **Integração com Google Maps:** Botão *"Como Chegar"* que abre a rota calculada diretamente no Google Maps oficial.
- **Layout Responsivo:** Experiência adaptada para desktop e dispositivos móveis.

---

## 🛠️ Tecnologias Utilizadas

- **[React](https://react.dev/):** Interface de usuário reativa baseada em componentes.
- **[Vite](https://vite.dev/):** Build tool ultrarrápida.
- **[Leaflet](https://leafletjs.com/) & [React-Leaflet](https://react-leaflet.js.org/):** Biblioteca para mapas interativos móveis e desktop.
- **[OpenStreetMap](https://www.openstreetmap.org/):** Camada de mapa de código aberto e livre de custos.
- **[Lucide React](https://lucide.dev/):** Pacote de ícones minimalistas e modernos.
- **CSS3:** Flexbox, animações de transição suave e design responsivo.

---

## 📦 Como Executar Localmente

1. Clone o repositório:
```bash
git clone https://github.com/SEU_USUARIO/restaurant-finder.git
2. Entre na pasta:
cd restaurant-finder
3. Instale as dependências:
npm install
4. Execute o projeto:
npm run dev

Autor

Desenvolvido por Joel na jornada para Desenvolvedor Front-end.