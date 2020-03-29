/**
 * pages/index.vue
 * The homepage
 */

<template>
  <div>
    <h1>Streams</h1>

    <div class="past" v-if="past.length">
      <h2>Past Streams</h2>

      <edm-stream
        v-for="(s, idx) in past"
        :key="idx"
        v-bind="s"
        state="past"
      />
    </div>

    <div
      v-if="current.length"
      ref="current"
      class="current"
    >
      <h2>Current Streams</h2>

      <edm-stream
        v-for="(s, idx) in current"
        :key="idx"
        v-bind="s"
        state="current"
      />
    </div>

    <div class="future" v-if="future.length">
      <h2>Future Streams</h2>

      <edm-stream
        v-for="(s, idx) in future"
        :key="idx"
        v-bind="s"
        state="future"
      />
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  import EdmStream from '~/components/stream'

  export default {
    components: {
      EdmStream
    },

    data: () => ({
      interval: null
    }),

    computed: {
      ...mapGetters('streams', ['past', 'current', 'future'])
    },

    mounted () {
      if (this.$refs.current != null) {
        this.$refs.current.scrollIntoView(true)
      }

      this.interval = setInterval(() => {
        this.$store.commit('streams/updateTime')
      }, 1000)
    },

    beforeDestroy () {
      if (this.interval != null) {
        clearInterval(this.interval)
      }
    }
  }
</script>

<style scoped>
  h1,
  h2 {
    padding: 0 1rem;
  }
</style>
