const inquirer = require("inquirer");
const { Triangle, Circle, Square } = require("./lib/shapes");
const generateSVG = require("./lib/svg");

async function run() {
  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "text",
      message: "Enter text for the logo (up to 3 characters):",
      validate: (input) =>
        input.length <= 3 || "Text must be up to 3 characters.",
    },
    {
      type: "input",
      name: "textColor",
      message: "Enter text color (keyword or hex code):",
    },
    {
      type: "list",
      name: "shape",
      message: "Choose a shape:",
      choices: ["Triangle", "Circle", "Square"],
    },
    {
      type: "input",
      name: "shapeColor",
      message: "Enter shape color (keyword or hex code):",
    },
  ]);

  let shape;
  switch (answers.shape) {
    case "Triangle":
      shape = new Triangle();
      break;
    case "Circle":
      shape = new Circle();
      break;
    case "Square":
      shape = new Square();
      break;
  }
  shape.setColor(answers.shapeColor);

  generateSVG(shape, answers.text, answers.textColor);
}

run();
