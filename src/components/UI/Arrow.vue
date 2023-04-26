<template>
  <div class="arrow" ref="refArrow"></div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  name: 'ui-arrow',
  setup(props) {
    const refArrow = ref(null);

    const computeArrowOffset = () => {
      const gridWidth = refArrow.value.parentElement.clientHeight;
      // const cellWidth =
      // refArrow.value.parentElement.lastElementChild.clientHeight;

      const arrowOffset = Math.floor(gridWidth / 7) * 2;

      console.log(props);

      refArrow.value.style.left = `${arrowOffset}px`;
    };

    onMounted(computeArrowOffset);

    return {
      refArrow,
    };
  },
};
</script>

<style lang="scss" scoped>
@mixin timerAfterClass($side, $rotate) {
  --width: 58%;
  --height: 40px;
  --offset-top: -16px;

  content: '';
  position: absolute;
  top: var(--offset-top);
  #{$side}: 0;

  width: var(--width);
  height: var(--height);

  background-color: var(--color-player-first);
  border: 2px solid var(--color-edge);
  border-left: none;
  border-radius: 10px;

  transform: rotate($rotate);

  z-index: -1;
}

.arrow {
  position: absolute;
  top: 0;
  left: 0;
  width: 30px;
  height: 30px;
  background-color: var(--color-player-first);

  transform: translate(-50%, -100%);
  transition: left ease 0.6s;

  // &::after {
  //   @include timerAfterClass(right, 20deg);
  // }

  // &::before {
  //   @include timerAfterClass(left, -20deg);
  // }
}
</style>
