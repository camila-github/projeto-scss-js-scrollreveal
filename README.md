## Projeto: Criação de site com SCSS + JavaScript + ScrollReveal

- O intuito do projeto foi criar pagina unica, utilizando os recursos do SCSS (Sassy Cascadig Style Sheets) + JavaScript + ScrollReveal (Biblioteca JavaScript)


## Ferramentas Utilizadas

##### NODEJS 

- No nodejs será utilizado o npm (gerenciador de pacotes) para instalar o scss. E tambem será utilizado o npx para ativar o compilador do scss.

- Abaixo link para instalar o nodejs. Eu utilizei a versão LTS:

  [https://nodejs.org/en/](https://nodejs.org/en/)


 ##### SCSS/SASS
 
- Scss (Sassy Cascadig Style Sheets) é um pré-processador que compila folha de estilo para o CSS. Ele permite que seja utilizado variáveis, regras aninhadas, mixins, funções e entre outros recursos, tudo com uma sintaxe totalmente compatível com CSS. A ideia é manter a mesma lógica do CSS (seletores, regras etc), mas de uma maneira mais organizada, intuitiva e com trechos de código facilmente reutilizáveis. 

- Abaixo o comando para instalar o sass

  `$ npm install -g sass`

- Link de referencia:

  [https://sass-lang.com/](https://sass-lang.com/)


##### EXTENÇOES INSTALADAS NA IDE VSCODE
- Se preferir tem as extenções abaixo, que funciona como compilador do sass/scss.
Não sendo necessario instalar o sass pelo comando do npm.

  ` Live Sass Compiler(ritwickdey.live-sass) `

  ` SCSS Formatter(sibiraj-s.vscode-scss-formatter) `


##### ATIVAR COMPILADOR LIVE SASS

- Para que o sass seja compilado necessario ativar o compilador Live Sass. No arquivo 'index.html' informe o caminho onde será salvo o arquivo '.css' apos ser compilado pelo 'Live Sass'. 

- Exemplo: 

  ```html
    <link rel="stylesheet" href="assets/scss/styles.css">   
  ```

- Depois crie um arquivo, com a extenção '.scss' .Exemplo: 

  ` assets/scss/styles.scss `

- No vscode utilize a seguencia de teclas, 'CTRL + SHIFT + P' e localize o compilar 'Live Sass' , clique para que seja ativado o compilador. 

- Na aba 'OutPut' (opção que fica na mesma janela do terminal), aparecerá os arquivos que o 'Live Sass', identificou para serem compilados.

- Na estrutura de pastas, repare que foi criado um arquivo '.css (styles.css)' e um arquivo '.map (styles.css.map)'. Nao precisa mexer nesses arquivos, apenas o arquivo '.scss' voce utilizará para codificar, e a cada alteração, o 'Live sass' irá compilar o arquivo '.scss' para '.css'.


##### LITE-SERVER

- O 'lite-server' será utilizado para monitorar as mudanças nos arquivos '.scss', para que o 'Live Sass' compile os arquivos para o '.css'. 
- Abaixo o comando para instalar o 'lite-server'.

  `$ npm i -g lite-server`

- Para ativar o compilador do 'scss', utilize o comando abaixo:

  `$ npx lite-server`


##### BOX ICONS: 

- Biblioteca de icones. Link CDN para vincular no projeto:

  [https://cdn.jsdelivr.net/npm/boxicons@2.0.7/css/boxicons.min.css](https://cdn.jsdelivr.net/npm/boxicons@2.0.7/css/boxicons.min.css)
  
##### REMOVE.BG

- Utilizado o link abaixo para remover o fundo de uma imagem.

   [https://www.remove.bg/pt-br/upload](https://www.remove.bg/pt-br/upload)


##### SCROLLREVEAL

- ScrollReveal é uma biblioteca JavaScript para animar facilmente os elementos conforme eles entram / saem da janela de visualização.

- Abaixo o link do site:

  [https://scrollrevealjs.org/guide/hello-world.html](https://scrollrevealjs.org/guide/hello-world.html)

- No projeto adicione no final da tag 'body' o script abaixo:
 
  ```html 
   <script src="https://unpkg.com/scrollreveal"></script>
  ```


##### LINKS DE REFERENCIA:

- Imagens: [https://www.pexels.com/pt-br/](https://www.pexels.com/pt-br/)
- Referencia para o projeto: Bedimcode [https://www.youtube.com/watch?v=5RIFrZEjURA](https://www.youtube.com/watch?v=5RIFrZEjURA)
- Conceitos SVG: [https://www.devmedia.com.br/introducao-ao-svg-scalable-vector-graphics/27280](https://www.devmedia.com.br/introducao-ao-svg-scalable-vector-graphics/27280)
- Conceitos SEO: [https://danieldigital.com.br/blog/seo-tecnico-a-importancia-do-html5-semantico-para-melhorar-o-trafego-do-seu-site/#:~:text=Boa%20parte%20das%20tags%20de,exibir%20o%20conte%C3%BAdo%20na%20p%C3%A1gina.&text=Tamb%C3%A9m%20s%C3%A3o%20sem%C3%A2nticas%20as%20tags,est%C3%A1%20o%20cabe%C3%A7alho%20da%20p%C3%A1gina.](https://danieldigital.com.br/blog/seo-tecnico-a-importancia-do-html5-semantico-para-melhorar-o-trafego-do-seu-site/#:~:text=Boa%20parte%20das%20tags%20de,exibir%20o%20conte%C3%BAdo%20na%20p%C3%A1gina.&text=Tamb%C3%A9m%20s%C3%A3o%20sem%C3%A2nticas%20as%20tags,est%C3%A1%20o%20cabe%C3%A7alho%20da%20p%C3%A1gina.)


## Conceitos Utilizados:

- Criação de folha de estilo com scss.
- Uso do ScrollReveal (biblioteca JavaScript) para elementos que entram e saem da janela.
- Uso do pre-processador scss/sass para compilar os arquivos .scss para .css 
- Uso do BoxIcons (biblioteca de icones)
- Site com responsividade.
- Criação de tema Dark (escurecer a tela)
- Uso de conceitos SVG
- Estrutura semântica no Html (SEO)


## Site publicado no link abaixo:

  [https://camila-github.github.io/projeto-scss-js-scrollreveal/](https://camila-github.github.io/projeto-scss-js-scrollreveal/)
