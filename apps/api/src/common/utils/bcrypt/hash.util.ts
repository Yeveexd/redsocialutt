import bcrypt from "bcrypt";

const SALT_ROUNDS = 10;

export const hashPassword = async (pass: string): Promise<string> => {
  return bcrypt.hash(pass, SALT_ROUNDS);
};

export const CompareHash = async (
  pass: string,
  hash: string,
): Promise<boolean> => {
  return bcrypt.compare(pass, hash);
};
