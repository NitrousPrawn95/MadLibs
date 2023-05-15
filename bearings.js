alert("Welcome. You know have the opportunity to change the fabric of time and space as we know it. Let's begin.")

function startWW3() {
var year = document.querySelector('input[name="year"]:checked').value;

var per_name = document.getElementById("per_name").value;

var firstCountry = document.getElementById("firstCountry").value;

var badCountry = document.getElementById("badCountry").value;

var favCountry = document.getElementById("favCountry").value;

var ww3Scenario = "It is the year " + year + ". " + per_name + " works inside the official " + firstCountry + " bunker. " + per_name + " has just received news of an inbound thermonuclear missile strike on the bunker. " + " Upon further inspection from a satellite, they are able to make out a message from the missile's hull. " + " It reads: From " + badCountry + " with love xoxo <3. " +  per_name +  " decides to call for " + favCountry +"’s help." + 
" However, as it turns out, " + favCountry + " is friends with " +  badCountry + "." + " A nuclear submarine appears on " +  per_name + "’s radar, and before " + per_name +  " can do anything, they are obliterated with massive precision."

document.getElementById("ww3Scenario").innerHTML = ww3Scenario;
}
