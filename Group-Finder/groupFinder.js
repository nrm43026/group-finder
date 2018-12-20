var controlsMain = document.getElementById("controls-main");
var controlsRaids = document.getElementById("controls-raids");
var controlsBossing = document.getElementById("controls-bossing");
var controlsMinigames = document.getElementById("controls-minigames");

function raidsFunction(){
	
	controlsMain.style.display = "none";
	controlsRaids.style.display = "block";
	
}

function bossingFunction(){
	
	controlsMain.style.display = "none";
	controlsBossing.style.display = "block";
	
}

function minigamesFunction(){
	
	controlsMain.style.display = "none";
	controlsMinigames.style.display = "block";
	
}

function cancelFunction(){
	controlsMain.style.display = "block";
	controlsRaids.style.display = "none";
	controlsBossing.style.display = "none";
	controlsMinigames.style.display = "none";
}