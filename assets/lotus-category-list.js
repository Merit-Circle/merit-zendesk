(function ($) {
  const CategoryList = {
    init() {
      this.showCategories();
    },
    showCategories() {
      if ($('[data-category-item-id]').length > 0) {
        const visibleCategories = LotusConfig.categoryListIds.split(',');
        visibleCategories.forEach((el) => {
          $(`[data-category-item-id="${el}"]`).removeClass(LotusConfig.css.hiddenClass);
        });
      }
    },
  };

  $(() => {
    CategoryList.init();
  });
}(jQuery));
