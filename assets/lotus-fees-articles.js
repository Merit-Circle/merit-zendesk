(function () {
  // @ts-check;

  window.Theme = window.Theme || {};
  window.Theme.feesArticles = () => ({
    articles: [],
    fetchArticles() {
      $(window).on('apiDataFetched', (e, data) => {
        const filteredArticles = ApiData.filterByLabelName(data, 'fees');
        filteredArticles.articles.forEach((el) => {
          el.excerpt = `${$(el.body).text().substring(0, 180)}...`;
        });
        const limit = Number(LotusConfig.feesArticlesMax);
        filteredArticles.articles.slice(limit);
        this.articles = filteredArticles.articles;

        setTimeout(() => {
          $('[data-carousel-articles]').slick({
            arrows: true,
            dots: false,
            fade: false,
            autoplay: false,
            infinite: false,
            slidesToShow: 3,
            slide: 'li',
            slidesToScroll: 1,
            responsive: [
              {
                breakpoint: 991,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                },
              },
              {
                breakpoint: 767,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                },
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                },
              },
            ],
          });
        }, 1000);
      });
    },
  });
})();
