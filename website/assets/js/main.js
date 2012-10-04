(function ($, undefined) {

    var uri = "https://api.github.com/users/globocom/repos?callback=?"
        + "&per_page=100"
        + "&page=1"
        + "&sort=pushed";

    var PROJECT = '<div class="span4 project hide">' +
			       '	<div class="container-inner">' +
				   '      <h2>#{title}</h2>' +
				   '      <p class="description">#{description}</p>' +
				   '      <a class="btn" href="#{html_url}">view details &raquo;</a>' +
			       '  	</div>' +
			       '	<div class="countdown-break"></div>' +
			       '</div>';

    var MEMBER = '<li class="span2 member hide">' +
			       '	<img class="photo" src="#{url}" width="50" height="50">' +
			       '	<a class="url" href="#{url}">@#{login}</a>' +
			       '</li>';


	$.getJSON(uri, function (result) {
	  if (result.data && result.data.length > 0) {

	  	var repos = "", item = "";

	  	for ( var i = 0; i < result.data.length ; i++ ) {

	  		repos += PROJECT.replace("#{title}", result.data[i].name)
                       		.replace("#{description}", result.data[i].description)
	  						.replace("#{html_url}", result.data[i].html_url);

	  	}

	  	$(".repos").empty().append(repos);
	  	$(".project").fadeIn(1000);
	  }
	});

	$.getJSON("https://api.github.com/orgs/globocom/members?callback=?", function (result) {
	    if (result.data && result.data.length > 0) {

		  	var members = "", item = "";

		  	for ( var i = 0; i < result.data.length ; i++ ) {

		  		members += MEMBER.replace("#{url}", result.data[i].avatar_url)
		  						 .replace("#{login}", result.data[i].login)
		  						 .replace("#{url}", result.data[i].url
		  						 								  .replace("api.", "")
		  						 								  .replace("users/", ""));

		  	}

		  	$(".members").empty().append(members);
		  	$(".member").fadeIn(1000);
		  }

	});

})(jQuery);
