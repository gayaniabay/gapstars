<template>
    <div class="bg-white rounded shadow-md my-5 px-5 py-3 flex items-center justify-between">
        <div>
            <p class="text-sm">Moved post {{card.id}} from index {{card.from}} to index {{card.to}}</p>
        </div>
        <div>
            <button class="btn rounded px-3 py-2 text-sm font-semibold bg-green tracking-wide hover:bg-opacity-50" @click="undoState(actionId,card.from,card.to)">Time travel</button>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  props: {
    card: Object,
    actionId: Number
  },
  methods: {
    ...mapMutations(['MOVE_ELEMENT']),
    undoState(index, from, to) {
      this.MOVE_ELEMENT({ from: to, to: from })
      this.$emit('removeCard', index)
    }
  }
}
</script>
<style scoped>
</style>
