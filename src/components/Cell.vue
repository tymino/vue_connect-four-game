<template>
  <div class="cell">{{ data }}</div>
</template>

<script>
export default {
  name: 'c-cell',
  props: {
    data: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style lang="scss" scoped>
.cell {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 6vmin;
  height: 6vmin;
  background-color: var(--color-background);

  border-radius: 50%;
  border: 1px solid black;
}
</style>
