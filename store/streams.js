/**
 * store/streams.js
 * Handles the Vuex store logic for all of the live streams
 */

import add from 'date-fns/add'
import parse from 'date-fns/parse'

const DEFAULT_STREAM_LENGTH = { minutes: 30 }

const timezones = {
  PDT: '-07',
  PST: '-08'
}

const parseDatetime = (datetime) => {
  const offset = timezones[datetime.substring(datetime.length - 3)]
  const newDatetime = (offset != null) ? datetime.slice(0, -4) : datetime

  return parse(`${newDatetime} ${offset}`, 'yyyy-MM-dd h:mma x', new Date())
}

const formatStream = data => ({
  name: data.name || '',
  startDatetime: parseDatetime(data.startDatetime),
  endDatetime: (data.endDatetime != null) ? parseDatetime(data.endDatetime) : null,
  link: data.link || ''
})

const streams = require('~/data/streams')
  .map(formatStream)
  .sort((a, b) => (a.datetime - b.datetime))

export const state = () => ({
  datetime: Date.now()
})

export const getters = {
  now (state) {
    return state.datetime
  },

  past (state) {
    return streams.filter(({ startDatetime, endDatetime }) => {
      if (endDatetime != null && endDatetime > state.datetime) {
        return false
      } else {
        return (startDatetime < state.datetime)
      }
    })
  },

  current (state) {
    return streams.filter(({ startDatetime, endDatetime }) => {
      const [start, end] = (endDatetime != null)
        ? [startDatetime, endDatetime]
        : [startDatetime, add(startDatetime, DEFAULT_STREAM_LENGTH)]

      return (start < state.datetime && end > state.datetime)
    })
  },

  future (state) {
    return streams.filter(({ startDatetime }) => {
      return (startDatetime > state.datetime)
    })
  }
}

export const mutations = {
  updateTime (state) {
    state.datetime = new Date()
  }
}
