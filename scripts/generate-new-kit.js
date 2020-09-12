const inquirer = require("inquirer");
const sh = require("shelljs");

(async function command() {
  try {
    const { type, name, description } = await inquirer.prompt([
      {
        type: "list",
        name: "type",
        message: "Project Type",
        choices: ["package", "example"],
      },
      { type: "string", name: "name", message: "Project Name" },
      { type: "string", name: "description", message: "Project Description" },
    ]);

    if (type === "example") {
      console.log("Not supported type");

      return;
    }

    const path = `@becca-${name}`;
    const packageName = `@becca/${name}`;
    const packageDescription = description.split(" ").join("_");

    sh.exec(
      `npx hygen ${type} new --name ${packageName} --path ${path} --description ${packageDescription}`
    );
  } catch (e) {
    console.error(e);
  }
})();
