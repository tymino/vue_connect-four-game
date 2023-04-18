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
      <Grid :gameGrid="gameGrid" :handleCellClick="handleCellClick" />
    </div>

    <div class="content__card-1">
      <Card numberOfPlayer="1" :score="score.player1" />
    </div>

    <div class="content__card-2">
      <Card numberOfPlayer="2" :score="score.player2" />
    </div>

    <div class="content__table"></div>
    <div class="content__game-info">
      <Result v-if="isGameEnd" />
      <Timer v-else :time="time" :textInfo="currentStep" />
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed, onMounted } from 'vue';

import Button from '@/components/UI/Button.vue';
import Card from '@/components/UI/Card.vue';
import Logo from '@/components/UI/Logo.vue';
import Result from '@/components/UI/Result.vue';
import Timer from '@/components/UI/Timer.vue';
import Grid from '@/components/Grid.vue';

export default {
  name: 'App',
  components: {
    Button,
    Card,
    Grid,
    Logo,
    Result,
    Timer,
  },
  setup() {
    const store = useStore();

    onMounted(() => {
      store.dispatch('startTimer');
    });

    return {
      isGameEnd: computed(() => store.state.isGameEnd),
      score: computed(() => store.state.score),
      currentStep: computed(() => store.getters.getCurrentStep),
      time: computed(() => store.getters.getTime),
      gameGrid: computed(() => store.getters.getFlatGrid),
      handleCellClick: ({ target }) =>
        store.dispatch('handleCellClick', target),
    };
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
    --table-radius-back: 10px;
    --table-radius-front: 50%;

    position: absolute;
    bottom: -130px;
    left: 0;
    height: 180px;
    width: 100%;
    background-color: var(--color-floor);
    border-radius: var(--table-radius-front) var(--table-radius-front)
      var(--table-radius-back) var(--table-radius-back);
  }

  &__game-info {
    position: absolute;
    bottom: -80px;
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
