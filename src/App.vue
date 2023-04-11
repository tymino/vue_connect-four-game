<template>
  <div class="content">
    <div class="header">
      <Button>menu</Button>
      <div class="logo">oo</div>
      <Button>restart</Button>
    </div>
    <Grid />
  </div>
</template>

<script>
import Grid from '@/components/Grid.vue';
import Button from '@/components/Button.vue';

export default {
  name: 'App',
  components: {
    Grid,
    Button,
  },
};
</script>

<style>
#app {
  display: flex;
  justify-content: center;
  height: 100vh;
  background-color: var(--color-background);
}

/* .content {
} */

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
}
</style>
