import fs from "fs/promises";
import { existsSync } from "fs";
import { WordBankContent, WordBankMeta } from "../src/wordBankInterface";

function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

(async () => {
  if (existsSync("dist/word_bank")) {
    await fs.rm("dist/word_bank", { recursive: true });
  }
  await fs.mkdir("dist/word_bank");
  const files = await fs.readdir("word_bank");
  const wordBankMeta: WordBankMeta[] = [];
  await Promise.all(
    files.map(async (file) => {
      const fileContent = await fs.readFile(`word_bank/${file}`, "utf-8");
      const wordBank: WordBankContent = {
        id: uuidv4(),
        name: /#topic=.*/.exec(fileContent)?.[0].replace("#topic=", "") ?? file,
        language: /#language=.*/.exec(fileContent)?.[0].replace("#language=", "") ?? "",
        description: /#description=.*/.exec(fileContent)?.[0].replace("#description=", "") ?? "",
        words: fileContent
          .toString()
          .split("\n")
          .filter((line) => !line.startsWith("#")),
      };
      wordBankMeta.push({
        id: wordBank.id,
        name: wordBank.name,
        language: wordBank.language,
        description: wordBank.description,
      });
      await fs.writeFile(`dist/word_bank/${wordBank.id}.json`, JSON.stringify(wordBank));
    })
  );
  await fs.writeFile(`dist/word_bank/meta.json`, JSON.stringify(wordBankMeta));
})();
