//variables to hold data
var comment = ["Good job, keep it low!!!","Sugar monster. STOP!!!","Sugar monster is up. Hide your cookies!", "Yeah, you wish!"];
var score= [];


function get(){
	if(localStorage.getItem("points") !==null){
		score.push(parseInt(localStorage.getItem("points")));
		document.getElementById("points").innerHTML = score.reduce((a, b) => a + b, 0)+"g";
		if (score.reduce((a, b) => a + b, 0) > 50){
			document.getElementById("comment").innerHTML = comment[1];
			document.getElementById("points").style.backgroundColor="#da2f1d";
			document.getElementById("points").style.color="#fff";
		} else if (score.reduce((a, b) => a + b, 0) <= 50 && score.reduce((a, b) => a + b, 0) >= 30) {
			document.getElementById("comment").innerHTML = comment[2];
			document.getElementById("points").style.backgroundColor="#f3ba29";
			document.getElementById("points").style.color="#222";
		} else if (score.reduce((a, b) => a + b, 0) >= 0 && score.reduce((a, b) => a + b, 0) < 30) {
			document.getElementById("comment").innerHTML = comment[0];
			document.getElementById("points").style.backgroundColor="#09c111";
			document.getElementById("points").style.color="#fff";
		} else {
			document.getElementById("comment").innerHTML = comment[3];
		}
	} else {
		document.getElementById("points").innerHTML = 0+"g";
	}
}

function storeSugar(){
	//adds new question value from the input field to qAccepted array
	if(document.getElementById("question").value != ''){
		if(parseInt(document.getElementById("question").value) < 0){
			document.getElementById("comment").innerHTML = comment[3];
		} else if (parseInt(document.getElementById("question").value) >= 0) {
			//adds new score to score array
			score.push(parseInt(document.getElementById("question").value));
			//prints sum of scores from array score
			document.getElementById("points").innerHTML = score.reduce((a, b) => a + b, 0)+"g";
			//evaluates total score so far and prints comment
			if (score.reduce((a, b) => a + b, 0) > 50){
				document.getElementById("comment").innerHTML = comment[1];
				document.getElementById("points").style.backgroundColor="#da2f1d";
				document.getElementById("points").style.color="#fff";
				save();
			} else if (score.reduce((a, b) => a + b, 0) <= 50 && score.reduce((a, b) => a + b, 0) >= 30) {
				document.getElementById("comment").innerHTML = comment[2];
				document.getElementById("points").style.backgroundColor="#f3ba29";
				document.getElementById("points").style.color="#222";
				save();
			} else if (score.reduce((a, b) => a + b, 0) >= 0 && score.reduce((a, b) => a + b, 0) < 30) {
				document.getElementById("comment").innerHTML = comment[0];
				document.getElementById("points").style.backgroundColor="#09c111";
				document.getElementById("points").style.color="#fff";
				save();
			} else {
			document.getElementById("comment").innerHTML = comment[3];
			}
		}
	} 
}

function save(){
	//saves score from score array in local storage
	var pointsResult = score.reduce((a, b) => a + b, 0);
	localStorage.setItem("points", pointsResult);
}

//function clears local storage and reloads current page
function clearStorage(){
	localStorage.clear();
	location.reload();
}
