var shell = require("shelljs");

shell.echo("hello world");
shell.exec("commitlint -E GIT_PARAMS", function(code, stdout, stderr) {
  console.log("Exit code:", code);
  console.log("Program output:", stdout);
  console.log("Program stderr:", stderr);
});
