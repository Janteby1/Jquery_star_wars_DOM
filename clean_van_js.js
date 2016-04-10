(function start(){ //WRAP SHIT IN IIFE
	
//characters
	var jedi = [
		"Luke Skywalker",
		"Obi Wan Kenobi"
	];
	var millenium = [
		"Han Solo",
		"Chewbacca"
	];
	var royalty = "Leia Organa";
	var darkside = "Darth Vader";

//combine characters for falcon
	var heroes = jedi.concat(millenium);

//Values for Control Flow with click events
	var time = "arrive";
	var escape = false;

	///////////////////////// Making Your Story /////////////////////////

//target the different DOM elements
	var tatooine = document.getElementById("tatooine");
	var falcon = document.getElementById("falcon");
	var deathStar = document.getElementById("death");
	var xwing = document.getElementById("wing");

	var createDivs = function(length, class_name, array, ship) {
		for (var i=0; i < length; i++){
			var newDiv = document.createElement("div");
			newDiv.setAttribute("class",class_name)
			if (array[i] === "Obi Wan Kenobi"){
				newDiv.setAttribute("id","Obi") 
			};
			var newContent = document.createTextNode(array[i]);
			newDiv.appendChild(newContent);
			ship.appendChild(newDiv);
		};
	};

	var removeDiv = function (class_name, div){
		var remove = document.getElementsByClassName(class_name);
		var length = remove.length;
		for (var i=0; i < length; i++){
			div.removeChild(remove[0]);
		};
	};

	var findLuke = function(){
		length = jedi.length;
		createDivs(length, "jedi", jedi, tatooine);
	};

	var leaveTatooine = function(){
		removeDiv("jedi", tatooine);
		var length = heroes.length;
		createDivs(length, "heroes", heroes, falcon);
	};

	var findLeia = function(){
		removeDiv("heroes", falcon);
		heroes.push(royalty);
		var length = heroes.length;
		createDivs(length, "heroes", heroes, deathStar);
	};

	var vaderAndObi = function(){
		var newDiv = document.createElement("div");
		newDiv.setAttribute("class","Vader")
		var newContent = document.createTextNode(darkside);
		newDiv.appendChild(newContent);
		deathStar.appendChild(newDiv);

		// Remove Obi Wan from the Death Star
		deathStar.removeChild(document.getElementById("Obi"));
		// Remove Obi Wan from the Heroes Array
		heroes.splice(1, 1); // this is Obi Wan
	};

	var retreat = function(){
		removeDiv("heroes", deathStar);
		var length = heroes.length; //now without Obi Wan
		createDivs(length, "heroes", heroes, falcon);
	};

	var battle = function(){		
		var depart = document.getElementsByClassName("heroes");
		var length = depart.length;

		// Remove Leia from the falcon
		// Remove Luke from the falcon
		for(var i=0; i<length; i++){
			console.log(depart.length);

			if (depart[i].innerHTML === "Luke Skywalker" || depart[i].innerHTML === "Leia Organa"){
				falcon.removeChild(depart[i]);
				i-=1
				length -= 1
			};
		};

		// Remove Leia from the heroes array
		// ?! 

		// Append Luke to the X-wing
		var div = document.createElement("div");
		div.innerHTML = "Luke Skywalker";
		xwing.appendChild(div);

		// The Millenium Falcon and the X-wing have destroyed the death star
		// Remove the death star image
		deathStar.remove()
	};

////////////////////////////// CLICK EVENTS /////////////////////////////
	tatooine.addEventListener('click', findLuke);
	var click = 0
	falcon.addEventListener('click', function(){
		//There are two functions available when a user clicks on the falcon
		if (click < 1){
			leaveTatooine();
			click ++;
		} else {
			retreat();
		};
	});
	var clicked = 0
	deathStar.addEventListener("click", function(){
		//There are two functions available when a user clicks on the deathStar
		if (clicked < 1){
			findLeia();
			clicked ++;
		} else {
			vaderAndObi();
		};
	});
	xwing.addEventListener("click", battle);
}())//END OF IIFE



////////////////// NOTES /// AND COOL MOUSE OVER FEATURE //////////////

// .innerText - html code just shows like text
// .innerHTML - html tags will be rendered and not shown 

var mouseOver = document.getElementById ("cordinates");
var body = document.getElementById ("everything");

document.addEventListener("DOMContentLoaded", function(){
	// waits for the page to be laoded 
	body.addEventListener("mousemove", function(event){
		mouseOver.innerHTML = ("X: " + event.x + ", Y: " + event.y);
	})
});
