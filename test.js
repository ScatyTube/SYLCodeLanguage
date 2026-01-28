const fs = require("fs");
const lexer = require("./lexer");
const parse = require("./parser");

// komuttan dosya adı al
const filename = process.argv[2];

if (!filename) {
  console.error("Kullanim: node test.js dosya.syl");
  process.exit(1);
}

const code = fs.readFileSync(filename, "utf8");

const tokens = lexer(code);
const ast = parse(tokens);

console.log("AST:");
console.log(JSON.stringify(ast, null, 2));
