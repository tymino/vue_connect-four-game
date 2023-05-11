<template>
  <div>
    <component :is="currentScreen"></component>
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
      screens: computed(() => store.state.screens),
      currentScreen: computed(() => store.state.currentScreen),
    };
  },
};
</script>
