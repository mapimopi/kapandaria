function listingsReady() {
	// Change background of listings when hovering
	$('.thumbnail').hover(
		function() {
	            $(this).css('background-color', '#BCBCBC');}, 
	    function() {
	            $(this).css('background-color', '#FFFFFF');}
	);

	var el = $("#form-field-tags");
	if (el.length) {
		el.tag({
			placeholder: "Enter new locations ...",
			source: window.locations
		});
	}

	$(".edit_listing, .new_listing").submit(function() {
		el = $("#form-field-tags");
		el[0].value = el.val().split(', ');
		return true;
	});

	// Moving the search box
	el = $('div[role=\'search\']')[0];
	if (el) {
		$('div[role=\'search\']')[0].remove();
		$(el).appendTo('.navbar-search');  
	}
	// Moving the advanced search tools
	el = $('div[role=\'advanced-search\']')[0];
	if (el) {
		$('div[role=\'advanced-search\']')[0].remove();
		$(el).appendTo('.navbar-advanced-search');  
	}

	$("#show-advanced-search").on("click", function () {
		var icon = this.children[0]
		if (icon.getAttribute("class") == "glyphicon glyphicon-chevron-down") {
			// expand
			$(".navbar-default").css("max-height", '406px');
			icon.setAttribute("class", "glyphicon glyphicon-chevron-up")
		} else {
			// shrink
			$(".navbar-default").css("max-height", '52px');
			icon.setAttribute("class", "glyphicon glyphicon-chevron-down")
		}
	});


	// Search
	var query;
	function doSearch () {
		console.log("search");
	}

	var timer;
	function delaySearch () {
		timer = setTimeout(doSearch, 1200);
	}

	$("#search-box").on("input", delaySearch);
	$(".tags input[type='text']").on("input", delaySearch);
	$(".tags input[type='text']").on("blur", doSearch);
	$(document).on("click", ".tag .close", doSearch);
	$("#women_only").on("change", doSearch);
};

$(document).ready(listingsReady);
$(document).on("page:load", listingsReady);
