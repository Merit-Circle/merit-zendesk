/* eslint no-unused-vars: ["error", { "args": "none" }] */
(function ($, window, document) {
  function getPrefersReducedMotion() {
    const QUERY = '(prefers-reduced-motion: reduce)';
    const mediaQueryList = window.matchMedia(QUERY);
    const prefersReducedMotion = mediaQueryList.matches;
    return prefersReducedMotion;
  }
  const HeroUnit = {
    init() {
      this.cacheElements();

      if (this.$heroUnit.length) {
        this.bindEvents();
      }
    },
    cacheElements() {
      this.$window = $(window);
      this.$heroUnit = $('[data-hero-unit]');
      this.$heroUnitBg = this.$heroUnit.find('[data-hero-bg]');
    },
    bindEvents() {
      this.$window.on('scroll', this.handleScroll.bind(this));
      this.$heroUnit.find('#query').focus();
    },
    handleScroll() {
      const scrolled = this.$window.scrollTop();

      this.$heroUnitBg.css({
        '-moz-transform': `translate3d(0px,${scrolled / -3}px, 0px)`,
        '-webkit-transform': `translate3d(0px,${scrolled / -3}px, 0px)`,
        transform: `translate3d(0px,${scrolled / -3}px, 0px)`,
      });
    },
  };

  $(() => {
    if (!getPrefersReducedMotion()) {
      HeroUnit.init();
    }
  });
}(jQuery, window, document));
