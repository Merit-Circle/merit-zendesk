(function ($, window, document) {
  const Breadcrumbs = {
    init() {
      this.addHomeLink();
    },
    addHomeLink() {
      if ($('[data-breadcrumb-home]').length === 0) {
        $('.breadcrumbs').prepend(
          '<li data-breadcrumb-home><a href="https://sphere.market/" target="_blank">Home</a></li>'
        );
      }
    },
  };

  $(() => {
    Breadcrumbs.init();
  });
})(jQuery, window, document);
