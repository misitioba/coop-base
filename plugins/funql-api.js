import Vue from 'vue'
import funql from 'funql-api/client.cjs'

let fql = null

Vue.use({
  install() {
    Vue.prototype.$fql = function () {
      if (!fql) {
        fql = funql(location.origin, {
          debug(prefix) {
            return function () {
              const args = Array.prototype.slice.call(arguments)
              args.unshift(prefix)
              return Vue.$log.debug.apply(this, args)
            }
          },
        })
      }
      return fql.apply(this, arguments)
    }
  },
})
