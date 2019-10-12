// Formats a date according to ISO-8601 (YYYY-MM-DD).
export const formatISODate = (date = new Date()) => {
  // Preserve the user's timezone by subtracting it from UTC date
  const offset = date.getTimezoneOffset() * 60 * 1000;
  const dateString = new Date(date.getTime() - offset)
    .toISOString()
    .substring(0, 10);
  return dateString;
};
