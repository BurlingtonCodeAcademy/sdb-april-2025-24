// const { format, addDays } = require('./node_modules/date-fns/index.js')

import { format, addDays } from 'date-fns';

const today = new Date();
const formattedDate = format(today, 'MMMM do, yyyy');
const nextWeek = format(addDays(today, 7), 'MMMM do, yyyy');

// document.getElementById('formatted-date').innerHTML = `
//     Today: ${formattedDate}<br>
//     Next week: ${nextWeek}
// `;

console.log(today)
console.log(`Formatted date: ${formattedDate}`);
console.log(`Next week: ${nextWeek}`);