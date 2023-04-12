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
    <div class="content__grid"><Grid /></div>

    <div class="content__card-1"><Card numberOfPlayer="1" score="4" /></div>

    <div class="content__card-2"><Card numberOfPlayer="2" score="10" /></div>

    <!-- <div class="table"></div> -->
  </div>
</template>

<script>
import Button from '@/components/Button.vue';
import Card from '@/components/Card.vue';
import Grid from '@/components/Grid.vue';
import Logo from '@/components/Logo.vue';

export default {
  name: 'App',
  components: {
    Button,
    Card,
    Grid,
    Logo,
  },
};
</script>

<style lang="scss">
.content {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, auto);
  justify-items: center;
  align-items: center;
  width: 100%;
  max-width: 850px;
  // z-index: 10;

  &__header {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
  }

  &__grid {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    // z-index: 1000;
  }

  &__card {
    &-1 {
      grid-column: 1 / 2;
      grid-row: 1 / 3;
    }
    &-2 {
      grid-column: 3 / 4;
      grid-row: 1 / 3;
    }
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
