import { password } from "bun";
import { subtle } from "crypto";

/**
 * A helper function to hash a JWT token using SHA-256 encryption, and return the hashed token.
 *
 * @param {string} token - The JWT token that is to be hashed.
 *
 * @returns The hashed token as a string.
 *
 * @example
 * const token = "very.secure.token";
 * const hashedToken = await hashToken(token);
 */
export const hashToken = async (token: string) => {
  const data = new TextEncoder().encode(token);
  const hash = await subtle.digest("SHA-256", data);
  return Buffer.from(hash).toString("hex");
};

/**
 * A helper function to hash a plain text password using argon2id.
 *
 * @param {string} plain - The plain text string to be hashed.
 *
 * @returns The encrypted password.
 *
 * @example
 * const plain = "my-plain-text-password";
 * const password = await hashPassword(password);
 */
export const hashPassword = async (plain: string) => {
  return await password.hash(plain, {
    algorithm: "argon2id",
    memoryCost: 19456,
    timeCost: 2,
  });
};

/**
 * A helper function to verify a plain text password against an encrypted password.
 *
 * @param {string} plain - The plain text string password to be checked.
 * @param {string} encrypted - The hashed password to be checked against.
 *
 * @returns A boolean. If the password matches, it returns true, or else false.
 *
 * @example
 * const plain = "my-plain-text-password";
 * const encrypted = "my-encrypted-password";
 *
 * const valid = await verifyPassword(plain, encrypted);
 *
 * if (valid) {
 *   console.log("Passwords match")
 * } else {
 *   console.log("Passwords mismatch")
 * }
 */
export const verifyPassword = async (plain: string, encrypted: string) => {
  return await password.verify(plain, encrypted, "argon2id");
};
