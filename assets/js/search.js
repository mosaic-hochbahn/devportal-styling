// Docs for options and further customization can be found:
// https://fomantic-ui.com/modules/search.html
$(document).ready(function() {
    $('.ui.search')
      .search({
          apiSettings: {
              url: '/docs/api/search?term={query}'
          },
          maxResults: 7,
          minCharacters: 2,
      });
});

