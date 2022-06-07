/* array of month names*/
const monthByName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September','October', 'November', 'December'];

/* array of images*/
const filmImages = ['/assets//images/week1.jpeg', '/assets//images/week2.jpg', '/assets//images/week3.jpg', '/assets//images/week4.jpeg', '/assets//images/week5.jpeg', '/assets//images/week6.jpeg', '/assets//images/week7.jpg', '/assets//images/week8.jpeg'];

/* code to work out which week of the month it is */
const d = new Date();
const date = d.getDate();
const day = d.getDay();
const weekOfMonth = Math.ceil((date - 1 - day) / 7);
const month = d.getMonth();


const filmSchedule = [
    {
        startMonth: 'March', 
        titleTop: 'Batman', 
        titleBottom: 'Ambulance',
        topImage: filmImages[0],
        bottomImage: filmImages[1] 
    },
    {
        startMonth: 'April', 
        titleTop: 'Top Gun: Maverick', 
        titleBottom: 'Jurassic World Dominion',
        topImage: filmImages[2],
        bottomImage: filmImages[3]
    },
    {
        startMonth: 'May', 
        titleTop: 'Batman', 
        titleBottom: 'Enchanto',
        topImage: filmImages[4],
        bottomImage: filmImages[5]
    },
    {
        startMonth: 'June', 
        titleTop: 'The Secrets of Dumbledore', 
        titleBottom: 'Jurassic World Dominion',
        topImage: filmImages[6],
        bottomImage: filmImages[7]
    },
    {
        startMonth: 'July', 
        titleTop: 'Downton Abbey: A New Era', 
        titleBottom: 'Ambulance',
        topImage: filmImages[8],
        bottomImage: filmImages[9]
    },
]

/* loop to cycle through array and match current month to film title*/
for (let i =0; i < filmSchedule.length; i++){
    if(filmSchedule[i].startMonth == monthByName[month]){
        /* add text to top and bottom h1 tags */
        document.getElementById('top-h1').innerHTML = filmSchedule[i].titleTop;
        document.getElementById('bottom-h1').innerHTML = filmSchedule[i].titleBottom;

        /* add image to top and bottom img banners */
        document.getElementById('top').style.backgroundImage = "url('" + filmSchedule[i].topImage + "')";
        document.getElementById('bottom').style.backgroundImage = "url('" + filmSchedule[i].bottomImage + "')";

        console.log(monthByName[5]);

        
    }
}

