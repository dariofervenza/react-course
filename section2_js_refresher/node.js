// gay.js

// ANSI Escape Codes for colored output in the terminal
const colors = {
  red: "\x1b[41m  \x1b[0m",
  orange: "\x1b[48;5;208m  \x1b[0m",
  yellow: "\x1b[43m  \x1b[0m",
  green: "\x1b[42m  \x1b[0m",
  blue: "\x1b[44m  \x1b[0m",
  purple: "\x1b[45m  \x1b[0m",
  reset: "\x1b[0m"
};

console.log("🏳️‍🌈 FAREWELL IAGO PORTO! 🏳️‍🌈\n");

// Print a Pride Flag
const width = 24;
console.log(colors.red.repeat(width));
console.log(colors.orange.repeat(width));
console.log(colors.yellow.repeat(width));
console.log(colors.green.repeat(width));
console.log(colors.blue.repeat(width));
console.log(colors.purple.repeat(width));

// Print rainbow text message
const message = "\nWe'll miss you, Iago! Slay your next journey! ✨";
const rainbow = [
  "\x1b[31m",       // Red
  "\x1b[38;5;208m", // Orange
  "\x1b[33m",       // Yellow
  "\x1b[32m",       // Green
  "\x1b[34m",       // Blue
  "\x1b[35m"        // Purple
];

let coloredText = "";
for (let i = 0; i < message.length; i++) {
  const color = rainbow[i % rainbow.length];
  coloredText += `${color}${message[i]}`;
}

console.log(coloredText + colors.reset + "\n");