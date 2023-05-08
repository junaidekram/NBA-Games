const canvas = document.getElementById("game-area");
const c = canvas.getContext("2d");
//const guestT = document.getElementById("guest");
//const homeT = document.getElementById("home1");
var gscore;
var hscore;
function generateScores(){
    alert("work!")
}
function ShowResults(){
    const guestT = document.getElementById("guest");
    const homeT = document.getElementById("home1");
    const canvas = document.getElementById("game-area");
    const c = canvas.getContext("2d");
    var hometeam1 = homeT.value;
    var awayteam1 = guestT.value;
    if(hometeam1 == awayteam1){
        c.fillStyle = "green";
        c.fillText("Cannot have the same team as home and guest team", 0, 200)
    }else{

        console.log("ff")
        generateScores();
    }
}