<template>
  <div class="grid">
    <Cell v-for="c in Array(6 * 7).fill(0)" :key="c" :data="0" />
  </div>
</template>

<script>
import Cell from '@/components/Cell.vue';

export default {
  name: 'c-grid',
  components: {
    Cell,
  },
};
</script>

<style lang="scss" scoped>
.grid {
  --grid-padding: 10px;
  --grid-radius: 8%;

  display: grid;
  grid-template-columns: repeat(7, auto);
  grid-template-rows: repeat(6, auto);
  grid-gap: var(--grid-padding);
  padding: var(--grid-padding);

  background-color: var(--color-board);
  border: 2px solid var(--color-edge);
  border-radius: var(--grid-radius);
}
</style>
