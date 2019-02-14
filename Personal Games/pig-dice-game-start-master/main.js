// PIG GAME

// Global Variables
let player1 = {
    totalPts: 0,
    turnPts: 0
}
let player2 = {
    totalPts: 0,
    turnPts: 0
}
// Event Listeners
document.getElementById("p1-roll").addEventListener("click", p1Roll);
document.getElementById("p2-roll").addEventListener("click", p2Roll);
document.getElementById("p1-hold").addEventListener("click", p1Hold);
document.getElementById("p2-hold").addEventListener("click", p2Hold);

// Event Functions
function p1Roll() {
    // Roll and Update Dice Image
    let rollNum = Math.randomInt(1, 7);
    document.getElementById("p1-roll-img").src = "images/dice" + rollNum + ".png";

    // Check Roll and Take Action based on 1 or not
    if(rollNum != 1) {
        // Update Points
        player1.turnPts += rollNum;
        document.getElementById("p1-turn-points").innerHTML = player1.turnPts;
    } else {
        // Lose Turn Pts
        player1.turnPts = 0;
        document.getElementById("p1-turn-points").innerHTML = player1.turnPts;

        // Switch Turns
        document.getElementById("p1-header").classList.remove("active");
        document.getElementById("p2-header").classList.add("active");
        document.getElementById("p1-roll").disabled = true;
        document.getElementById("p1-hold").disabled = true;
        document.getElementById("p2-roll").disabled = false;
        document.getElementById("p2-hold").disabled = false;
    }
}

function p2Roll() {
    // Roll and Update Dice Image
    let rollNum = Math.randomInt(1, 7);
    document.getElementById("p2-roll-img").src = "images/dice" + rollNum + ".png";

    // Check Roll and Take Action based on 1 or not
    if(rollNum != 1) {
        // Update Points
        player2.turnPts += rollNum;
        document.getElementById("p2-turn-points").innerHTML = player2.turnPts;
    } else {
        // Lose Turn Pts
        player2.turnPts = 0;
        document.getElementById("p2-turn-points").innerHTML = player2.turnPts;

        // Switch Turns
        document.getElementById("p2-header").classList.remove("active");
        document.getElementById("p1-header").classList.add("active");
        document.getElementById("p2-roll").disabled = true;
        document.getElementById("p2-hold").disabled = true;
        document.getElementById("p1-roll").disabled = false;
        document.getElementById("p1-hold").disabled = false;
    }
}
