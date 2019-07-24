const { existsSync } = require("fs");
const { execSync } = require("child_process");

const deployCommand = "oc start-build checkin-ui --from-dir=./dist/iamhere";

function deployToOpenShift() {
  execSync(deployCommand, {
    stdio: "inherit"
  });
}

deployToOpenShift();
