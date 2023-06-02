import { convertBase } from "simple-base-converter";
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`Enter EVM bytecode (base 16) WITHOUT '0x' at begining...`, bytecode_16 => {
  console.log(`You've entered: ${convertBase(bytecode_16, 16, 17)}`);
  rl.close();
});
