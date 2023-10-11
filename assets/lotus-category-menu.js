(function () {
  // @ts-check;

  window.Theme = window.Theme || {};
  window.Theme.categoryMenu = () => ({
    categories: [],
    fetchCategories() {
      $(window).on('apiDataFetched', (e, data) => {
        this.categories = data.categories;
      });
    },
  });
}());
