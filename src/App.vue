<template>
  <div class="content">
    <div class="header">
      <div class="header__button">
        <Button>menu</Button>
      </div>
      <Logo />
      <div class="header__button">
        <Button>restart</Button>
      </div>
    </div>
    <Grid />
  </div>
</template>

<script>
import Grid from '@/components/Grid.vue';
import Button from '@/components/Button.vue';
import Logo from '@/components/Logo.vue';

export default {
  name: 'App',
  components: {
    Grid,
    Button,
    Logo,
  },
};
</script>

<style lang="scss">
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
  flex-shrink: 1;
  padding: 10px 0;

  &__button {
    width: 100px;
  }
}
</style>
