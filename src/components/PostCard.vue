<template>
    <div class="bg-white rounded shadow-md my-5 p-5 flex items-center justify-between">
      <div>
        <h4 class="font-medium">Post {{post.id}}: <span class="text-sm">{{ post.title }}</span></h4>
        <p class="text-sm py-2">{{post.body}}</p>
      </div>
      <div>
        <button v-if="cardIndex != 0"  @click="addActionCard(cardId,cardIndex,cardIndex-1)">
          <svg class="h-8 w-8 text-purple hover:bg-opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd" />
          </svg>
        </button>
        <button @click="addActionCard(cardId,cardIndex,cardIndex+1)">
          <svg class="h-8 w-8 text-purple hover:bg-opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  props: {
    post: Object,
    cardIndex: Number,
    cardId: Number,
    moveTo: String
  },
  computed: {
    ...mapState(['actionList'])
  },
  methods: {
    ...mapMutations(['ADD_ACTION_CARD']),
    addActionCard(id, from, to) {
      this.ADD_ACTION_CARD({
        id: id,
        from: from,
        to: to
      })
      this.$emit('moveElement', { from: from, to: to })
    }
  }
}
</script>

<style scoped>
</style>
