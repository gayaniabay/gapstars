const EMPTY_STATE = 'emptyState'
export default {
  install(Vue) {
    Vue.mixin({
      data() {
        return {
          done: []
        }
      },
      created() {
        // this.$store.subscribe(mutation => {
        //   if (mutation.type !== EMPTY_STATE) {
        //     this.done.push(mutation)
        //   }
        // })
      },
      methods: {
        undo() {
          this.done.pop()
          this.$store.commit(EMPTY_STATE)
          this.done.forEach(mutation => {
            this.$store.commit(`${mutation.type}`, mutation.payload)
            this.done.pop()
          })
        }
      }
    })
  }
}
