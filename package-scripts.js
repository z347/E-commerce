const npsUtils = require('nps-utils')

module.exports = {
  scripts: {
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
    nx: {
      default: 'nx',
      help: 'nx help',
      update: 'nx migrate latest'
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
    husky: {
      prepare: 'husky install',
      // pre_commit: 'npm run nps lintStaged',
      // commit_msg: 'commitlint --edit --color'
    },
    lintStaged: {
      default: npsUtils.concurrent.nps('format', 'git add')
    },
    workspace_generator: 'nx workspace-generator',
    dep_graph: 'nx dep-graph'
  }
}
