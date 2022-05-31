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
        titleTop: 'AprilBatman', 
        titleBottom: 'AprilAmbulance'
    },
    {
        startMonth: 'May', 
        titleTop: 'MayBatman', 
        titleBottom: 'MayAmbulance'},
    {
        startMonth: 'June', 
        titleTop: 'JuneBatman', 
        titleBottom: 'JuneAmbulance'
    },
    {
        startMonth: 'July', 
        titleTop: 'JulyBatman', 
        titleBottom: 'JulyAmbulance'
    },
]

/* loop to cycle through array and match current month to film title*/
for (var i =0; i < filmSchedule.length; i++){
    if(filmSchedule[i].startMonth == monthByName[month]){
        document.getElementById('top-h1').innerHTML = filmSchedule[i].titleTop;
    }
}
