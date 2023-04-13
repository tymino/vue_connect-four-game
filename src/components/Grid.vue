<template>
  <div class="grid">
    <Cell
      v-for="(value, index) in gameGrid"
      :key="index"
      :value="value"
      :column="index % 7"
    />
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';

import Cell from '@/components/Cell.vue';

export default {
  name: 'c-grid',
  components: {
    Cell,
  },
  setup() {
    const store = useStore();

    return {
      gameGrid: computed(() => store.getters.getFlatGrid),
    };
  },
};
</script>

<style lang="scss" scoped>
.grid {
  --grid-padding: 12px;
  --grid-radius: 8%;

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
