<template>
  <div class="content">
    <div class="content__header header">
      <div class="header__button">
        <Button>menu</Button>
      </div>
      <Logo />
      <div class="header__button">
        <Button>restart</Button>
      </div>
    </div>
    <div class="content__grid">
      <Grid />
    </div>

    <!-- <div class="table"></div> -->
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
.content {
  // display: grid;
  // grid-template-columns: repeat(5, 1fr);
  // grid-template-rows: repeat(2, minmax(100px, 1fr));
  // width: 100%;
  // z-index: 10;

  &__grid {
    z-index: 1000;
  }
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;

  &__button {
    width: 100px;
  }
}

// .table {
//   position: absolute;
//   bottom: -10px;
//   left: 0;
//   height: 300px;
//   width: 100%;
//   background-color: var(--color-floor);
// }
</style>
