<template>
  <div v-if="pending">
    Loading...
  </div>
  <div v-else>
    <div v-if="isRouteExisted" class="nav-page">
      <h1>
        {{'Nav: ' + JSON.stringify(route.params)}}
      </h1>
      <span>{{randomNum}}</span>
      <hr />
      <div class="sub-nav--wrapper">
        <p>Child Page</p>    
        <NuxtPage :randomNum="randomNum" />
      </div>
    </div>
    <div class="not-found" v-else>
      <h1>{{'404 Not Found :('}}</h1>
    </div>
  </div>
</template>

<script lang="ts">
import mockApiQuery from '~~/src/lib/mockApiQuery'
import { defineComponent, PropType } from 'vue';

export default defineComponent({
    name: 'NavPage',
    async setup(props) {
      const route = useRoute()
      const navSubnav = computed(() => (
        route.params.nav as string + route.params.subNav as string
      ))

      const isRouteExisted = computed(() => (
        ['a', 'b', 'c', 'd'].includes(route.params.nav as string)
      ));
      onMounted(() => {
        console.log('page mounted')
      })
      watch([navSubnav], () => {
        if(!isRouteExisted.value) return;
        // refresh()
      })
      // watch(() => route.params.subNav, () => {
      //   if(!isRouteExisted.value) return;
      //   refresh()
      // })

      const queryFn = async () => {
        return await mockApiQuery(0.5, navSubnav.value)
      }

      const {
        data: randomNum,
        refresh,
        error,
        pending,
      } = await useAsyncData('nav', queryFn, {
        lazy: true,
      })

      return ({
        pending,
        randomNum,
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