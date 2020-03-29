/**
 * components/stream.vue
 * Displays info about a single stream
 */

<template>
  <a
    :class="state"
    :href="link"
    rel="noopener"
    target="_blank"
  >
    <div class="time">
      <span class="relative">{{ relative }}</span>
      <span class="absolute">{{ absolute }}</span>
    </div>

    <div class="info">
      <span class="name">{{ name }}</span>
    </div>
  </a>
</template>

<script>
  import format from 'date-fns/format'
  import formatDistance from 'date-fns/formatDistance'
  import isSameDay from 'date-fns/isSameDay'
  import { mapGetters } from 'vuex'

  export default {
    props: {
      name: {
        type: String,
        default: ''
      },

      startDatetime: {
        type: Date,
        default: null
      },

      endDatetime: {
        type: Date,
        default: null
      },

      link: {
        type: String,
        default: ''
      },

      state: {
        type: String,
        default: 'current',
        validator: v => ['past', 'current', 'future'].includes(v)
      }
    },

    computed: {
      ...mapGetters('streams', ['now']),

      absolute () {
        if (this.sameDay) {
          return format(this.startDatetime, 'h:mm a')
        } else {
          return format(this.startDatetime, 'MM/dd/yyyy h:mma')
        }
      },

      relative () {
        if (this.state === 'past') {
          return null
        } else if (this.state === 'current' && this.endDatetime != null) {
          return 'ends in ' + formatDistance(this.endDatetime, this.now)
        } else if (this.state === 'current') {
          return 'started ' + formatDistance(this.now, this.endDatetime) + ' ago'
        } else {
          return formatDistance(this.startDatetime, this.now)
        }
      },

      sameDay () {
        return isSameDay(this.startDatetime, this.now)
      }
    }
  }
</script>

<style scoped>
  a {
    align-content: center;
    align-items: center;
    border: 1px solid transparent;
    color: #fff;
    display: flex;
    justify-content: stretch;
    margin: 1rem 0;
    min-height: 42px;
    text-decoration: none;
  }

  .past {
    background: linear-gradient(236deg, #262626, #222121 50vw);
    border-color: #111;
  }

  .current {
    background: linear-gradient(236deg, #cc0707, #ab0404 50vw);
    border-color: #450a0a;
  }

  .future {
    background: linear-gradient(236deg, #154e57, #0e3940 50vw);
    border-color: #062328;
  }

  .time {
    min-width: 12ch;
    padding: 0.4rem;
    text-align: center;
    width: 30vw;
  }

  .time > * {
    display: block;
    margin: 0.3rem;
  }

  .time > :last-child {
    font-size: 0.8rem;
  }

  .info {
    font-weight: bold;
    padding: 0.4rem;
  }
</style>
