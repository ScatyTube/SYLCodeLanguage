function parse(tokens) {
  let i = 0;
  const ast = {
    type: "query",
    from: null,
    filter: null,
    pick: [],
  };

  while (tokens[i].type !== "EOF") {
    const token = tokens[i];

    if (token.type === "KEYWORD" && token.value === "from") {
      i++;
      ast.from = tokens[i].value;
    }

    if (token.type === "KEYWORD" && token.value === "filter") {
      ast.filter = {
        left: tokens[i + 1].value,
        op: tokens[i + 2].value,
        right: tokens[i + 3].value,
      };
      i += 3;
    }

    if (token.type === "KEYWORD" && token.value === "pick") {
      i++;
      while (tokens[i].type !== "EOF") {
        if (tokens[i].type === "IDENT") {
          ast.pick.push(tokens[i].value);
        }
        i++;
      }
    }

    i++;
  }

  return ast;
}

module.exports = parse;
