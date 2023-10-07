export function progressData(
  value: number = 100,
  interval,
  noAnimation: boolean = false
) {
  return {
    async init() {
      if (this.noAnimation) {
        this.interval = 0;
        this.progress = this.max;
        await this.$nextTick();
        this.$dispatch("track", { value: this.progress });
      } else {
        this.progressInterval = setInterval(() => {
          this.progress += 1;
          this.$dispatch("track", { value: this.progress });
          if (this.progress >= this.max) {
            clearInterval(this.progressInterval);
          }
        }, this.interval);
      }
    },
    progress: 0,
    max: value,
    progressInterval: null,
    interval: interval,
    noAnimation,
  };
}
