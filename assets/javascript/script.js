/* array of month names*/
const monthByName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September','October', 'November', 'December']

/* code to work out which week of the month it is */
const d = new Date();
const date = d.getDate();
const day = d.getDay();
const weekOfMonth = Math.ceil((date - 1 - day) / 7);
const month = d.getMonth();


const filmSchedule = [
    {
        startMonth: 'March', 
        titleTop: 'MarchBatman', 
        titleBottom: 'MarchAmbulance'
    },
    {
        startMonth: 'April', 
        titleTop: 'Sing 2', 
        titleBottom: 'Morbius'
    },
    {
        startMonth: 'May', 
        titleTop: 'Batman', 
        titleBottom: 'Enchanto'
    },
    {
        startMonth: 'June', 
        titleTop: 'Top Gun: Maverick', 
        titleBottom: 'Jurassic World Dominion'
    },
    {
        startMonth: 'July', 
        titleTop: 'Downton Abbey: A New Era', 
        titleBottom: 'Ambulance'
    },
]

/* loop to cycle through array and match current month to film title*/
for (var i =0; i < filmSchedule.length; i++){
    if(filmSchedule[i].startMonth == monthByName[month]){
        document.getElementById('top-h1').innerHTML = filmSchedule[i].titleTop;
        document.getElementById('bottom-h1').innerHTML = filmSchedule[i].titleBottom;
    }
}
