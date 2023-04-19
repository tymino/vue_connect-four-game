<template>
  <div class="menu">
    <Button>play vs cpu</Button>
    <Button>play vs player</Button>
    <Button>game rules</Button>
  </div>
</template>

<script>
import Button from '@/components/UI/Button.vue';

export default {
  name: 'screen-menu',
  components: {
    Button,
  },
};
</script>

<style lang="scss" scoped>
.menu {
}
</style>
