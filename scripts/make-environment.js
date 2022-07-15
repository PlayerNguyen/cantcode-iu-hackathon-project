const fs = require("fs");
const path = require("path");
const chalk = require("chalk");

const defaultServerEnvironmentPath = path.join(
  __dirname,
  "..",
  "server",
  "environment",
  ".default.env"
);
const outputServerEnvPath = path.join(
  __dirname,
  "..",
  "server",
  "environment",
  ".env"
);
// console.log(defaultServerEnvironmentPath);

if (
  fs.existsSync(defaultServerEnvironmentPath) &&
  !fs.existsSync(outputServerEnvPath)
) {
  console.log(chalk.yellow(`Create ${outputServerEnvPath}`));
  fs.copyFileSync(defaultServerEnvironmentPath, outputServerEnvPath);
}
