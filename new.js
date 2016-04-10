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
	var $tatooine = $("#tatooine");
	var $falcon = $("#falcon");
	var $deathStar = $("#death");
	var $xwing = $("#wing");

	var createDivs = function(length, class_name, array, ship) {
		for (var i=0; i < length; i++){
			var $newDiv = $("<div>");
			$newDiv.addClass (class_name);

			if (array[i] === "Obi Wan Kenobi"){
				$newDiv.attr ('id',"Obi");
			};
			$newDiv.append("<p>"+array[i]+"</p>");
			console.log($newDiv);
			ship.append($newDiv);
		};
	};

	var findLuke = function(){
		length = jedi.length;
		createDivs(length, "jedi", jedi, $tatooine);
	};

	var leaveTatooine = function(){
		$(".jedi").remove();
		var length = heroes.length;
		createDivs(length, "heroes", heroes, $falcon);
	};

	var findLeia = function(){
		$(".heroes").remove();
		// Put Leia on the death Star
		heroes.push(royalty);
		var length = heroes.length;
		createDivs(length, "heroes", heroes, $deathStar);
	};

	var vaderAndObi = function(){
		var $newDiv = $("<div>");
		$newDiv.addClass("vader");
		$newDiv.append("<p>"+darkside+"</p>")

		// Remove Obi Wan from the Death Star
		var $divs = $(".heroes");
		$($divs[1]).remove();

		$("#death").append($div);
		// Remove Obi Wan from the Heroes Array
		$deathStar.remove($("#Obi")); // removes from death star anything with id Obi
	};

	var retreat = function(){
		$(".heroes").remove();
		var length = heroes.length; //now without Obi Wan
		createDivs(length, "heroes", heroes, $falcon);
	};

	var battle = function(){		
		// Leia is safe on another shit, remove her from the falcon
		var $divs = $(".heroes");
		$($divs[3]).remove();
		heroes.splice(3,1);
		// Hard coded - Remove Leia from ship and array

		// Luke is getting in the X-wing, remove him from the falcon and Append Luke to the X-wing
		var $divs = $(".heroes");
		$($divs[0]).remove();
		$("#wing").append($divs[0]);

		// Make a div with the text for Darth Vader inside and Append Darth Vader to the Death Star
		var $div = $("<div>");
		$div.addClass("vader");
		$div.append("<p>"+darkside+"</p>");
		$("#death").append($div);

		// The Millenium Falcon and the X-wing have destroyed the death star, Remove the death star image
		$("#death").remove();
	};

////////////////////////////// CLICK EVENTS /////////////////////////////
	$tatooine.on('click', findLuke);
	$falcon.on('click', function(){
		//There are two functions available when a user clicks on the falcon
		if (escape === true){
			retreat();
		} else {
			leaveTatooine();
		};
		// How would you control this so the correct function runs at the correct time
	});
	$deathStar.on("click", function(){
		//There are two functions available when a user clicks on the deathStar
		if (time === "arrive"){
			findLeia();
			time = "depart";
		} else if (time === "depart"){
			vaderAndObi();
			escape = true;
		};
		// How would you control this so the correct function runs at the correct time
	});
	$xwing.on("click", battle);

}())//END OF IIFE



////////////////// NOTES /// AND COOL MOUSE OVER FEATURE //////////////

// .innerText - html code just shows like text
// .innerHTML - html tags will be rendered and not shown 

// var mouseOver = document.getElementById ("cordinates");
// var body = document.getElementById ("everything");

// document.addEventListener("DOMContentLoaded", function(){
// 	// waits for the page to be laoded 
// 	body.addEventListener("mousemove", function(event){
// 		mouseOver.innerHTML = ("X: " + event.x + ", Y: " + event.y);
// 	})
// });
