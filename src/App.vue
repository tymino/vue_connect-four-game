<template>
  <div class="content">
    <div class="content__header header">
      <div class="header__button">
        <Button>menu</Button>
      </div>
      <Logo class="header__logo" />
      <div class="header__button">
        <Button>restart</Button>
      </div>
    </div>
    <div class="content__grid">
      <Grid />
    </div>

    <div class="content__card-1"><Card numberOfPlayer="1" score="4" /></div>

    <div class="content__card-2"><Card numberOfPlayer="2" score="10" /></div>

    <div class="content__table"></div>
    <div class="content__timer">
      <Timer />
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button.vue';
import Card from '@/components/Card.vue';
import Grid from '@/components/Grid.vue';
import Logo from '@/components/Logo.vue';
import Timer from '@/components/Timer.vue';

export default {
  name: 'App',
  components: {
    Button,
    Card,
    Grid,
    Logo,
    Timer,
  },
};
</script>

<style lang="scss">
.content {
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, auto);
  justify-items: center;
  align-items: center;
  width: 100%;
  max-width: 850px;

  &__header {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
  }

  &__grid {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    z-index: 2;
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

  &__table {
    --table-radius-back: 20px;
    --table-radius-front: 40px;

    position: absolute;
    bottom: -40px;
    left: 0;
    height: 100px;
    width: 100%;
    background-color: var(--color-floor);
    border-radius: var(--table-radius-back) var(--table-radius-back)
      var(--table-radius-front) var(--table-radius-front);
  }

  &__timer {
    position: absolute;
    bottom: -40px;
    z-index: 5;
  }
}

.header {
  display: grid;
  grid-template-columns: 140px auto 140px;
  grid-template-rows: 1fr;
  align-items: center;
  width: 100%;
  padding: 34px 0;

  &__logo {
    justify-content: center;
  }

  &__button {
    &:last-child {
      justify-self: flex-end;
    }
  }
}
</style>
