const chalk = require('chalk')
const { promisify } = require('util')
const fs = require('fs')
const pathHelper = require('path')
const copyDir = require('copy-dir')

const pCopyDir = (source, destination) => new Promise((resolve, reject) => {
  copyDir(source, destination, (err) => {
    if (err) {
      return reject(err)
    }
    return resolve()
  })
})

const writeFile = promisify(fs.writeFile)
const coolScripts = require('./templates/scripts.json')

const BYPASS = ['start', 'test']

function packageJsonPath(folder) {
  return pathHelper.resolve(process.env.PWD + '/' + (folder.endsWith('/') ? `${folder}package.json` : `${folder}/package.json`))
}

function installScripts(path = './') {
  const packageJson = require(packageJsonPath(path))

  if (!packageJson) {
    console.log(`${chalk.gray.bgRed('[ERROR]')} ${chalk.green('The package.json file was not fount!')}`)
    process.exit(1)
  }


  if (!packageJson.dependencies['react-native']) {
    console.log(`${chalk.gray.bgYellow('[WARNING]')} ${chalk.green('The path folder must be a React Native project!')}`)
    process.exit(1)
  }
  const byPassScripts = BYPASS.reduce((scripts, script) => {
    if (packageJson.scripts[script]) {
      scripts[script] = packageJson.scripts[script] // eslint-disable-line no-param-reassign
    }

    return scripts
  }, {})

  packageJson.scripts = {
    ...byPassScripts,
    ...coolScripts,
  }

  pCopyDir(`${__dirname}/scripts`, `${pathHelper.resolve(path)}/scripts`)
    .then(() => {
      writeFile(packageJsonPath(path), JSON.stringify(packageJson, null, 2))
        .then(() => {
          console.log(`${chalk.gray.bgGreen('[SUCCESS]')} ${chalk.white('All the cool scripts were installed! Your project is coolest project now 😎 ')}`)
          process.exit(0)
        })
        .catch(() => {
          console.log(`${chalk.gray.bgRed('[ERROR]')} ${chalk.blue('We could not write the package.json file')}`)
          process.exit(1)
        })
    })
    .catch(() => {
      console.log(`${chalk.gray.bgRed('[ERROR]')} ${chalk.blue('We could not write the scripts folder')}`)
      process.exit(1)
    })
}


module.exports = installScripts
