<template>
  <div class="content">
    <div class="menu">
      <Logo class="menu__logo" />
      <Button
        class="menu__button"
        className="menu vscpu"
        @click="setScreenGame(true)"
        :isDisable="true"
        >play vs cpu</Button
      >
      <Button
        class="menu__button"
        className="menu vsplayer"
        @click="setScreenGame"
        >play vs player</Button
      >
      <Button
        class="menu__button"
        className="menu rules"
        @click="setScreenRules"
        >game rules</Button
      >
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex';
// import { computed } from 'vue';

import Logo from '@/components/UI/Logo.vue';
import Button from '@/components/UI/Button.vue';

export default {
  name: 'screen-menu',
  components: {
    Logo,
    Button,
  },
  setup() {
    const store = useStore();

    return {
      // screens: computed(() => store.state.screens),
      setScreenGame: (hasAI) => store.commit('setScreenGame', hasAI),
      setScreenRules: () => store.commit('setScreenRules'),
    };
  },
};
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: var(--color-floor);
}

.menu {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  padding: 40px 30px;

  background-color: var(--color-background);
  border: 2px solid var(--color-edge);
  border-radius: 8%;
  box-shadow: 0px 8px var(--color-edge);

  &__logo {
    margin-bottom: 40px;
  }

  &__button:not(:last-child) {
    margin-bottom: 20px;
  }
}
</style>
