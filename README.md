# 📱 Dashboard de Saúde - Mobile App

Aplicativo móvel multiplataforma (Android, iOS e Web) para monitoramento de hábitos de saúde, desenvolvido com React Native e Expo.

## 📸 Demonstração

<p align="center">
  <img src="https://github.com/user-attachments/assets/5a4552af-27f7-4a5d-a460-dd1f8f32c5ea" alt="Dashboard de Saúde" width="416" height="606" />
</p>

## 🚀 Funcionalidades

- 📊 **Dashboard Visual**: Cards com resumo de Sono, Calorias e Exercícios
- 📱 **Navegação por Abas**: Uso de React Navigation (Bottom Tabs) para alternar entre Início e Histórico
- 📝 **Gestão de Registros**: Adicionar, editar e excluir atividades diárias
- 🎨 **Layout Responsivo**: Design adaptado que funciona tanto no Celular quanto no Navegador (Web)
- 🛡️ **Safe Area**: Respeita as áreas seguras (notch/entalhe) de dispositivos modernos

## 🛠 Tecnologias

- **React Native (Expo)**: Framework principal para desenvolvimento mobile
- **React Navigation**: Gerenciamento de rotas e navegação em abas
- **Axios**: Cliente HTTP para consumo da API REST
- **Node.js + Express + SQLite**: Backend (Servidor) para persistência dos dados

## 📦 Como Rodar o Projeto

Este projeto é composto por duas partes: o **Servidor (Backend)** e o **App (Mobile)**. Siga a ordem abaixo para executar.

### Pré-requisitos

- Node.js instalado
- Celular com o app **Expo Go** instalado (ou Emulador Android/iOS configurado)

### Passo 1: Iniciar o Backend (Servidor)

O aplicativo precisa de onde buscar os dados. Vamos ligar o servidor primeiro.

1. Abra um terminal e entre na pasta do servidor:
```bash
cd server
```

2. Instale as dependências (caso não tenha feito):
```bash
npm install
```

3. Inicie o servidor:
```bash
node server.js
```

> ⚠️ O servidor rodará na porta **3001**. Deixe este terminal aberto.

### Passo 2: Configurar o IP da API (Muito Importante!)

Para o celular conectar no seu computador, você precisa informar o IP correto.

1. Abra o arquivo `src/services/api.js` dentro da pasta do projeto mobile

2. Ajuste a `baseURL` conforme onde você vai testar:

**Opção A: Rodar no Navegador (Web)**
```javascript
baseURL: 'http://localhost:3001'
```

**Opção B: Rodar no Celular Físico (Expo Go)**

Descubra o IP do seu computador:
- **Windows**: Execute `ipconfig` no terminal
- **Mac/Linux**: Execute `ifconfig` no terminal

Substitua pelo seu IPv4:
```javascript
baseURL: 'http://192.168.X.X:3001' // Ex: 192.168.0.15
```

### Passo 3: Iniciar o App Mobile

1. Abra um novo terminal na pasta do projeto mobile:
```bash
cd APP_SONO
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o projeto Expo:
```bash
npx expo start
```

### Passo 4: Visualizar o App

- **No Navegador**: Pressione a tecla `w` no terminal ou rode `npx expo start --web`
- **No Celular**: Escaneie o QR Code que apareceu no terminal usando o app **Expo Go** (Android) ou a **Câmera** (iOS)
- **No Emulador**: Pressione `a` para Android ou `i` para iOS/Simulator

## 📂 Estrutura de Pastas

```
APP_SONO/
├── server/            # Backend (API e Banco de Dados)
├── src/
│   ├── components/    # Componentes visuais
│   ├── screens/       # Telas (HomeScreen, HistoryScreen)
│   └── services/      # Configuração da API
├── App.js             # Rotas e Navegação
└── package.json       # Dependências
```

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

1. Fork o projeto
2. Crie sua branch de feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👨‍💻 Autor

Feito por **Claudemir Dias**

---

<p align="center">
  ⭐ Se este projeto te ajudou, considere dar uma estrela!
</p>
