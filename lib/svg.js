const fs = require("fs");

function generateSVG(shape, text, textColor) {
  const svgContent = `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            ${shape.render()}
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
        </svg>
    `;
  fs.writeFileSync("logo.svg", svgContent);
  console.log("Generated logo.svg");
}

module.exports = generateSVG;
