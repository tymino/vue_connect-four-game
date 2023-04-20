<template>
  <div class="result">
    <div class="result__winner">{{ winner }}</div>
    <div class="result__text">wins</div>
    <div class="result__button">
      <Button className="game contrast">play again</Button>
    </div>
  </div>
</template>

<script>
import Button from '@/components/UI/Button.vue';

export default {
  name: 'c-result',
  components: {
    Button,
  },
  props: {
    winner: {
      type: String,
      default: 'c 0',
    },
  },
};
</script>

<style lang="scss" scoped>
.result {
  padding: 8px 26px;
  background-color: var(--color-board);
  border: 2px solid var(--color-edge);
  border-radius: 10px;
  box-shadow: 0px 6px var(--color-edge);

  color: var(--color-edge);
  text-align: center;
}

.result__winner {
  font-size: 0.8rem;
  font-weight: var(--font-bold);
  text-transform: uppercase;
}
.result__text {
  font-size: 2.2rem;
  line-height: 2.4rem;
  font-weight: var(--font-bold);
  text-transform: uppercase;
}
</style>
