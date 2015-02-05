(function ($, undefined) {

    var URL = "https://api.github.com/orgs/#{org}/repos?callback=?&per_page=100&page=1";
    var organizations = ["globocom", "clappr", "thumbor", "tsuru"];

    var PROJECT = '<div class="span4 project hide">' +
                   '    <div class="container-inner">' +
                   '      <h2>#{title}</h2>' +
                   '      <p class="description">#{description}</p>' +
                   '      <a class="btn" href="#{html_url}">view details &raquo;</a>' +
                   '    </div>' +
                   '    <div class="countdown-break"></div>' +
                   '</div>';

    var MEMBER = '<li class="span2 member hide">' +
                   '    <img class="photo" src="#{url}" width="50" height="50">' +
                   '    <a class="url" href="#{url}">@#{login}</a>' +
                   '</li>';

    var AJAX = [];

    for ( var i = 0; i < organizations.length ; i++ ) {

      var uri = URL.replace("#{org}", organizations[i]);
      AJAX.push($.getJSON(uri));

    }

    $.when.apply( $, AJAX ).done( function() {

      var repos = [];
      var rendered_repos = "";

      for ( var i = 0, len = arguments.length; i < len; i++ ) {
        if (arguments[i][0].data && arguments[i][0].data.length > 0 && arguments[i][1] === "success") {
          repos = repos.concat(arguments[i][0].data);
        }
      }

      repos.sort(function (a, b) { return (a.stargazers_count < b.stargazers_count)? 1 :
        (a.stargazers_count > b.stargazers_count) ? -1 : 0; });

      for ( i = 0; i < repos.length; i++ ) {

        rendered_repos += PROJECT.replace("#{title}", repos[i].name)
                        .replace("#{description}", repos[i].description)
                        .replace("#{html_url}", repos[i].html_url);

      }

      $(".repos").empty();
      $(".repos").append(rendered_repos);
      $(".project").fadeIn(1000);

    });

    $.getJSON("https://api.github.com/orgs/globocom/public_members?page=1&per_page=100&callback=?", function (result) {
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
