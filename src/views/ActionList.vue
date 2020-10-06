<template>
    <div class="bg-white rounded shadow-md lg:mx-10 my-10">
        <h1 class="p-5">List of actions comitted</h1>
		<div class="bg-gray p-5">
			<ActionCard v-for="(card, index) in actionList" :key="index" :actionId="index" :card="card" @removeCard="removeActionCard"></ActionCard>
		</div>
    </div>
</template>

<script>
import ActionCard from '@/components/ActionCard.vue'
import { mapState, mapMutations } from 'vuex'
export default {
  components: {
    ActionCard
  },
  data() {
    return {
      actionId: 0
    }
  },
  computed: {
    ...mapState(['actionList'])
  },
  methods: {
    ...mapMutations(['REMOVE_ACTION_CARD', 'OVERINDEX_LIST']),
    removeActionCard(index) {
      let currentIndex = index
      let overIndex = this.actionList.filter(function(action, index) {
        return index <= currentIndex
      })
      let arrLength = overIndex.length
      this.REMOVE_ACTION_CARD({ index: currentIndex, length: arrLength })
      this.OVERINDEX_LIST(overIndex)
    }
  }
}
</script>
<style scoped>
</style>
