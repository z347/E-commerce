## Getting Started in dev mode

```bash
npm run nps start.dev
```

---

### ⚙️ Setup Husky v6

**_Documentations_**:

- [Husky](https://typicode.github.io/husky/#/)

0. npm i husky lint-staged -D
1. git init
2. npx husky-init && npm install
3. adding a custom hook [(available names)](https://git-scm.com/docs/githooks)

```bash
npx husky add .husky/<HOOK NAME> "<SCRIPTS TO RUN>"

npx husky add .husky/pre-commit "npx lint-staged"

                          OR

npx husky add .husky/pre-commit => add script manual
```

4. If you want change script, you can do it. <br>
   Find folder **_.husky_** at root directory and then find a file like **_"pre-commit"_** and edit it as you wish.

- [useful article](https://helderburato.com/upgrade-husky-latest-version/#adding-a-hook)

---

### ⚙️ Setup git commits-message and linting

**_Documentations_**:

- [Commitizen](http://commitizen.github.io/cz-cli/)
- [cz-customizable](https://www.npmjs.com/package/cz-customizable)
- [Husky](https://typicode.github.io/husky/#/)

1. npm i commitizen -g
2. npm i cz-customizable -D
3. create the file **_commitizen.config.js_** in the root directory
4. fill the file **_commitizen.config.js_** as you need

**_commitizen.config.js sample_** :

```javascript
module.exports = {
  types: [
    {
      value: 'build',
      name: 'build:     Збірка проекту або зміни/модифікації зовнішніх залежностей'
    },
    { value: 'cli', name: 'cli:       Налаштування CLI та робота з скриптами' },
    { value: 'docs', name: 'docs:      Написання чи оновлення документації' },
    { value: 'feat', name: 'feat:      Добавлення нового функціоналу' },
    { value: 'fix', name: 'fix:       Виправлення помилок' },
    {
      value: 'perf',
      name: 'perf:      Зміни спрямовані на поліпшення продуктивності'
    },
    {
      value: 'refactor',
      name: 'refactor:  Правки коду без виправлення помилок чи додавання нового функціоналу'
    },
    { value: 'revert', name: 'revert:    Відкат до старіших версій' },
    {
      value: 'style',
      name: 'style:     Правки до code-style (вдосконалення/модифікація лінтерів)'
    },
    { value: 'test', name: 'test:      Додавання тестів' }
  ],

  scopes: [{ name: 'ui' }, { name: 'server' }, { name: 'client' }, { name: 'logic' }],

  messages: {
    type: 'Якого роду/виду зміни Ви вносите?',
    scope: '\nОберіть SCOPE, який Ви змінили (опціонально):',

    // if (allowCustomScopes === true)
    customScope: 'Вкажіть власний SCOPE:',
    subject: 'Напишіть КОРОТКИЙ опис в НАКАЗОВІЙ формі:\n',
    body:
      'Напишіть ДЕТАЛЬНИЙ опис (опціонально). Використовуйте "|" для переходу на новий рядок:\n',
    breaking: 'Список BREAKING CHANGES (опціонально):\n',
    footer: 'Мета данні (milestone, ticket) (опціонально). Наприклад: SECRET-700:\n',
    confirmCommit: 'Вас влаштовує коміт, який получився?'
  },

  allowCustomScopes: true,
  allowBreakingChanges: false,
  footerPrefix: 'МЕТА ДАНІ:',
  subjectLimit: 72,

  scopeOverrides: {
    fix: [{ name: 'style' }, { name: 'logic' }, { name: 'unitTest' }]
  }
}
```

5. add this configuration in the **_package.json_**

```json
{
  "config": {
    "commitizen": {
      "path": "node_modules/cz-customizable"
    },
    "cz-customizable": {
      "config": "commitizen.config.js"
    }
  }
}
```

6. git cz

**_Part 2 (validation comments)_**

7. npm i @commitlint/cli @commitlint/config-conventional -D
8. create the file **_.commitlintrc.json_** in the root directory

**_.commitlintrc.json_** sample:

```json
{
  "extends": ["@commitlint/config-conventional"]
}
```

9. create a new hook

```bash
npx husky add .husky/commit-msg "npm run nps husky.commit_msg"
```

10. create new script in the **_package-scripts.js_**

```javascript
husky: {
  commit_msg: `commitlint --edit --color`
}
```

11. done, so now use **_git cz_** under git commit -m "some msg"

**_Useful articles_**

- [habr](https://habr.com/ru/company/yandex/blog/431432/)
