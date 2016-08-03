//variables to hold data
var comment = ["Good job, stay below 30g!!!","Stop, you eat too much sugar!!!"];
var score= [];


function get(){
	if(localStorage.getItem("points") !==null){
		score.push(parseInt(localStorage.getItem("points")));
		document.getElementById("points").innerHTML = score.reduce((a, b) => a + b, 0)+"g";
		if (score.reduce((a, b) => a + b, 0) > 30){
			document.getElementById("comment").innerHTML = comment[1];
		} else {
			document.getElementById("comment").innerHTML = comment[0];
		}
	} else {
		document.getElementById("points").innerHTML = 0+"g";
	}
}

function storeSugar(){
	//adds new question value from the input field to qAccepted array
	if(document.getElementById("question").value != ''){
		//adds new score to score array
		score.push(parseInt(document.getElementById("question").value));
		//prints sum of scores from array score
		document.getElementById("points").innerHTML = score.reduce((a, b) => a + b, 0)+"g";
		//evaluates total score so far and prints comment
		if (score.reduce((a, b) => a + b, 0) > 30){
			document.getElementById("comment").innerHTML = comment[1];
			save();
		} else {
			document.getElementById("comment").innerHTML = comment[0];
			save();
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
