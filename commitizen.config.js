module.exports = {
  types: [
    {
      value: 'build',
      name: 'build:     Збірка проекту або зміни/модифікації зовнішніх залежностей'
    },
    {
      value: 'ci',
      name: 'ci:        Налаштування command line та робота з скриптами'
    },
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

  scopes: [{ name: 'api' }, { name: 'admin-panel' }, { name: 'client' }],

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
  footerPrefix: 'METADATA:',
  subjectLimit: 72
}
