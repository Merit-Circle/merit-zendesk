(function () {
  // @ts-check;

  window.Theme = window.Theme || {};
  window.Theme.topArticles = () => ({
    articles: [],
    fetchArticles() {
      $(window).on('apiDataFetched', (e, data) => {
        const filteredArticles = ApiData.filterByLabelName(data, 'top');
        filteredArticles.articles.forEach((el) => {
          el.excerpt = `${$(el.body).text().substring(0, 180)}...`;
        });
        const limit = Number(LotusConfig.topArticlesMax);
        filteredArticles.articles.slice(limit);
        this.articles = filteredArticles.articles;
      });
    },
  });
})();
