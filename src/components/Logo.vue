<template>
  <div class="logo">
    <div class="logo__point"></div>
    <div class="logo__point"></div>
    <div class="logo__point"></div>
    <div class="logo__point"></div>
  </div>
</template>

<script>
export default {
  name: 'c-logo',
};
</script>

<style lang="scss" scoped>
.logo {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 4px;
}

.logo__point {
  --size-point: 16px;

  width: var(--size-point);
  height: var(--size-point);

  background-color: var(--color-player-second);
  border: 2px solid var(--color-edge);
  border-radius: 50%;
  box-shadow: 0px 1px var(--color-edge);

  &:first-child,
  &:last-child {
    background-color: var(--color-player-first);
  }
}
</style>
