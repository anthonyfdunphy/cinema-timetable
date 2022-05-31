/* code to work out which week of the month it is */
const d = new Date();
const date = d.getDate();
const day = d.getDay();
const weekOfMonth = Math.ceil((date - 1 - day) / 7);

const filmTitles = ['Batman', 'Ambulance', 'The Reason I Jump', 'Harry Potter']

document.getElementById("top-h1").innerHTML = filmTitles[0];
document.getElementById("bottom-h1").innerHTML = filmTitles[1];