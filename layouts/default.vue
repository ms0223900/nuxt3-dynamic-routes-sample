<template>
  <header>
    <ul class="nav">
      <li v-for="(l) in linkList" :key="l">
        <NuxtLink :to="l">
          {{l}}
        </NuxtLink>
      </li>
    </ul>
  </header>
  <slot />
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
    name: 'Layout',
    setup(props) {
      const linkList = [
        '/',
        '/about',
        '/a',
        '/b',
        '/c/d',
        '/c/e',
        '/d/e/f',
        '/d/e/g',
        '/e'
      ]
      return ({
        linkList
      })
    }
});
</script>

<style lang="css" scoped>
.nav {
  display: flex;
  justify-content: center;
  padding-bottom: 1rem;
  border-bottom: 2px solid #aaa;
}
li {
  display: block;
  padding-left: 1rem;
}
</style>