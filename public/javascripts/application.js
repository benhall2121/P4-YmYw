// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults
$(document).ready(function() {
	$('#mainPostContainer').movingBoxes({
		startPanel   : 3,      // start with this panel
		width        : 800,    // overall width of movingBoxes (not including navigation arrows)
		panelWidth   : .7,     // current panel width adjusted to 70% of overall width
		imageRatio   : 16/9,   // Image ratio set to 16:9
		buildNav     : true,   // if true, navigation links will be added
		navFormatter : function(index, panel){ return panel.find('span.dropdown').text(); } // function which gets nav text from span inside the panel header
	});
});

