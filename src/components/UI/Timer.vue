<template>
  <div class="timer">
    <div class="timer__text">{{ textInfo }}</div>
    <div class="timer__time">{{ time }}</div>
  </div>
</template>

<script>
export default {
  name: 'iu-timer',
  props: {
    textInfo: {
      type: String,
      default: "player 1's turn",
    },
    time: {
      type: String,
      default: '3s',
    },
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

.timer {
  position: relative;
  padding: 0px 20px 10px 20px;

  background-color: var(--color-player-first);
  border: 2px solid var(--color-edge);
  border-top: none;
  border-radius: 10px;
  box-shadow: 0px 6px var(--color-edge);

  color: var(--color-board);
  text-align: center;

  &::after {
    @include timerAfterClass(right, 20deg);
  }

  &::before {
    @include timerAfterClass(left, -20deg);
  }
}

.timer__text {
  text-transform: uppercase;
}

.timer__time {
  margin-top: 10px;
  font-size: 2.4rem;
  line-height: 2.4rem;
}
</style>
