const inquirer = require('inquirer');
const sh = require('shelljs');

(async function command() {
  try {
    const { type, name, description } = await inquirer.prompt([
      { type: 'list', name: 'type', message: 'Project Type', choices: ['package', 'example'] },
      { type: 'string', name: 'name', message: 'Project Name' },
      { type: 'string', name: 'description', message: 'Project Description' },
    ])

    if (type === 'example') {
      console.log('Not supported type');
      return;
    }
    const packageName = `@becca/${name}`

    sh.exec(`npx hygen ${type} new --name ${packageName} --description ${description}`)
  } catch (e) {
    console.error(e)
  }

})();
