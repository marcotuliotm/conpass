# Conpass



# Objetivo
O objetivo deste desafio é criar um formulário de cadastro de usuário e uma listagem.

# Requisitos

## Geral
- A aplicação deve ser feita usando React, seguindo o layout das imagens anexadas
- Deve ser criado testes para todos componentes que você achar necessário (biblioteca fica a critério)
- Todos os dados da app devem ser salvos usando Redux

## Tela 1: Listagem de usuários 
- Deve ter uma mensagem quando não se tem nenhum usuário cadastrado ainda.
- A listagem deve ter ordenação, e a coluna `Created at` vem como padrão e mostrando os mais recentes primeiro.
- A data deve vir formatada no padrão Jan 1, 2018, 10:40
- Ao lado do nome do usuários, deve ser apresentada a imagem de perfil. Caso não tenha, mostra as duas iniciais do nome.

## Tela 2: Cadastro - Etapa 1 
- Validação:
  - Todos os campos devem ter uma validação no front-end (biblioteca para trabalhar com formulários fica a critério)
  - Assim que tirar o foco do campo, deve rodar a validação e mostrar uma mensagem abaixo avisando o problema.
  - O campo e-mail deve ser validadado, name@domain por exemplo não deve passar
  - O campo senha e confirmar senha deve ser iguais
- Botão `Next step` vem desabilitado por padrão e só é habilitado quando todos os campos estiverem ok
- Ao clicar em `Next step` já deve salvar as informações (localStorage) para que não se perca nas outras etapas.

## Tela 3: Cadastro - Etapa 2 
- Ao clicar no circulo, deve-se abrir uma caixa para selecionar imagem
- Imagem deve ser salva em Base64 e deve aparecer no circulo como background assim que carregada.
- Assim que imagem for carregado no circulo, o label `Click to upload your profile image` passa a ser `Click to Edit image`
- Botão `Back` deve voltar para etapa anterior com os dados já preenchidos
- Ao clicar em `Finish` deve redirecionar pra listagem de usuários


# Bonus
- Atenção para o layout
- Usar (quando necessário), features das novas versões do JS

# O que iremos avaliar
- Qualidade do código (semântico, legibilidade, modular, etc)
- Stack utilizada, nós usamos: React, Redux, Webpack (CSS fica a seu critério)
- Padrão do repositório criado: Readme, comandos de inicialização, build, testes.


# Requisitos cumpridos
- Todos o requisitos foram cumpridos

# Cobretura dos testes



# Melhorias 

- criar mais testes
- criar mais historias (storybook)
- melhorar estilos e o layout

# Estrutura

## Table of Contents

- [Available Scripts](#available-scripts)
  - [npm start](#npm-start)
  - [npm test](#npm-test)
  - [npm run build](#npm-run-build)
  - [npm run storybook](#npm-run-storybook)
- [Supported Browsers](#supported-browsers)
- [Supported Browsers](#supported-browsers)
- [Supported Language Features and Polyfills](#supported-language-features-and-polyfills)
- [Syntax Highlighting in the Editor](#syntax-highlighting-in-the-editor)
- [Displaying Lint Output in the Editor](#displaying-lint-output-in-the-editor)


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>

### `npm run storybook`

Storybook for React is a UI development environment for your React components. With it, you can visualize different states of your UI components and develop them interactively.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

## Supported Browsers

By default, the generated project uses the latest version of React.

You can refer [to the React documentation](https://reactjs.org/docs/react-dom.html#browser-support) for more information about supported browsers.

## Supported Language Features and Polyfills

This project supports a superset of the latest JavaScript standard.<br>
In addition to [ES6](https://github.com/lukehoban/es6features) syntax features, it also supports:

* [Exponentiation Operator](https://github.com/rwaldron/exponentiation-operator) (ES2016).
* [Async/await](https://github.com/tc39/ecmascript-asyncawait) (ES2017).
* [Object Rest/Spread Properties](https://github.com/sebmarkbage/ecmascript-rest-spread) (stage 3 proposal).
* [Dynamic import()](https://github.com/tc39/proposal-dynamic-import) (stage 3 proposal)
* [Class Fields and Static Properties](https://github.com/tc39/proposal-class-public-fields) (part of stage 3 proposal).
* [JSX](https://facebook.github.io/react/docs/introducing-jsx.html) and [Flow](https://flowtype.org/) syntax.

Learn more about [different proposal stages](https://babeljs.io/docs/plugins/#presets-stage-x-experimental-presets-).

While we recommend using experimental proposals with some caution, Facebook heavily uses these features in the product code, so we intend to provide [codemods](https://medium.com/@cpojer/effective-javascript-codemods-5a6686bb46fb) if any of these proposals change in the future.

Note that **the project only includes a few ES6 [polyfills](https://en.wikipedia.org/wiki/Polyfill)**:

* [`Object.assign()`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) via [`object-assign`](https://github.com/sindresorhus/object-assign).
* [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) via [`promise`](https://github.com/then/promise).
* [`fetch()`](https://developer.mozilla.org/en/docs/Web/API/Fetch_API) via [`whatwg-fetch`](https://github.com/github/fetch).

If you use any other ES6+ features that need **runtime support** (such as `Array.from()` or `Symbol`), make sure you are including the appropriate polyfills manually, or that the browsers you are targeting already support them.

Also note that using some newer syntax features like `for...of` or `[...nonArrayValue]` causes Babel to emit code that depends on ES6 runtime features and might not work without a polyfill. When in doubt, use [Babel REPL](https://babeljs.io/repl/) to see what any specific syntax compiles down to.

## Syntax Highlighting in the Editor

To configure the syntax highlighting in your favorite text editor, head to the [relevant Babel documentation page](https://babeljs.io/docs/editors) and follow the instructions. Some of the most popular editors are covered.

## Displaying Lint Output in the Editor

>Note: this feature is available with `react-scripts@0.2.0` and higher.<br>
>It also only works with npm 3 or higher.

Some editors, including Sublime Text, Atom, and Visual Studio Code, provide plugins for ESLint.

They are not required for linting. You should see the linter output right in your terminal as well as the browser console. However, if you prefer the lint results to appear right in your editor, there are some extra steps you can do.

You would need to install an ESLint plugin for your editor first. Then, add a file called `.eslintrc` to the project root:

```js
{
  "extends": "react-app"
}
```

Now your editor should report the linting warnings.

Note that even if you edit your `.eslintrc` file further, these changes will **only affect the editor integration**. They won’t affect the terminal and in-browser lint output. This is because Create React App intentionally provides a minimal set of rules that find common mistakes.

If you want to enforce a coding style for your project, consider using [Prettier](https://github.com/jlongster/prettier) instead of ESLint style rules.


