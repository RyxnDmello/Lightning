import { randomBytes, randomUUID } from "crypto";

/**
 * A helper function to return a random 6 digit OTP.
 *
 * @returns A random 6 digit OTP.
 *
 * @example
 * const otp = generateOTP();
 */
export const generateOTP = () => {
  const otp = Math.floor(100000 + Math.random() * 900000);
  return otp.toString();
};

/**
 * A helper function to return a random device ID as a UUID.
 *
 * @returns A UUID. A random device ID.
 *
 * @example
 * const deviceID = generateDeviceID();
 */
export const generateDeviceID = () => {
  return randomUUID().replace(/-/g, "");
};

/**
 * A helper function to return a random JTI. This is used as a token ID when creating JWT tokens.
 *
 * @param {number} length - Optional. The length of the JTI to be generated. Defaults to 16.
 *
 * @example
 * const jti = generateTokenID();
 */
export const generateTokenID = (length: number = 16) => {
  return randomBytes(length).toString("hex");
};
