<template>
  <div v-if="isRouteExisted" class="nav-page">
    <h1>
      {{'Nav: ' + JSON.stringify(route.params)}}
    </h1>
    <hr />
    <div class="sub-nav--wrapper">
      <p>Child Page</p>    
      <NuxtPage />
    </div>
  </div>
  <div class="not-found" v-else>
    <h1>{{'404 Not Found :('}}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
    name: 'NavPage',
    setup(props) {
      const route = useRoute()
      const isRouteExisted = ['a', 'b', 'c', 'd'].includes(route.params.nav as string)
      return ({
        isRouteExisted,
        route,
      })
    }
});
</script>

<style lang="css" scoped>
.nav-page {
  background-color: #eee;
  padding: 1rem;
}

.sub-nav--wrapper {
  padding: 1rem;
}

.not-found {
  opacity: 0.5;
  text-align: center;
}
</style>