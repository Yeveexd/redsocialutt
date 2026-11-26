import { CompareHash, hashPassword } from "./hash.util.js";

async function main() {
  const password = "helloworane";

  const hash = await hashPassword(password);

  console.log("Password:", password);
  console.log("Hash:", hash);

  console.log("Compare:", await CompareHash(password, hash));
}

main();
