$(document).ready(function(){ //WRAP SHIT IN IIFE

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

// Used for conditionals of function calls at the end
	var time = "arrive";
	var escape = false;

	///////////////////////// Making Your Story /////////////////////////

//target the different DOM elements
	var tatooine = $("#tatooine");
	var falcon = $("#falcon");
	var deathStar = $("#death");
	var xwing = $("#wing");


	var findLuke = function(){
		// loop through both of them 
		for (var i=0; i < jedi.length; i++){
			// One div for obi wan and one for luke
			// These divs will have a class called jedi
			var $div = $("<div>");
			$div.addClass("jedi")
			// Make divs that will have the text in the jedi array
			$div.append("<p>"+jedi[i]+"</p>")
			// These divs should be appended to tatooine
			$("#tatooine").append($div);
		}

	};

	var leaveTatooine = function(){
		// debugger;
		// Remove Obi Wan and Luke from Tatooine
		// var $divs = $(".jedi");
		// console.log ($divs);

		// while ($divs[0]!== undefined) {
			$(".jedi").remove();
		// };
		
		// Put Obi Wan, Luke, Han, and Chewy on the Millenium Falcon
		// This will be easier if you combine these two groups using the already defined "heroes" variable up top
		// Give each hero element their own div
		// Give all the newly created divs a class called "heroes"
		// Append all the new heroes divs to the Millenium Falcon

		for (i = 0; i < heroes.length; i++) { 
    		var $div = $("<div>");
    		$div.addClass("heroes")
			$div.append("<p>"+heroes[i]+"</p>")
			// These divs should be appended to tatooine
			$("#falcon").append($div);
			} 
		console.log(falcon);
	};

	var findLeia = function(){
		// Remove all characters from the falcon
		// var divs = document.getElementsByClassName("heroes");
		// console.log (divs);

		// while (divs[0]!== undefined) {
		// 	falcon.removeChild(divs[0]);
		// };
		$(".heroes").remove();

		// Put Leia on the death Star
		// Leia is in her own variable right now, how can we put her with the other heroes?
		heroes.push(royalty);
		// console.log(heroes);

		// Put them on the Death Star
		// Give all the heroes their own div elements
		// Append the hero divs to the death star
		// Give all the hero divs a class of "heroes"
		for (i = 0; i < heroes.length; i++) { 
    		var $div = $("<div>");
    		$div.addClass("heroes")
			$div.append("<p>"+heroes[i]+"</p>")
			$("#death").append($div);
			} 
	};

	var vaderAndObi = function(){
		// DARTH VADER HAS APPEARED!!! (**Play Christopher Nolan Loud Background Noise**)
		// Obi Wan has been struck down!!!

		// Make a div with the text for Darth Vader inside.
		// Give that div a class for "vader"
		var $div = $("<div>");
		$div.addClass("vader");
		$div.append("<p>"+darkside+"</p>")
		console.log($div);

		// Remove Obi Wan from the Death Star
		var $divs = $(".heroes");
		$($divs[1]).remove();

		// // Append Darth Vader to the Death Star
		$("#death").append($div);

		// Remove Obi Wan from the Heroes Array
		heroes.splice(1,1);
		// this will remove 1 item from the array at position 1. (position, n items to remove)
		console.log(heroes);
	};

	var retreat = function(){
		// Obi Wan gave the rest of the heroes time to retreat
		// Remove the heroes from the Death Star
		// var divs = document.getElementsByClassName("heroes");
		// console.log (divs);

		// while (divs[0]!== undefined) {
		// 	deathStar.removeChild(divs[0]);
		// };

		$(".heroes").remove();

		// Append the heroes to the falcon
		// All heroes must have their own divs
		// All hero divs must have a class "heroes"
		for (i = 0; i < heroes.length; i++) { 
    		var $div = $("<div>");
    		$div.addClass("heroes");
    		$div.append("<p>"+heroes[i]+"</p>");
    		$("#falcon").append($div);
		} 
		console.log(falcon);
	};

	var battle = function(){
		// Leia is safe on another shit
		// Remove her from the falcon
		var $divs = $(".heroes");
		$($divs[3]).remove();

		// Remove Leia from the heroes array
		heroes.splice(3,1);

		// Luke is getting in the X-wing
		// Remove him from the falcon
		var $divs = $(".heroes");
		$($divs[0]).remove();

		// Append Luke to the X-wing
		// console.log($divs[0]);
		$("#wing").append($divs[0]);

		// Make a div with the text for Darth Vader inside.
		// Give that div a class for "vader"
		var $div = $("<div>");
		$div.addClass("vader");
		$div.append("<p>"+darkside+"</p>");

		// Append Darth Vader to the Death Star
		$("#death").append($div);

		// The Millenium Falcon and the X-wing have destroyed the death star
		// Remove the death star image
		$("#death").remove();
	};


////////////////////////////// CLICK EVENTS /////////////////////////////
	tatooine.on('click', findLuke);
	falcon.on('click', function(){
		//There are two functions available when a user clicks on the falcon
		if (escape === true){
			retreat();
		} else {
			leaveTatooine();
		};
		// How would you control this so the correct function runs at the correct time
	});
	deathStar.on("click", function(){
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
	xwing.on("click", battle);
	

}())//END OF IIFE


