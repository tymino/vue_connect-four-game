<template>
  <div>
    <Menu v-if="currentScreen === 'menu'" />
    <Game v-else-if="currentScreen === 'game'" />
    <Rules v-else-if="currentScreen === 'rules'" />
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';

import Menu from '@/components/screens/Menu.vue';
import Game from '@/components/screens/Game.vue';
import Rules from '@/components/screens/Rules.vue';

export default {
  name: 'App',
  components: {
    Menu,
    Game,
    Rules,
  },
  setup() {
    const store = useStore();

    return {
      currentScreen: computed(() => store.state.currentScreen),
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
