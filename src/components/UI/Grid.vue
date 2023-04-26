<template>
  <div class="grid">
    <Arrow />
    <Cell
      v-for="(value, index) in gameGrid"
      :key="index"
      :value="value"
      :column="index % 7"
      @click="handleCellClick"
    />
  </div>
</template>

<script>
import Arrow from '@/components/UI/Arrow.vue';
import Cell from '@/components/UI/Cell.vue';

export default {
  name: 'c-grid',
  components: {
    Arrow,
    Cell,
  },
  props: {
    gameGrid: {
      type: Array,
      required: true,
    },
    handleCellClick: {
      type: Function,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.grid {
  --grid-padding: 12px;
  --grid-radius: 8%;

  position: relative;
  display: grid;
  grid-template-columns: repeat(7, auto);
  grid-template-rows: repeat(6, auto);
  grid-gap: var(--grid-padding);
  padding: var(--grid-padding);
  padding-bottom: calc(var(--grid-padding) * 4);

  background-color: var(--color-board);
  border: 2px solid var(--color-edge);
  border-radius: var(--grid-radius);
  box-shadow: 0px 8px var(--color-edge);
}
</style>
