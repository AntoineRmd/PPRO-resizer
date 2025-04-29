/* Create an instance of CSInterface. */
var csInterface = new CSInterface();

const resolutionInputs = `
    <input type="number" id="resolutionWidth" min="1">
    <input type="number" id="resolutionHeight" min="1">`;

function getTargetResolution(){
	const resolution = document.getElementById('resolutionSelector').value;
	if (resolution == "custom"){
		// inject resolutionInputs in HTML
	}
	// get the width and height values

	// else, make a dict and match the entry to the correct width and height values
}