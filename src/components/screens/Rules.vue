<template>
  <div class="content">
    <div class="rules">
      <div class="rules__title">{{ rules.title }}</div>
      <div
        class="rules__section"
        v-for="section in rules.sections"
        :key="section.id"
      >
        <div class="rules__section-header">{{ section.header }}</div>
        <div
          class="rules__section-body"
          v-for="(item, index) in section.body"
          :key="item"
        >
          <span v-if="section.hasNumeric">{{ index + 1 }}</span>
          <span>{{ item }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';

export default {
  name: 'screen-rules',
  setup() {
    const store = useStore();

    return {
      rules: computed(() => store.state.rules),
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
.rules {
  width: 360px;
  max-width: 100%;

  padding: 20px;

  background-color: var(--color-board);
  border: 2px solid var(--color-edge);
  border-radius: 20px;
  box-shadow: 0px 8px var(--color-edge);
}

.rules__title {
  font-size: 2rem;
  font-weight: var(--font-bold);
  line-height: 2rem;
  text-align: center;
  text-transform: uppercase;
}

.rules__section {
  margin-top: 20px;

  &-header {
    font-size: 1.1rem;
    color: var(--color-background);
    text-transform: uppercase;
  }

  &-body {
    display: flex;
    font-size: .9rem;
    font-weight: var(--font-normal);

    & > span:first-child {
      display: block;
      margin-right: 10px;
    }
  }
}
</style>
