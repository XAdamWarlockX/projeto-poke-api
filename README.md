# Poke API

Esse é um projeto que lista uma API de pokémons.

## Linguagens usadas

- JavaScript <img align="center" alt="JavaScript" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg">

- React <img align="center" alt="React" height="30" width="40" src="https://www.svgrepo.com/show/452092/react.svg">

## Prévia

<img src="src/images/Prévia.gif" alt="gif do projeto">

## Proposito da aplicação

O propósito da aplicação é demonstrar minhas habilidades utilizando uma API no React com React route. Ela também foi criada usando o vite por ser mais atualizado e mais rápido. 

API usada para buscar os pokémons: https://pokeapi.co/

## Funcionalidades da aplicação

Na página principal temos 3 funcionalidades: a primeira é um botão que altera o tema entre dark e light, a segunda é uma lista de cards com pokémons clicáveis que levam a uma descrição detalhada do mesmo, e por último um botão que carrega mais pokémons à lista.

Na página detalha do pokémon que clicamos, vemos o mesmo botão que altera o tema, as descrições do pokémon como tipo, movimentos e habilidades, e por fim vemos um botão que retorna para a lista de pokémons.

## Ferramentas e bibliotecas utilizadas

Não ire citar todas as ferramentas do próprio React já que são o básico para a criação de um projeto utilizando React. A única que irei citar é o hook useContext que usei para compartilhar as props do alterador de temas para outros componentes.

As ferramentas que utilizei no projeto vieram das bibliotecas Axios, Styled Component e React Route Dom.

- Axios: essa biblioteca foi usada para facilitar na utilização da API de pokémons.

- Styled Component: essa biblioteca foi usada para adicionar estilos globais para o projeto e para estilizar os componentes individualmente.

- React Route Dom: essa biblioteca foi usada para criar as rotas das duas páginas que o projeto tem, as ferramentas usadas foram as BrowserRouter, Routes, Route e o Link.

## Decisões durante o processo

Durante a criação do projeto, eu fiz pequenas decisões que podiam ajudar no processo.

Uma delas foi deixar o tema dark como padrão para deixar esteticamente mais bonito e confortável para os olhos de quem abrir o projeto.

Outra escolha aconteceu quando criei um componente de um botão só para usar dentro do alterador de temas, em seguida percebi que não seria necessário e decidi fazer o botão dentro do alterador.

Também relacionado ao botão do alterador de tema, eu resolvi usar o mesmo estilo de botão para todos os outros botões do projeto.

Deixei tudo em inglês para criar uma boa prática e, porque o API que foi usado retornava as palavras em inglês ou alemão.

## Passo a passo para rodar o projeto na sua maquina

Os passos estão seguidos de seus respectivos comandos para facilitar no entendimento.

1 - Clone o projeto
```
git clone <url aqui>
```
2 - Abra um terminal no projeto
```
cd poke-api
```
3 - Instale as dependências do projeto
```
npm install
```
4 - Execute o projeto
```
npm run dev
```