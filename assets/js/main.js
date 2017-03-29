(function ($, undefined) {
    var URL = "https://api.github.com/orgs/#{org}/repos?per_page=100&page=1";
    var organizations = ["globocom", "clappr", "thumbor", "tsuru", "galeb"];
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

    var ajaxWithURI = function(uri) {
      return $.ajax({
        dataType: "json",
        url: uri,
        beforeSend: function(xhr) {
          xhr.uri = uri;
        }
      });
    };

    for (var i = 0; i < organizations.length; i++) {
      var uri = URL.replace("#{org}", organizations[i]);
      AJAX.push(ajaxWithURI(uri));
    }

    var repos = [];
    var onRepos = function() {
      var rendered_repos = "";
      var args = arguments;
      var i;

      AJAX = [];

      if (!$.isArray(args[0][0])) {
        args = [args];
      }

      for ( i = 0, len = args.length; i < len; i++ ) {
        var githubObj = args[i][0],
            status = args[i][1],
            xhr = args[i][2];
        if (status !== "success") {
          xhr = args[i][0];
          if (console && console.log) {
            console.log("Failed to fetch " + xhr.uri + ", ignoring.");
          }
          continue;
        }
        if (!githubObj || githubObj.length === 0) {
          continue;
        }
        repos = repos.concat(githubObj);
        var links = xhr.getResponseHeader("Link");
        if (!links) {
          continue;
        }
        var nextMatch = links.match(/<(.*?)>; rel="next"/);
        if (nextMatch && nextMatch[1]) {
          AJAX.push(ajaxWithURI(nextMatch[1]));
        }
      }

      if (AJAX.length > 0) {
        $.when.apply($, AJAX).always(onRepos);
        return;
      }

      repos.sort(function (a, b) { return (a.stargazers_count < b.stargazers_count)? 1 :
        (a.stargazers_count > b.stargazers_count) ? -1 : 0; });

      for ( i = 0; i < repos.length; i++ ) {
        if (repos[i].name !== "IWantToWorkAtGloboCom") {
          rendered_repos += PROJECT.replace("#{title}", repos[i].name)
                          .replace("#{description}", repos[i].description)
                          .replace("#{html_url}", repos[i].html_url);
        }
      }

      $(".repos").empty();
      $(".repos").append(rendered_repos);
      $(".project").fadeIn(1000);
    };

    $.when.apply($, AJAX).always(onRepos);

    $.getJSON("https://api.github.com/orgs/globocom/public_members?page=1&per_page=100&callback=?", function(result) {
        if (result.data && result.data.length > 0) {
            var members = "", item = "";

            for (var i = 0; i < result.data.length; i++) {
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
