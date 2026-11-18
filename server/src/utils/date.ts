import { addMinutes, addHours } from "date-fns";

/**
 * A helper function to return a date by adding minutes, hours, or both.
 *
 * @param {number} minutes - The amount of time in minutes to be added.
 * @param {number} hours - Optional. The amount of time in hours to be added. Defaults to 0.
 *
 * @returns The final date, after adding the minutes and hours.
 *
 * @example
 * const date = getDate(0, 0); // Get the current date and time.
 * const pastDate = getDate(5, 0); // Get the date and time 5 minutes before.
 * const futureDate = getDate(0, -5); // Get the date and time 5 hours after.
 */
export const getDate = (minutes: number, hours: number = 0) => {
  let date = new Date();

  date = addHours(date, hours);
  date = addMinutes(date, minutes);

  return date;
};
