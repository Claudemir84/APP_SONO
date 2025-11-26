📱 Dashboard de Saúde - Mobile App (React Native)

Aplicativo móvel multiplataforma (Android, iOS e Web) para monitoramento de hábitos de saúde, desenvolvido com React Native e Expo.

📸 Demonstração

<!--
DICA: Tire prints do seu emulador ou celular e substitua os links abaixo
para mostrar seu projeto rodando!
-->

<div style="display: flex; gap: 10px;">
<img src="https://www.google.com/search?q=https://via.placeholder.com/300x600%3Ftext%3DTela%2BHome" alt="Home" height="400" />
<img src="https://www.google.com/search?q=https://via.placeholder.com/300x600%3Ftext%3DTela%2BHistorico" alt="Historico" height="400" />
</div>

🚀 Funcionalidades

📊 Dashboard Visual: Cards com resumo de Sono, Calorias e Exercícios.

📱 Navegação por Abas: Uso de React Navigation (Bottom Tabs) para alternar entre Início e Histórico.

📝 Gestão de Registros: Adicionar, editar e excluir atividades diárias.

🎨 Layout Responsivo: Design adaptado que funciona tanto no Celular quanto no Navegador (Web).

🛡️ Safe Area: Respeita as áreas seguras (notch/entalhe) de dispositivos modernos.

🛠 Tecnologias

React Native (Expo): Framework principal para desenvolvimento mobile.

React Navigation: Gerenciamento de rotas e navegação em abas.

Axios: Cliente HTTP para consumo da API REST.

Node.js + Express + SQLite: Backend (Servidor) para persistência dos dados.

📦 Como Rodar o Projeto

Este projeto é composto por duas partes: o Servidor (Backend) e o App (Mobile). Siga a ordem abaixo para executar.

Pré-requisitos

Node.js instalado.

Celular com o app Expo Go instalado (ou Emulador Android/iOS configurado).

Passo 1: Iniciar o Backend (Servidor)

O aplicativo precisa de onde buscar os dados. Vamos ligar o servidor primeiro.

Abra um terminal e entre na pasta do servidor:

cd server


Instale as dependências (caso não tenha feito):

npm install


Inicie o servidor:

node server.js


O servidor rodará na porta 3001. Deixe este terminal aberto.

Passo 2: Configurar o IP da API (Muito Importante!)

Para o celular conectar no seu computador, você precisa informar o IP correto.

Abra o arquivo src/services/api.js dentro da pasta do projeto mobile.

Ajuste a baseURL conforme onde você vai testar:

Opção A: Rodar no Navegador (Web)

baseURL: 'http://localhost:3001'


Opção B: Rodar no Celular Físico (Expo Go)

Descubra o IP do seu computador (No Windows: ipconfig | No Mac/Linux: ifconfig).

Substitua pelo seu IPv4:

baseURL: '[http://192.168.](http://192.168.)X.X:3001' // Ex: 192.168.0.15


Passo 3: Iniciar o App Mobile

Abra um novo terminal na pasta do projeto mobile:

cd APP_SONO


Instale as dependências:

npm install


Inicie o projeto Expo:

npx expo start


4. Visualizar o App

No Navegador: Pressione a tecla w no terminal ou rode npx expo start --web.

No Celular: Escaneie o QR Code que apareceu no terminal usando o app Expo Go (Android) ou a Câmera (iOS).

No Emulador: Pressione a para Android ou i para iOS/Simulator.

📂 Estrutura de Pastas

APP_SONO/
├── server/            # Backend (API e Banco de Dados)
├── src/
│   ├── components/    # Componentes visuais
│   ├── screens/       # Telas (HomeScreen, HistoryScreen)
│   └── services/      # Configuração da API
├── App.js             # Rotas e Navegação
└── package.json       # Dependências


👨‍💻 Autor

Feito com 💜 por [SEU NOME AQUI].