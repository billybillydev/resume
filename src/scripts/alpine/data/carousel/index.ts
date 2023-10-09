export type CarouselInputs = {
  loop: boolean;
  slidesToShow: number;
};

export type CarouselOutputs = {
  items: HTMLElement[];
  activeIndex: number;
  activeItem: HTMLElement | null;
  loop: boolean;
  slidesToShow: number;
  init?: () => void;
  isActive: (index: number) => boolean;
  setActiveIndex: (index: number) => void;
  previous?: () => void;
  next?: () => void;
  areFirstSlidesToShow: () => boolean;
  areLastSlidesToShow: () => boolean;
};

export function carousel(carouselInputs: CarouselInputs): CarouselOutputs {
  return {
    items: this.$refs.carousel.children,
    activeIndex: 0,
    activeItem: null,
    loop: carouselInputs?.loop ?? false,
    slidesToShow: carouselInputs?.slidesToShow ?? 1,
    async init() {
      if (this.items.length) {
        this.$refs.carousel.children;
        this.activeItem = this.items[this.activeIndex];
        this.$refs.carousel.style.height = this.activeItem.clientHeight + "px";
        window.addEventListener("resize", () => {
          this.$refs.carousel.style.height =
            this.activeItem.clientHeight + "px";
        });
      }
      this.$watch("activeIndex", (value) => {
        this.$dispatch("selected-slide", { selectedIndex: value });
        this.activeItem = this.items[value];
        const activeItemBoundingClientRect =
          this.activeItem.getBoundingClientRect();
        const carouselBoundingClientRect =
          this.$refs.carousel.getBoundingClientRect();

        const xDistance =
          activeItemBoundingClientRect.x - carouselBoundingClientRect.x;
        const yDistance =
          activeItemBoundingClientRect.y - carouselBoundingClientRect.y;

        this.$refs.carousel.scrollBy(xDistance, yDistance);
      });
    },
    setActiveIndex(index: number) {
      this.activeIndex = index;
    },
    previous() {
      if (this.loop && this.areFirstSlidesToShow()) {
        this.activeIndex = this.items.length - this.slidesToShow;
      } else {
        this.activeIndex -= this.slidesToShow;
      }
    },
    next() {
      if (this.loop && this.areLastSlidesToShow()) {
        this.activeIndex = 0;
      } else {
        this.activeIndex +=
          this.activeIndex + this.slidesToShow < this.items.length
            ? this.slidesToShow
            : this.items.length % this.slidesToShow;
      }
    },
    isActive(index: number) {
      return this.activeIndex === index;
    },
    areFirstSlidesToShow() {
      return this.activeIndex < this.slidesToShow;
    },
    areLastSlidesToShow() {
      return this.activeIndex + this.slidesToShow >= this.items.length;
    },
  };
}
