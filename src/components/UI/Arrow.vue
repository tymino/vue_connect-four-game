<template>
  <div class="arrow-container" ref="refArrow">
    <div class="arrow" v-if="lastColumn"></div>
  </div>
</template>

<script>
import { ref, onUpdated } from 'vue';

export default {
  name: 'ui-arrow',
  props: {
    lastColumn: {
      type: [Number, null],
      required: true,
    },
  },

  setup(props) {
    const refArrow = ref(null);

    const computeArrowOffset = () => {
      const gridPaddingAndGap = Number(
        getComputedStyle(document.body)
          .getPropertyValue('--grid-padding')
          .replace(/px/, '')
      );

      const cellDiv = refArrow.value.parentElement.firstElementChild;
      const cellWidth = cellDiv.getBoundingClientRect().width;

      const blockForStep = gridPaddingAndGap + cellWidth;
      const arrowOffset = blockForStep * props.lastColumn - cellWidth / 2;

      refArrow.value.style.left = `${arrowOffset}px`;
    };

    onUpdated(computeArrowOffset);

    return {
      refArrow,
    };
  },
};
</script>

<style lang="scss" scoped>
@mixin timerAfterClass($side, $rotate) {
  --width: 21px;
  --height: 14px;
  --offset-bottom: -7px;

  content: '';
  position: absolute;
  bottom: var(--offset-bottom);
  #{$side}: -1px;

  width: var(--width);
  height: var(--height);

  background-color: var(--color-player-first);
  border: 2px solid var(--color-edge);
  border-left: none;
  border-top: none;
  border-radius: 6px;

  transform: rotate($rotate);

  z-index: -1;
}

.arrow-container {
  position: absolute;
  top: -16px;
  left: 0;

  transform: translate(-50%, -100%);
  transition: left ease 0.6s;
}
.arrow {
  position: relative;

  width: 32px;
  height: 20px;
  background-color: var(--color-player-first);
  border: 2px solid var(--color-edge);
  border-bottom: none;
  border-radius: 6px;
  box-shadow: 0px -2px var(--color-edge);

  &::after {
    @include timerAfterClass(right, -45deg);
  }

  &::before {
    @include timerAfterClass(left, 45deg);
  }
}
</style>
