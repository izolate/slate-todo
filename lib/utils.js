const dayNames = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday 🎉',
  'Saturday',
];

// Gets the current day in written form.
export const getDayName = dayIndex => dayNames[dayIndex] || 'another day';

// Formats a date according to ISO-8601 (YYYY-MM-DD).
export const formatISODate = (date = new Date()) => {
  // Preserve the user's timezone by subtracting it from UTC date
  const offset = date.getTimezoneOffset() * 60 * 1000;
  const dateString = new Date(date.getTime() - offset)
    .toISOString()
    .substring(0, 10);
  return dateString;
};

const exampleTasks = [
  'Get shit done',
  'Take a power nap',
  'Brew coffee or tea',
  'Meditate for 10 minutes',
  'Step outside for fresh air',
  'Stand up every hour',
  'Go for a run',
];

// Gets a random task from the list of example tasks.
export const getRandomTask = () =>
  exampleTasks[Math.floor(Math.random() * exampleTasks.length)];

const dayColors = [
  'black',
  'blue',
  'yellow',
  'green',
  'purple',
  'red',
  'black',
];

// Gets the theme color for the day.
export const getDayColor = dayIndex => dayColors[dayIndex] || 'black';
