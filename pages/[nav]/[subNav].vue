<template>
  <div class="sub-nav-page">
    <h2 v-if="route.params.subNav">{{`SubNav: ${route.params.subNav}`}}</h2>
    <div class="id-page--wrapper">
      <NuxtPage />
    </div>
  </div>
</template>

<script lang="ts">
import { CSSProperties, defineComponent, PropType } from 'vue';

export default defineComponent({
    name: 'SubNavPage',
    setup(props) {
      const route = useRoute()
      return ({
        route,
      })
    }
});
</script>

<style lang="css" scoped>
.sub-nav-page {
  background-color: #dddddd;
}
.id-page--wrapper {
  padding: 1rem;
}
</style>