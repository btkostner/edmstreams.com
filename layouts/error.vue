/**
 * layouts/error.vue
 * The error layout for our page.
 */

<template>
  <div>
    <h1>{{ error.statusCode || 500 }}</h1>
    <h2 v-if="error.statusCode === 404">
      music not found
    </h2>
    <h2 v-else>
      we've gone deaf
    </h2>

    <nuxt-link class="button" to="/">
      Go Home
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'message',

  props: {
    error: {
      type: Object,
      default: () => ({ statusCode: 404 })
    }
  }
})
</script>

<style scoped>
a {
  display: block;
}
</style>
