'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})


//<strong>$(this).text</strong><strong>(</strong>anagrammedName($(this).text())<strong>)</strong>;

function initializePage() 
{
  console.log("Javascript connected!");
  $('.friendName').click(listenerfunction);
}

function listenerfunction(e)
{
	e.preventDefault();
	console.log("friend name", $(this).text());
	$(this).text(anagrammedName($(this).text()));
}



function anagrammedName(name) {
	// Thanks, Internet Anagram Server!
	//name.preventDefault();
	
	if (name == "Doug Engelbart") {
		return "Notable Grudge";
	} 
	else if (name == "Ivan Sutherland") {
		return "Vandal Heist Run";
	}
	else if (name == "JCR Licklider") {
		return "Crick Rid Jell";
	}
	else if (name == "Vannevar Bush") {
		return "Ravens Van Hub";
	}
	else if (name == "Alan C. Kay") {
		return "Canal Yak";
	}
	else if (name == "Allen Newell") {
		return "Ellen All New";
	}
	else if (name == "Lucy Suchman") {
		return "Lunacy Chums";
	}
	else if (name == "Grace Hopper") {
		return "Gear Chopper";
	}
	else {
		console.log("Start"+name+"end" + " not known for anagramming.");
		return name;
	}
}