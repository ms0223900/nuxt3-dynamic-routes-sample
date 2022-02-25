<template>
  <div class="id-page">
    <h3 v-if="showId">{{'Id: ' + route.params.id}}</h3>
    <h1>
      {{ route.params.id }}
    </h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
    name: 'IdPage',
    setup(props) {
      const route = useRoute()
      const showId = computed(() => (
        typeof route.params.id === 'string' && route.params.id
      ))
      return ({
        showId,
        route,
      })
    }
});
</script>

<style lang="css" scoped>
.id-page {
  background-color: #bbb;
}
</style>