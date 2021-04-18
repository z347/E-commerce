const npsUtils = require('nps-utils')

module.exports = {
  scripts: {
    workspace: {
      generator: 'nx workspace-generator'
    },
    graph: {
      dep: 'nx dep-graph'
    },
    nx: {
      default: 'nx',
      help: 'nx help',
      update: 'nx migrate latest'
    },
    start: {
      default: 'nx serve',
      build: 'nx build',
      lint: 'nx workspace-lint && nx lint'
    },
    affected: {
      default: 'nx affected',
      apps: 'nx affected:apps',
      libs: 'nx affected:libs',
      build: 'nx affected:build',
      graph: 'nx affected:dep-graph'
    },
    typescript: {
      help: 'tsc -h',
      // TODO: need improve/change logic
      lint: 'tsc --project tsconfig.base.json --pretty --noEmit'
    },
    format: {
      default: 'nx format:write',
      check: 'nx format:check'
    },
    lint: {
      default: '',
      css: ''
    },
    husky: {
      prepare: 'husky install',
      pre_commit: 'npm run nps lint_staged',
      commit_msg: 'commitlint --edit --color'
    },
    lint_staged: {
      default: npsUtils.concurrent.nps('format', 'git add')
    },
    npm: {
      check_update: 'npm outdated',
      update: 'npm update --save/--save-dev',
      audit: 'npm audit',
      fix: 'npm audit fix'
    }
  }
}
