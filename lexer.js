// SYL LEXER (ultra basit ama gerçek)

const KEYWORDS = ["from", "filter", "pick", "limit", "link"];

function lexer(input) {
  const tokens = [];
  let i = 0;

  while (i < input.length) {
    let c = input[i];

    // boşlukları geç
    if (/\s/.test(c)) {
      i++;
      continue;
    }

    // sayı
    if (/\d/.test(c)) {
      let num = "";
      while (/\d/.test(input[i])) {
        num += input[i];
        i++;
      }
      tokens.push({ type: "NUMBER", value: Number(num) });
      continue;
    }

    // kelime (identifier / keyword)
    if (/[a-zA-Z_]/.test(c)) {
      let word = "";
      while (/[a-zA-Z0-9_]/.test(input[i])) {
        word += input[i];
        i++;
      }

      if (KEYWORDS.includes(word)) {
        tokens.push({ type: "KEYWORD", value: word });
      } else {
        tokens.push({ type: "IDENT", value: word });
      }
      continue;
    }

    // operatörler
    if (c === ">" && input[i + 1] === "=") {
      tokens.push({ type: "OP", value: ">=" });
      i += 2;
      continue;
    }
    if (c === "<" && input[i + 1] === "=") {
      tokens.push({ type: "OP", value: "<=" });
      i += 2;
      continue;
    }
    if (c === ">" || c === "<") {
      tokens.push({ type: "OP", value: c });
      i++;
      continue;
    }

    // virgül
    if (c === ",") {
      tokens.push({ type: "COMMA", value: "," });
      i++;
      continue;
    }

    throw new Error("SYL error: bilinmeyen karakter -> " + c);
  }

  tokens.push({ type: "EOF" });
  return tokens;
}

module.exports = lexer;
