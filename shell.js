var shell = require("shelljs");

shell.echo("hello world");
shell.exec("commitlint -E GIT_PARAMS");
