#!/usr/bin/env node

const chalk = require('chalk')
const meow = require('meow')

const installScripts = require('./install-scripts')

const cli = meow(`
  ${chalk.green('Usage')}
    ${chalk.yellow('$ ') + chalk.magenta('react-native-npm-scripts install')}

  ${chalk.green('Options')}
    ${
  chalk.underline.yellow('--path') +
      chalk.blue(' Folder of the project (or where includes the path.json)')
}
    ${
  chalk.underline.yellow('--run-install-scripts') +
      chalk.blue(' This makes the path run all the install:something scripts after it\'s done')
}

  ${chalk.green('Examples')}
    ${
  chalk.yellow('$ ') +
      chalk.magenta('react-native-npm-scripts install --path=/the/folder --run-install-scripts')
}
`, {
  booleanDefault: false,
  flags: {
    path: {
      type: 'string',
      alias: 'p',
    },
    runInstallScripts: {
      type: 'boolean',
      alias: 'i',
    },
  },
})

if (!cli.input.length || cli.input[0] !== 'install') {
  cli.showHelp(1)
}

installScripts(cli.flags.path, cli.flags.runInstallScripts)
