<template>
  <div class="content">
    <div class="game">
      <div class="game__header header">
        <div class="header__button">
          <Button @click="setScreenMenu">menu</Button>
        </div>
        <Logo class="header__logo" />
        <div class="header__button">
          <Button @click="handleRestartGame">restart</Button>
        </div>
      </div>
      <div class="game__grid">
        <Grid
          :gameGrid="gameGrid"
          :handleCellClick="handleCellClick"
          :lastColumn="lastColumn"
        />
      </div>

      <div class="game__card-1">
        <Card numberOfPlayer="1" :score="score.player1" />
      </div>

      <div class="game__card-2">
        <Card numberOfPlayer="2" :score="score.player2" />
      </div>

      <div
        class="game__table"
        :class="`game__table-${getWinnerIndexForColor}`"
      ></div>
      <div class="game__game-info">
        <Result
          v-if="isGameEnd"
          :winner="getWinner"
          :handleRestartGame="handleRestartGame"
        />
        <Timer v-else :time="time" :textInfo="currentStep" />
      </div>
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
import Grid from '@/components/UI/Grid.vue';

export default {
  name: 'screen-game',
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
      setScreenMenu: () => store.commit('setScreenMenu'),
      handleRestartGame: () => store.dispatch('handleRestartGame'),
      isGameEnd: computed(() => store.state.isGameEnd),
      lastColumn: computed(() => store.state.lastColumn),
      score: computed(() => store.state.score),
      currentStep: computed(() => store.getters.getCurrentStep),
      getWinnerIndexForColor: computed(
        () => store.getters.getWinnerIndexForColor
      ),
      time: computed(() => store.getters.getTime),
      gameGrid: computed(() => store.getters.getFlatGrid),
      getWinner: computed(() => store.getters.getWinner),
      handleCellClick: ({ target }) =>
        store.dispatch('handleCellClick', target),
    };
  },
};
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 130vh;
  padding-top: 10px;
  background-color: var(--color-background);
}

.game {
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
    padding-top: 50px;
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

    &-1 {
      background-color: var(--color-player-first);
    }
    &-2 {
      background-color: var(--color-player-second);
    }
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

  &__logo {
    justify-content: center;
  }

  &__button {
    &:last-child {
      justify-self: flex-end;
    }
  }
}

@media (max-width: 730px) {
  .content {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height: 120vh;
    padding-top: 60px;
    background-color: var(--color-background);
  }
  .game {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, auto);
    max-width: 480px;

    &__header {
      grid-column: 1 / 3;
      grid-row: 1 / 2;
      margin-bottom: 40px;
    }

    &__grid {
      grid-column: 1 / 3;
      grid-row: 3 / 4;
      z-index: 2;
    }

    &__card {
      &-1 {
        grid-column: 1 / 2;
        grid-row: 2 / 3;
        justify-self: flex-start;
        padding-left: 10px;
      }
      &-2 {
        grid-column: 2 / 3;
        grid-row: 2 / 3;
        justify-self: flex-end;
        padding-right: 10px;
      }
    }
  }
}

@media (max-width: 520px) {
  .game {
    margin: 0 14px;

    &__game-info {
      bottom: -90px;
    }
  }
}
</style>
