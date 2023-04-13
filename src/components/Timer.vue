<template>
  <div class="timer">
    <div class="timer__text">{{ textInfo }}</div>
    <div class="timer__time">{{ time }}</div>
  </div>
</template>

<script>
export default {
  name: 'c-timer',
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
.timer {
  --width: 58%;
  --height: 40px;
  --offset-top: -16px;

  position: relative;
  padding: 0px 20px 10px 20px;

  background-color: var(--color-player-first);
  border: 2px solid var(--color-edge);
  border-top: none;
  border-radius: 10px;
  box-shadow: 0px 6px var(--color-edge);

  color: var(--color-board);
  text-align: center;
}

.timer::after {
  content: '';
  position: absolute;
  top: var(--offset-top);
  right: 0;

  width: var(--width);
  height: var(--height);

  background-color: var(--color-player-first);
  border: 2px solid var(--color-edge);
  border-left: none;
  border-radius: 10px;

  transform: rotate(20deg);

  z-index: -1;
}

.timer::before {
  content: '';
  position: absolute;
  top: var(--offset-top);
  left: 0;

  width: var(--width);
  height: var(--height);

  background-color: var(--color-player-first);
  border: 2px solid var(--color-edge);
  border-right: none;
  border-radius: 10px;

  transform: rotate(-20deg);

  z-index: -1;
}

.timer__text {
  text-transform: uppercase;
}

.timer__time {
  font-size: 2.4rem;
  line-height: 2.4rem;
}
</style>
